import express from "express";
import connection from "../config/db.js";
const router=express.Router();
//// get all data by id offre
const getoffrebyId=(req,res)=>{
    const id=req.params.id;
    const query="SELECT * FROM offre_demploi INNER JOIN enterprise  ON offre_demploi.id_enterp=enterprise.uid_firebase WHERE offre_demploi.idoffre=?";
 connection.query(query,[id],(err,data)=>{
    if(err){return console.log(err);}
    console.log(data);
    console.log("hello");
    return res.json(data);

 ////updata data offre  by id offre   
})}
const deletoffre=(req,res)=>{
  const id=req.params.id;
  const query="DELETE From offre_demploi  WHERE offre_demploi.idoffre=?";
connection.query(query,[id],(err,data)=>{
  if(err){return console.log(err);}
  console.log(data);
  console.log("hello");
  return res.json(data);

  
})}
////updata data offre  by id offre 
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
      description_offre
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
        description_offre = ?,
        situation = ?
      WHERE idoffre = ?
    `;
    const values = [titre, fonction, type_de_lieu_de_travail, annees_dexper, wilaya, niveau_detude, salaire, type_de_contrat, nombre_de_post, description_offre, situation,id];
  
    connection.query(query, values, (err, result) => {
      if (err) return res.status(500).json({ error: "Erreur update", err });
  
      // Re-fetch updated row
      connection.query("SELECT * FROM offre_demploi WHERE idoffre = ?", [id], (err2, data) => {
        if (err2) return res.status(500).json({ error: "Erreur select", err2 });
        return res.status(200).json(data[0]);
      });
    });
  }
  ///////////cree un offre by id enterprise
  const postoffres = (req, res) => {
    const id = req.params.id; // ID de l'entreprise
  
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
      description_offre,
      date
    } = req.body;
  
    // Vérification des champs requis
    if (!titre || !fonction || !type_de_lieu_de_travail || !annees_dexper || !wilaya ||
        !niveau_detude || !salaire || !type_de_contrat || !nombre_de_post ) {
      return res.status(400).json({ error: "Tous les champs sont requis." });
    }
  const situation="attent"
    const query = `
     INSERT INTO offre_demploi (
    titre,
    fonction,
    type_de_lieu_de_travail,
    annees_dexper,
    wilaya,
    niveau_detude,
    salaire,
    type_de_contrat,
    nombre_de_post,
    situation,
    description_offre,
    date,
    id_enterp
  ) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )
    `;
    const values = [
      titre,
      fonction,
      type_de_lieu_de_travail,
      annees_dexper,
      wilaya,
      niveau_detude,
      salaire,
      type_de_contrat,
      nombre_de_post,
      situation,
      description_offre,
      date,
      id
    ];
  console.log(req.body);
  console.log(values);
    connection.query(query, values, (err, result) => {
      if (err) {
        console.error("Erreur lors de l'insertion :", err);
        return res.status(500).json({ error: "Erreur serveur lors de l'insertion de l'offre." });
      }
      return res.status(201).json({ message: "Offre créée avec succès", data: result });
    });
  };
  
  router.put("/updateoffre/:id", updateoffre);
router.get("/:id",getoffrebyId);
router.post("/creeoffre/:id",postoffres);
router.delete("/deletoffre/:id",deletoffre)
    export default router;