require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: ['http://localhost:8081', 'exp://192.168.1.3:8081'], 
  credentials: true
}));
app.use(bodyParser.json());

// Configuration MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'examali',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Vérification connexion DB
async function testConnection() {
  try {
    const conn = await pool.getConnection();
    console.log('✅ Connecté à MySQL!');
    conn.release();
  } catch (err) {
    console.error('Erreur MySQL:', err);
    process.exit(1);
  }
}

// Initialisation DB
async function initializeDB() {
  try {
    // Table utilisateurs
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        niveauEtude VARCHAR(50) NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    // Table sujets
    await pool.query(`
      CREATE TABLE IF NOT EXISTS sujet (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        date DATE NOT NULL,
        year INT NOT NULL,
        file VARCHAR(255) NOT NULL,
        filePath VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Table chats (conversations)
    await pool.query(`
      CREATE TABLE IF NOT EXISTS chats (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user1_id INT NOT NULL,
        user2_id INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user1_id) REFERENCES users(id),
        FOREIGN KEY (user2_id) REFERENCES users(id),
        UNIQUE KEY unique_chat (user1_id, user2_id)
      )
    `);

    // Table messages
    await pool.query(`
      CREATE TABLE IF NOT EXISTS messages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        chat_id INT NOT NULL,
        sender_id INT NOT NULL,
        text TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (chat_id) REFERENCES chats(id),
        FOREIGN KEY (sender_id) REFERENCES users(id)
      )
    `);

    console.log('✅ DB initialisée');
  } catch (err) {
    console.error('Erreur initialisation DB:', err);
    throw err;
  }
}

// Middleware d'authentification
async function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Authentification requise' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'votre_secret_secure');
    req.user = decoded;
    next();
  } catch (err) {
    console.error('Erreur vérification token:', err);
    res.status(401).json({ error: 'Token invalide' });
  }
}

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'API Examali' });
});

// Route pour récupérer un sujet par son id (pour PDF)
app.get('/api/sujet/:id', async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id, name, description, date, year, file, filePath FROM sujet WHERE id = ?',
      [req.params.id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Sujet non trouvé' });
    }
    res.json(rows[0]);
  } catch (err) {
    console.error('Erreur récupération sujet par id:', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Route pour ajouter un nouveau sujet
app.post('/api/sujet', authenticate, async (req, res) => {
  const { name, description, date, year, file, filePath } = req.body;

  // Validation
  if (!name || !description || !date || !year || !file || !filePath) {
    console.log('Validation failed: Missing fields');
    return res.status(400).json({ error: 'Tous les champs sont requis' });
  }

  try {
    // Insérer le sujet dans la base de données
    const [result] = await pool.query(
      'INSERT INTO sujet (name, description, date, year, file, filePath) VALUES (?, ?, ?, ?, ?, ?)',
      [name, description, date, year, file, filePath]
    );

    // Récupérer le sujet nouvellement créé
    const [newSujet] = await pool.query(
      'SELECT id, name, description, date, year, file, filePath FROM sujet WHERE id = ?',
      [result.insertId]
    );

    console.log('Sujet créé avec succès:', newSujet[0]);
    res.status(201).json(newSujet[0]);
  } catch (err) {
    console.error('Erreur création sujet:', err);
    res.status(500).json({ error: 'Erreur serveur lors de la création du sujet' });
  }
});

// Route pour récupérer tous les utilisateurs
app.get('/api/users', authenticate, async (req, res) => {
  try {
    const [users] = await pool.query(
      'SELECT id, username, email, niveauEtude FROM users WHERE id != ?',
      [req.user.userId]
    );
    console.log('Fetched users:', users);
    res.json(users);
  } catch (err) {
    console.error('Erreur récupération utilisateurs:', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Route d'inscription
app.post('/api/auth/register', async (req, res) => {
  const { username, email, password, niveauEtude } = req.body;

  console.log('Received registration request:', { username, email, niveauEtude });

  // Validation
  if (!username || !email || !password || !niveauEtude) {
    console.log('Validation failed: Missing fields');
    return res.status(400).json({ message: 'Tous les champs sont requis' });
  }

  if (!['DEF', 'BAC'].includes(niveauEtude)) {
    console.log('Validation failed: Invalid niveauEtude');
    return res.status(400).json({ message: 'Niveau d\'étude invalide' });
  }

  try {
    // Vérifier si l'email existe déjà
    const [existingUsers] = await pool.query(
      'SELECT id FROM users WHERE email = ?',
      [email]
    );

    if (existingUsers.length > 0) {
      console.log('Validation failed: Email already exists');
      return res.status(400).json({ message: 'Cet email est déjà utilisé' });
    }

    // Hacher le mot de passe
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insérer l'utilisateur
    const [result] = await pool.query(
      'INSERT INTO users (username, email, password, niveauEtude) VALUES (?, ?, ?, ?)',
      [username, email, hashedPassword, niveauEtude]
    );

    // Générer un token JWT
    const token = jwt.sign(
      { userId: result.insertId, email, id: result.insertId },
      process.env.JWT_SECRET || 'votre_secret_secure',
      { expiresIn: '7d' }
    );

    console.log('User registered successfully:', { userId: result.insertId, email });
    res.status(201).json({ token });
  } catch (err) {
    console.error('Erreur inscription:', err);
    res.status(500).json({ message: 'Erreur serveur lors de l\'inscription' });
  }
});

// Route de connexion
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  console.log('Received login request:', { email });

  if (!email || !password) {
    return res.status(400).json({ message: 'Email et mot de passe requis' });
  }

  try {
    const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

    if (users.length === 0) {
      console.log('Login failed: User not found');
      return res.status(400).json({ message: 'Identifiants invalides' });
    }

    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.log('Login failed: Incorrect password');
      return res.status(400).json({ message: 'Identifiants invalides' });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email, id: user.id },
      process.env.JWT_SECRET || 'votre_secret_secure',
      { expiresIn: '7d' }
    );

    console.log('User logged in successfully:', { userId: user.id, email });
    res.json({ token });
  } catch (err) {
    console.error('Erreur connexion:', err);
    res.status(500).json({ message: 'Erreur serveur lors de la connexion' });
  }
});

// Routes de chat
app.get('/api/chats', authenticate, async (req, res) => {
  try {
    const [chats] = await pool.query(`
      SELECT c.id, 
             u1.id as user1_id, u1.username as user1_username,
             u2.id as user2_id, u2.username as user2_username,
             (SELECT text FROM messages WHERE chat_id = c.id ORDER BY created_at DESC LIMIT 1) as last_message,
             (SELECT created_at FROM messages WHERE chat_id = c.id ORDER BY created_at DESC LIMIT 1) as last_message_time
      FROM chats c
      JOIN users u1 ON c.user1_id = u1.id
      JOIN users u2 ON c.user2_id = u2.id
      WHERE c.user1_id = ? OR c.user2_id = ?
      ORDER BY last_message_time DESC
    `, [req.user.userId, req.user.userId]);

    res.json(chats);
  } catch (err) {
    console.error('Erreur récupération chats:', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.post('/api/chats', authenticate, async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ error: 'ID utilisateur requis' });
  }

  try {
    const [existing] = await pool.query(`
      SELECT id FROM chats 
      WHERE (user1_id = ? AND user2_id = ?) 
      OR (user1_id = ? AND user2_id = ?)
    `, [req.user.userId, userId, userId, req.user.userId]);

    if (existing.length > 0) {
      return res.json({ chatId: existing[0].id });
    }

    const [result] = await pool.query(
      'INSERT INTO chats (user1_id, user2_id) VALUES (?, ?)',
      [req.user.userId, userId]
    );

    res.status(201).json({ chatId: result.insertId });
  } catch (err) {
    console.error('Erreur création chat:', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.get('/api/chats/:chatId/messages', authenticate, async (req, res) => {
  try {
    const { lastMessageId } = req.query;

    const [chat] = await pool.query(
      'SELECT id FROM chats WHERE id = ? AND (user1_id = ? OR user2_id = ?)',
      [req.params.chatId, req.user.userId, req.user.userId]
    );

    if (chat.length === 0) {
      return res.status(403).json({ error: 'Accès non autorisé' });
    }

    let query = `
      SELECT m.*, u.username as sender_name
      FROM messages m
      JOIN users u ON m.sender_id = u.id
      WHERE m.chat_id = ?
    `;
    let params = [req.params.chatId];

    if (lastMessageId) {
      query += ' AND m.id > ?';
      params.push(lastMessageId);
    }

    query += ' ORDER BY m.created_at ASC';

    const [messages] = await pool.query(query, params);
    res.json(messages);
  } catch (err) {
    console.error('Erreur récupération messages:', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.post('/api/chats/:chatId/messages', authenticate, async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Message vide' });
  }

  try {
    const [chat] = await pool.query(
      'SELECT id FROM chats WHERE id = ? AND (user1_id = ? OR user2_id = ?)',
      [req.params.chatId, req.user.userId, req.user.userId]
    );

    if (chat.length === 0) {
      return res.status(403).json({ error: 'Accès non autorisé' });
    }

    const [result] = await pool.query(
      'INSERT INTO messages (chat_id, sender_id, text) VALUES (?, ?, ?)',
      [req.params.chatId, req.user.userId, text]
    );

    const [message] = await pool.query(`
      SELECT m.*, u.username as sender_name
      FROM messages m
      JOIN users u ON m.sender_id = u.id
      WHERE m.id = ?
    `, [result.insertId]);

    res.status(201).json(message[0]);
  } catch (err) {
    console.error('Erreur envoi message:', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Gestion erreurs
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint non trouvé' });
});

app.use((err, req, res, next) => {
  console.error('Erreur:', err);
  res.status(500).json({ error: 'Erreur interne' });
});

// Démarrage
async function start() {
  try {
    await testConnection();
    await initializeDB();
    app.listen(PORT, 'localhost', () => {
      console.log(`🚀 API démarrée sur http://localhost:${PORT}`);
      console.log(`Accessible via http://192.168.1.3:${PORT} on local network`);
    });
  } catch (err) {
    console.error('Échec démarrage:', err);
    process.exit(1);
  }
}

start();




