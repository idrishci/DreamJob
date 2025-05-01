import multer from "multer";
import express from "express";
import path from "path";
import connection from "../config/db.js";
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
    cb(null, path.join(__dirname, '../../public/image'));
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});

const upload = multer({ storage: storage });
// تعديل المؤسسة مع صورة

  
router.put('/update/:id', upload.fields([
  { name: 'photo_profile', maxCount: 1 },
  { name: 'pathcover', maxCount: 1 }
]), async (req, res) => {
  console.log(req.body);
  console.log(req.files);

  const {
    identerp,
    nom,
    email,
    num_telephone,
    secteur_dactivite,
    siteweb,
    linkedin,
    nombre_demployer,
    localisation,
    description_enter
  } = req.body;

  const logo = req.files['photo_profile'] ? req.files['photo_profile'][0].filename : null;
  const cover = req.files['pathcover'] ? req.files['pathcover'][0].filename : null;

  
    let query = `
      UPDATE enterprise SET
      nom = ?, email = ?, num_telephone = ?, secteur_dactivite = ?, siteweb = ?, linkedin = ?,
      nombre_demployer = ?, localisation = ?, description_enter = ?
    `;
    const values = [
      nom, email, num_telephone, secteur_dactivite, siteweb, linkedin,
      nombre_demployer, localisation, description_enter
    ];

    if (logo) {
      query += `, photo_profile = ?`;
      values.push(logo);
    }

    if (cover) {
      query += `, pathcover = ?`;
      values.push(cover);
    }

    query += ` WHERE identerp = ?`;
    values.push(identerp);
console.log(query);
console.log(values);
connection.query(query, values, (err, result) => {
  if (err) {
    console.error(err);
    return res.status(500).json({ error: "Database error" });
  }
  res.json({ success: true, result });
});
});
///////////////post entreprise
router.post('/add', upload.fields([
  { name: 'photo_profile', maxCount: 1 },
  { name: 'pathcover', maxCount: 1 }
]), async (req, res) => {
  const {
    uid_firebase,
    nom,
    email,
    num_telephone,
    secteur_dactivite,
    siteweb,
    linkedin,
    nombre_demployer,
    localisation,
    description_enter
  } = req.body;

  // التحقق من الحقول الإجبارية
  const requiredFields = [nom, localisation, num_telephone, nombre_demployer, secteur_dactivite, email, description_enter];
  if (requiredFields.some(field => !field)) {
    return res.status(400).json({ error: "Tous les champs obligatoires doivent être remplis." });
  }

  const logo = req.files['photo_profile'] ? req.files['photo_profile'][0].filename : null;
  const cover = req.files['pathcover'] ? req.files['pathcover'][0].filename : null;

  // إعداد الحقول والقيم للديناميكية
  const columns = [
    "uid_firebase",
    "nom",
    "email",
    "num_telephone",
    "secteur_dactivite",
    "nombre_demployer",
    "localisation",
    "description_enter"
  ];
  const values = [
    uid_firebase,
    nom,
    email,
    num_telephone,
    secteur_dactivite,
    nombre_demployer,
    localisation,
    description_enter
  ];

  // الحقول الاختيارية
  if (siteweb) {
    columns.push("siteweb");
    values.push(siteweb);
  }
  if (linkedin) {
    columns.push("linkedin");
    values.push(linkedin);
  }
  if (logo) {
    columns.push("photo_profile");
    values.push(logo);
  }
  if (cover) {
    columns.push("pathcover");
    values.push(cover);
  }

  const placeholders = columns.map(() => "?").join(", ");
  const query = `INSERT INTO enterprise (${columns.join(", ")}) VALUES (${placeholders})`;

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error("Erreur lors de l'ajout :", err);
      return res.status(500).json({ error: "Erreur lors de l'ajout." });
    }
    res.status(200).json({ success: true, message: "Entreprise ajoutée avec succès", id: result.insertId });
  });
});

export default router;
