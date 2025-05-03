import express from 'express';
import connection from '../config/db.js';
import path from 'path';
import multer from "multer";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// const multer = require('multer');
// const path = require('path');
const router = express.Router();

// تحديد مكان الحفظ واسم الملف

// إعداد multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder;
    if (file.fieldname === 'photo_profile') {
      folder = path.join(__dirname, '../uploaded/photo');
    } else {
      folder = path.join(__dirname, '../uploaded/cv');
    }
    cb(null, folder); // مهم جداً
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});


const upload = multer({ storage: storage });
router.post('/adduser', upload.fields([
  { name: 'photo_profile', maxCount: 1 },
  { name: 'cv', maxCount: 1 } // Ajout du champ CV
]), async (req, res) => {
  console.log(1)
  const {
    uid_firebase,
    nom,
    prenom,
    age,
    gender,
    email,
    num_telephone,
    secteur_dactivite,
    niveau_detude,
    exper,
    wilaya,
    description_can
  } = req.body;

  const requiredFields = [nom, prenom,age,gender, num_telephone, niveau_detude, secteur_dactivite, email,wilaya,exper];
  if (requiredFields.some(field => !field)) {
    return res.status(400).json({ error: "Tous les champs obligatoires doivent être remplis." });
  }

  // Récupérer les fichiers
  const logo = req.files['photo_profile'] ? req.files['photo_profile'][0].filename : null;
  const cv = req.files['cv'] ? req.files['cv'][0].filename : null;

  const columns = [
            "uid_firebase",
            "nom",
            "prenom",
            "age",
            "gender",
            "wilaya",
            "exper",
            "num_telephone",
            "niveau_detude",
            "secteur_dactivite",
            "email",
            "description_can",
  ];
  const VALUES1=[uid_firebase];
  const values = [
    uid_firebase,
    nom,
    prenom,
    age,
    gender,
    wilaya,
    exper,
    num_telephone,
    niveau_detude,
    secteur_dactivite,
    email,
    description_can
  ];

  // Champs facultatifs
  if (logo) {
    columns.push("photo_profile");
    values.push(logo);
  }
  if (cv) {
    columns.push("cv");
    values.push(cv);
  }


  const placeholders = columns.map(() => "?").join(", ");
  const query = `INSERT INTO candidat (${columns.join(", ")}) VALUES (${placeholders})`;
  const query2="INSERT INTO post (uid_firebase) VALUES (?)";
console.log("Query:", query);
  console.log("Values:", values);
  connection.query(query, values, (err, result) => {
    if (err) {
      console.error("Erreur lors de l'ajout :", err);
      return res.status(500).json({ error: "Erreur lors de l'ajout." });
    }
    connection.query(query2, VALUES1, (err, data2) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Error inserting into post" });
      }})
    res.status(200).json({ success: true, message: "candidat ajoutée avec succès", id: result.insertId });
  });
});
export default router;