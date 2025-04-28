import express from "express";
import connection from "../config/db.js";
const router=express.Router();

const getoffrebyId=(req,res)=>{
    const id=req.params.id;
    console.log(id);
    const query="SELECT * FROM offre_demploi  INNER JOIN enterprise  ON offre_demploi.idoffre=enterprise.identerp WHERE offre_demploi.idoffre=?";
 connection.query(query,[id],(err,data)=>{
    if(err){return console.log(err);}
    console.log(data);
    console.log("hello");
    return res.json(data);

    
})}

const postuler=(req,res)=>{
    const {idoffre,identerp,iduser}=req.body;
    console.log(idoffre,identerp,iduser);
    const query="INSERT INTO postuler (idoffre,identerp,uid_firebase) VALUES (?,?,?)";
    const values=[idoffre,identerp,iduser];
    connection.query(query,values,(err,data)=>{
        if(err)return console.log(err);
        return res.json(data);
    })
}
const getpostuler=(req,res)=>{
  // const {idoffre,identerp,iduser}=req.params;
  const idoffre=req.query.idoffre;
  const identerp=req.query.identerp;
  const iduser=req.query.iduser;
  console.log("fdf",idoffre,identerp,iduser);
  const query="SELECT * FROM postuler WHERE  idoffre=? AND identerp=? AND uid_firebase=? ";
  const values=[idoffre,identerp,iduser];
  connection.query(query,values,(err,data)=>{
      if(err)return console.log(err);
      return res.json(data);
  })
}
const updateoffre=(req,res)=>{
    const id = req.params.id;
    const situation ="attent";
    const {
      titre,
      fonction,
      type_de_lieu_de_travail,
      annees_dexper,
      wilaya,
      niveau_detude,
      salaire,
      type_de_contrat,
      nombre_de_post,
      desecription
    } = req.body;
  
    const query = `
      UPDATE offre_demploi SET 
        titre = ?, 
        fonction = ?, 
        type_de_lieu_de_travail = ?, 
        annees_dexper = ?, 
        wilaya = ?, 
        niveau_detude = ?, 
        salaire = ?, 
        type_de_contrat = ?, 
        nombre_de_post = ?, 
        description = ?,
        situation = ?
      WHERE idoffre = ?
    `;
    const values = [titre, fonction, type_de_lieu_de_travail, annees_dexper, wilaya, niveau_detude, salaire, type_de_contrat, nombre_de_post, desecription, situation,id];
  
    connection.query(query, values, (err, result) => {
      if (err) return res.status(500).json({ error: "Erreur update", err });
  
      // Re-fetch updated row
      connection.query("SELECT * FROM offre_demploi WHERE idoffre = ?", [id], (err2, data) => {
        if (err2) return res.status(500).json({ error: "Erreur select", err2 });
        return res.status(200).json(data[0]);
      });
    });
  }
  router.post("/postuler",postuler);
  router.get("/postuler",getpostuler);

  router.put("/updateoffre/:id", updateoffre);
router.get("/:id",getoffrebyId);
    export default router;