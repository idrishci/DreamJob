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
  ////////////
//   console.log(req.body)
//   console.log(req.files)
//   const id = req.body.identerp;
//   const fields = req.body;
//   const files = req.files;

//   const {
//     nom,
//     email,
//     num_telephone,
//     secteur_dactivite,
//     siteweb,
//     linkedin,
//     nombre_demployer,
//     localisation,
//     desecription
//   } = fields;

//   let query = `
//     UPDATE entreprise SET 
//       nom = ?, 
//       email = ?, 
//       num_telephone = ?, 
//       secteur_dactivite = ?, 
//       siteweb = ?, 
//       linkedin = ?, 
//       nombre_demployer = ?, 
//       localisation = ?, 
//       desecription = ?
//   `;
//   const values = [
//     nom,
//     email,
//     num_telephone,
//     secteur_dactivite,
//     siteweb,
//     linkedin,
//     nombre_demployer,
//     localisation,
//     desecription
//   ];

//   if (files?.logo) {
//     query += `, pathprofile = ?`;
//     values.push("/image/" + files.logo[0].filename);
//   }

//   if (files?.cover) {
//     query += `, pathcover = ?`;
//     values.push("/image/" + files.cover[0].filename);
//   }

//   query += ` WHERE identerp = ?`;
//   values.push(id);
//   console.log("Query:", query);
//   console.log("Values:", values);
//   connection.query(query, values, (err, result) => {
//     if (err) return res.status(500).json({ error: "Erreur update", err });
//     console.log(err)
//     connection.query("SELECT * FROM entreprise WHERE identrep = ?", [id], (err2, data) => {
//       if (err2) return res.status(500).json({ error: "Erreur select", err2 });
//       return res.status(200).json(data[0]);
//     });
//   });
// };
// router.put("/update",updateinfoclient);
export default router;
