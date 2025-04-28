import express from 'express';
import connection from '../config/db.js';
import multer from "multer";
const router=express.Router();
const postiduser = (req,res) => {
const id=req.body.uid;
const user=req.body.user;
console.log("this is th is ",id,"this is user",user);
if(user=="client"){
    const query="INSERT INTO candidat (idcandidat,uid_firebase) VALUES (?,?)";
    const VALUES=[3,id];
    connection.query(query,VALUES,(err,data)=>{
    if(err)return console.log(err);
    return res.json("user added successfully");
})
}else if(user=="enterprise"){
    const query="INSERT INTO enterprise (identerp,uid_firebase) VALUES (?,?)";
//    const VALUES=[4,id];
const values=[5,id];
    connection.query(query,values,(err,data)=>{
    if(err)return console.log(err);
    return res.json("user added successfully");
})
}
}
const getinfouser = (req,res) => {
    const {uid,role}=req.query;
    if(role=="client"){
        const query="SELECT * FROM candidat  INNER JOIN post ON candidat.idcandidat=post.idpost WHERE uid_firebase=?";
        connection.query(query,uid,(err,data)=>{
            if(err)return console.log(err);
            console.log(data);
            return res.json(data);
        })

    }
    else if(role=="enterprise"){
            const query="SELECT * FROM enterprise WHERE uid_firebase=?";
           const values=[uid];
           console.log(values);
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

const getcandidat=(req,res)=>{
  const query = "SELECT * FROM candidat INNER JOIN post ON candidat.uid_firebase = post.uid_firebase ";
  connection.query(query,(err,data)=>{
    if(err){return console.log(err);}
    return res.json(data);
})
}
const getallcandidat=(req,res)=>{
  const query = "SELECT * FROM candidat  ";
  connection.query(query,(err,data)=>{
    if(err){return console.log(err);}
    return res.json(data);
})
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
const addfavcan=(req,res)=>{
 const{identer,idcandidat}=req.body.params
 console.log(req.body);
  console.log("66666");
  const values=[identer,idcandidat];
  console.log(values);
  const query = "INSERT INTO favorit_can_enterp (identerp,idcandidat) VALUES (?,?)";
  console.log(query);
  connection.query(query,values,(err,data)=>{
    if(err){return console.log(err);}
    return res.json(data);
})
}
const deletfavcan=(req,res)=>{
  console.log(req.query);
  const{identer,idcandidat}=req.query
   console.log("66666");
   const values=[identer,idcandidat];
   console.log(values);
   const query = "DELETE FROM favorit_can_enterp WHERE identerp = ? AND idcandidat = ? ";
   console.log(query);
   connection.query(query,values,(err,data)=>{
     if(err){return console.log(err);}
     return res.json(data);
 })
 }
const getfavorit=(req,res)=>{
  const id=req.params.id;
  const query = "SELECT * FROM favorit_can_enterp JOIN candidat ON favorit_can_enterp.idcandidat = candidat.uid_firebase WHERE favorit_can_enterp.identerp=?";
  console.log(query);
  connection.query(query,id,(err,data)=>{
    if(err){return console.log(err);}
    return res.json(data);
})
}

router.post("/addfav",addfavcan);
router.delete("/deletfav",deletfavcan);
router.get("/",getinfouser);
router.get("/getfav/:id",getfavorit);
router.post("/",postiduser);
router.post("/updateclient",updateinfoclient);
router.get("/candidat",getcandidat);
router.get("/allcandidat",getallcandidat);
export default router;