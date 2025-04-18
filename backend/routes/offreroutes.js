import express from "express";
import connection from "../config/db.js";
const router=express.Router();

const getoffres=(req,res)=>{
    const query="SELECT * FROM offre_demploi  INNER JOIN enterprise  ON offre_demploi.idoffre=enterprise.identerp";
    connection.query(query,(err,data)=>{
        if(err){return console.log(err);}
        return res.json(data);
         consol.log("hello");
    })}

    const getoffresenterp= (req,res)=>{
        const id=req.params.id;
        const query="SELECT * FROM offre_demploi  INNER JOIN enterprise  ON offre_demploi.idoffre=enterprise.identerp WHERE offre_demploi.id_enterp=?";
        connection.query(query,[id],(err,data)=>{
            if(err){return console.log(err);}
            // console.log(data);
            return res.json(data);
        
            
        })}

const postofres=(req,res)=>{
    const{title,description}=req.body;
    if(!title || !description){
        return res.status(400).json({error:"all fields are required"});
    }
    const query ="INSERT INTO offre_demploi (title,description) VALUES(?,?)";
    const VALUES =[title,description];
    connection.query(query,VALUES,(err,data)=>{
        if(err){return console.log(err);}
        return res.json(data);
    })}
 
    router.get("/:id",getoffresenterp);
   
    router.get("/",getoffres);
    router.post("/",postofres);
    export default router;
