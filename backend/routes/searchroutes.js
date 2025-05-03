import express from "express";
import connection from "../config/db.js";
const router=express.Router();


const getenterprisesearch=(req,res)=>{
    const {text,localisation}=req.query; 
    let params=[];
    let query="SELECT * FROM enterprise   WHERE 1=1" ;
    if(text){
        query += " AND (titre LIKE ? OR fonction LIKE ? OR nom LIKE ? OR secteur_dactivite LIKE ?)";
        params.push(`%${text}%`, `%${text}%`, `%${text}%`, `%${text}%`);
    }
    if(localisation){
        query += " AND localisation=?";
        console.log(localisation);
        params.push(localisation);
    }
    connection.query(query,params,(err,data)=>{
        if(err){return console.log(err);}
        console.log("Data fetched:", data);
        return res.json(data);
    })

}
const getoffresearch=(req,res)=>{
  
    const {text,localisation,wilaya,secteur,fonction,niveau,experiance,contrat,lieu}=req.query;
 
    let params=[];
    let query="SELECT * FROM offre_demploi  INNER JOIN enterprise  ON offre_demploi.id_enterp=enterprise.identerp WHERE 1=1" ;
    if(text){
        query += " AND (titre LIKE ? OR fonction LIKE ? OR nom LIKE ? OR secteur_dactivite LIKE ?)";
        params.push(`%${text}%`, `%${text}%`, `%${text}%`, `%${text}%`);
    }
    if(wilaya){
        query += " AND wilaya=?";
        console.log(wilaya);
        params.push(wilaya);
    }
    if(localisation){
        query += " AND localisation=?";
        console.log(localisation);
        params.push(localisation);
    }
    if(secteur){
        query += " AND secteur_dactivite=?";
        console.log(secteur);
        params.push(secteur);
    }
    if(fonction){
        query += " AND fonction=?";
        params.push(fonction);
    }
    if(niveau){
        query += " AND niveau_detude=?";
        params.push(niveau);
    }
    if(experiance){
        query += " AND annees_dexper=?";
        params.push(experiance);
    }
    if(contrat){
        query += " AND type_de_contrat=?";
        params.push(contrat);
      
    }
    if(lieu){
        query += " AND type_de_lieu_de_travail=?";
        params.push(lieu);
    }
  
    console.log("Final query:", query);
    console.log("With params:", params);
    connection.query(query,params,(err,data)=>{
        if(err){return console.log(err);}
        console.log("Data fetched:", data);
        return res.json(data);
    })}
    const getcandidatsearch=(req,res)=>{
  
        const {text,secteur,wilaya}=req.query;
     
        let params=[];
        let query="SELECT * FROM candidat  INNER JOIN post  ON candidat.uid_firebase=post.uid_firebase WHERE 1=1" ;
        if(text){
            query += " AND (titre LIKE ? OR sujet LIKE ? OR nom LIKE ? OR prenom LIKE ? OR email LIKE ? )";
            params.push(`%${text}%`, `%${text}%`, `%${text}%`, `%${text}%`,`%${text}%`);
        }
        if(secteur){
            query += " AND secteur_dactivite=?";
            console.log(secteur);
            params.push(secteur);
        }
        if(wilaya){
            query += " AND wilaya=?";
            console.log(wilaya);
            params.push(wilaya);
        }
      
        connection.query(query,params,(err,data)=>{
            if(err){return console.log(err);}
            console.log("Data fetched:", data);
            return res.json(data);
        })}
    router.get("/",getoffresearch);
    router.get("/candidat",getcandidatsearch);
    router.get("/enterprise",getenterprisesearch);
    export default router;