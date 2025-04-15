const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // Pour traiter les données en JSON

// Connexion à la base de données MySQL
const db = mysql.createConnection({
  host: "localhost", // Change selon ton hébergement (ex: '127.0.0.1' ou un serveur distant)
  user: "root", // Ton nom d'utilisateur MySQL
  password: "", // Ton mot de passe MySQL
  database: "examali", // Le nom de ta base de données
});

// Vérifier la connexion
db.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à MySQL :", err);
    return;
  }
  console.log("✅ Connecté à MySQL !");
});

// Route de test
app.get("/", (req, res) => {
  res.send("Bienvenue sur le serveur Express avec MySQL !");
});

// Démarrer le serveur
app.listen(5000, '0.0.0.0', () => {
  console.log("🚀 Serveur démarré sur le port 5000");
});

// Route pour ajouter un utilisateur
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  
  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: "Utilisateur ajouté avec succès !" });
    }
  });
});
// Endpoint pour récupérer un PDF
app.get('/pdf/:id', (req, res) => {
  const pdfId = req.params.id;
  db.query('SELECT file_data FROM pdf_files WHERE id = ?', [pdfId], (err, result) => {
    if (err) {
      res.status(500).send('Erreur de requête SQL');
    } else if (result.length > 0) {
      res.setHeader('Content-Type', 'application/pdf');
      res.send(result[0].file_data);
    } else {
      res.status(404).send('PDF non trouvé');
    }
  });
});