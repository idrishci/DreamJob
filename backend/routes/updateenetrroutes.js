import multer from "multer";
import express from "express";
import path from "path";
import connection from "../config/db.js";

const router = express.Router();

// تحديد مكان الحفظ واسم الملف
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/image/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// تعديل المؤسسة مع صورة
router.put("/:id", upload.fields([{ name: 'logo' }, { name: 'cover' }]), (req, res) => {
  const id = req.params.id;
  const fields = req.body;
  const files = req.files;

  const {
    nom,
    email,
    num_telephone,
    secteur_dactivite,
    siteweb,
    linkedin,
    nombre_demployer,
    localisation,
    desecription
  } = fields;

  let query = `
    UPDATE entreprise SET 
      nom = ?, 
      email = ?, 
      num_telephone = ?, 
      secteur_dactivite = ?, 
      siteweb = ?, 
      linkedin = ?, 
      nombre_demployer = ?, 
      localisation = ?, 
      desecription = ?
  `;
  const values = [
    nom,
    email,
    num_telephone,
    secteur_dactivite,
    siteweb,
    linkedin,
    nombre_demployer,
    localisation,
    desecription
  ];

  if (files?.logo) {
    query += `, pathprofile = ?`;
    values.push("/image/" + files.logo[0].filename);
  }

  if (files?.cover) {
    query += `, pathcover = ?`;
    values.push("/image/" + files.cover[0].filename);
  }

  query += ` WHERE identrep = ?`;
  values.push(id);
  console.log("Query:", query);
  console.log("Values:", values);
  connection.query(query, values, (err, result) => {
    if (err) return res.status(500).json({ error: "Erreur update", err });
console.log(err)
    connection.query("SELECT * FROM entreprise WHERE identrep = ?", [id], (err2, data) => {
      if (err2) return res.status(500).json({ error: "Erreur select", err2 });
      return res.status(200).json(data[0]);
    });
  });
});

export default router;
