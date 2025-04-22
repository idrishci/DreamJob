import express from 'express';
import connection from '../config/db.js';
import multer from "multer";
const router=express.Router();
const postiduser = (req,res) => {
const id=req.body.uid;
const email=req.body.email;
const user=req.body.user;
console.log("this is th is ",id,"this is user",user);
if(user=="client"){
    const query="INSERT INTO candidat (idcandidat,email,uid_firebase) VALUES (?,?,?)";
    const VALUES=[4,email,id];
    connection.query(query,VALUES,(err,data)=>{
    if(err)return console.log(err);
    return res.json("user added successfully");
})
}else if(user=="enterprise"){
    const query="INSERT INTO enterprise (identerp,email,uid_firebase) VALUES (?,?,?)";
//    const VALUES=[4,id];
const values=[4,email,id];
    connection.query(query,values,(err,data)=>{
    if(err)return console.log(err);
    return res.json("user added successfully");
})
}
}

const postthepost = (req,res) => {
  const { sujet, titre, uid } = req.body;
  console.log("sujet ",sujet,"titre",titre,"id",uid);
  const query="INSERT INTO post (idpost,titre,sujet,uid_firebase) VALUES (?,?,?,?)";
  const VALUES=[2,sujet,titre,uid];
  connection.query(query,VALUES,(err,data)=>{
  if(err)return console.log(err);
  return res.json(data);
  })
}
const getthepost = (req,res) => {
  const { uid } = req.query;
  console.log("id",uid);
  const query="SELECT * FROM post  WHERE uid_firebase=?";
  const VALUES=[uid];
  connection.query(query,VALUES,(err,data)=>{
  if(err)return console.log(err);
  return res.json(data);
  })
}
const getinfouser = (req,res) => {
    const {uid,role}=req.query;
    if(role=="client"){
        const query="SELECT * FROM candidat   WHERE  candidat.uid_firebase = ?";
        connection.query(query,uid,(err,data)=>{
            if(err)return console.log(err);
            console.log(data);
            return res.json(data);
        })

    }
    else if(role=="enterprise"){
            const query="SELECT * FROM enterprise WHERE uid_firebase=?";
           const values=[uid];
            connection.query(query,values,(err,data)=>{
                if(err)return console.log(err);
                return res.json(data);
            })
        }
        else if(role=="admin"){
            const query="SELECT * FROM admin WHERE uid_firebase=?";
            const values=[uid];
            connection.query(query,values,(err,data)=>{
                if(err)return console.log(err);
                console.log(data);
                return res.json(data);
            })
    }
    
    
}

const updateinfoclient = (req,res) => {
    const formdata=req.body;
    const files = req.files;
    const iduser=req.body.iduser;
    let fields = [];
  let values = [];

  if (formdata.nom) {
    fields.push("nom = ?");
    values.push(formdata.nom);
  }

  if (formdata.prenom) {
    fields.push("prenom = ?");
    values.push(formdata.prenom);
  }

  if (formdata.age) {
    fields.push("age = ?");
    values.push(formdata.age);
  }
  if (formdata.gender) {
    fields.push(" gender= ?");
    values.push(formdata.gender);
  }
  if (formdata.wilaya) {
    fields.push(" wilaya= ?");
    values.push(formdata.wilaya);
  }
  if (formdata.telephone) {
    fields.push(" num_telephone= ?");
    values.push(formdata.telephone);
  }
  if (formdata.email) {
    fields.push("email= ?");
    values.push(formdata.email);
  }
  if (formdata.niveau_etude) {
    fields.push("niveau_detude= ?");
    values.push(formdata.niveau_etude);
  }
  if (formdata.exper) {
    fields.push("exper= ?");
    values.push(formdata.exper);
  }
  if (formdata.secteur_activite) {
    fields.push("secteur_dactivite= ?");
    values.push(formdata.secteur_activite);
  }
  if (formdata.description) {
    fields.push("description_can= ?");
    values.push(formdata.description);
  }
  if (files.photo) {
    fields.push("photo_profile= ?");
    const photoName = files.photo[0].filename; 
    values.push(photoName );
  }
  
  if (files.cv) {
    fields.push("cv = ?");
    const cvName = files.photo[0].filename; 
    values.push(cvName);
  }

  // You can keep adding more fields here...

  if (fields.length === 0) {
    return res.status(400).json({ error: "No fields to update" });
  }

  const query = `UPDATE candidat SET ${fields.join(", ")} WHERE uid_firebase = ?`;
  values.push(iduser); // UID is last

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json({ success: true, result });
  });

}
router.get("/",getinfouser);
router.post("/",postiduser);
router.post("/updateclient",updateinfoclient);
router.get("/getpost",getthepost);
router.post("/post", postthepost);
export default router;