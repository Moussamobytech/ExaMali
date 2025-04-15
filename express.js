const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 5000;

app.get('/pdf/:id', (req, res) => {
  const pdfPath = path.join(__dirname, 'pdfs', 'DICTE.pdf'); // Ton fichier PDF

  fs.access(pdfPath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send("PDF non trouvé");
    }
    res.setHeader('Content-Type', 'application/pdf');
    res.sendFile(pdfPath);
  });
});

app.listen(port, () => {
  console.log(`✅ Serveur Express lancé sur http://localhost:${port}`);
});
