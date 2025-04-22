// const express = require("express");
// const mysql = require("mysql");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json()); // Pour traiter les données en JSON

// // Connexion à la base de données MySQL
// const db = mysql.createConnection({
//   host: "localhost", // Change selon ton hébergement (ex: '127.0.0.1' ou un serveur distant)
//   user: "root", // Ton nom d'utilisateur MySQL
//   password: "", // Ton mot de passe MySQL
//   database: "examali", // Le nom de ta base de données
// });

// // Vérifier la connexion
// db.connect((err) => {
//   if (err) {
//     console.error("Erreur de connexion à MySQL :", err);
//     return;
//   }
//   console.log("✅ Connecté à MySQL !");
// });

// // Route de test
// app.get("/", (req, res) => {
//   res.send("Bienvenue sur le serveur Express avec MySQL !");
// });

// // Démarrer le serveur
// app.listen(5000, '0.0.0.0', () => {
//   console.log("🚀 Serveur démarré sur le port 5000");
// });

// // Route pour ajouter un utilisateur
// app.post("/register", (req, res) => {
//   const { name, email, password } = req.body;
//   const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  
//   db.query(sql, [name, email, password], (err, result) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//     } else {
//       res.json({ message: "Utilisateur ajouté avec succès !" });
//     }
//   });
// });
// // Endpoint pour récupérer un PDF
// app.get('/pdf/:id', (req, res) => {
//   const pdfId = req.params.id;
//   db.query('SELECT file_data FROM pdf_files WHERE id = ?', [pdfId], (err, result) => {
//     if (err) {
//       res.status(500).send('Erreur de requête SQL');
//     } else if (result.length > 0) {
//       res.setHeader('Content-Type', 'application/pdf');
//       res.send(result[0].file_data);
//     } else {
//       res.status(404).send('PDF non trouvé');
//     }
//   });
// });





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
  origin: ['http://localhost:8081', 'exp://192.168.1.16:8081'],
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

// Routes d'authentification (existantes)
app.post('/api/auth/register', async (req, res) => {
  /* ... (conservez votre code existant) ... */
});

app.post('/api/auth/login', async (req, res) => {
  /* ... (conservez votre code existant) ... */
});

// Routes de chat
/**
 * @route GET /api/chats
 * @desc Récupère toutes les conversations de l'utilisateur
 */
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

/**
 * @route POST /api/chats
 * @desc Crée une nouvelle conversation
 */
app.post('/api/chats', authenticate, async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ error: 'ID utilisateur requis' });
  }

  try {
    // Vérifier si le chat existe déjà
    const [existing] = await pool.query(`
      SELECT id FROM chats 
      WHERE (user1_id = ? AND user2_id = ?) 
      OR (user1_id = ? AND user2_id = ?)
    `, [req.user.userId, userId, userId, req.user.userId]);

    if (existing.length > 0) {
      return res.json({ chatId: existing[0].id });
    }

    // Créer un nouveau chat
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

/**
 * @route GET /api/chats/:chatId/messages
 * @desc Récupère les messages d'une conversation
 */
app.get('/api/chats/:chatId/messages', authenticate, async (req, res) => {
  try {
    // Vérifier que l'utilisateur fait partie du chat
    const [chat] = await pool.query(
      'SELECT id FROM chats WHERE id = ? AND (user1_id = ? OR user2_id = ?)',
      [req.params.chatId, req.user.userId, req.user.userId]
    );

    if (chat.length === 0) {
      return res.status(403).json({ error: 'Accès non autorisé' });
    }

    const [messages] = await pool.query(`
      SELECT m.*, u.username as sender_name
      FROM messages m
      JOIN users u ON m.sender_id = u.id
      WHERE m.chat_id = ?
      ORDER BY m.created_at ASC
    `, [req.params.chatId]);

    res.json(messages);
  } catch (err) {
    console.error('Erreur récupération messages:', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

/**
 * @route POST /api/chats/:chatId/messages
 * @desc Envoie un message dans une conversation
 */
app.post('/api/chats/:chatId/messages', authenticate, async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Message vide' });
  }

  try {
    // Vérifier que l'utilisateur fait partie du chat
    const [chat] = await pool.query(
      'SELECT id FROM chats WHERE id = ? AND (user1_id = ? OR user2_id = ?)',
      [req.params.chatId, req.user.userId, req.user.userId]
    );

    if (chat.length === 0) {
      return res.status(403).json({ error: 'Accès non autorisé' });
    }

    // Enregistrer le message
    const [result] = await pool.query(
      'INSERT INTO messages (chat_id, sender_id, text) VALUES (?, ?, ?)',
      [req.params.chatId, req.user.userId, text]
    );

    // Récupérer le message complet avec les infos de l'expéditeur
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
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 API démarrée sur http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Échec démarrage:', err);
    process.exit(1);
  }
}

start();