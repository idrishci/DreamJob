import express from "express";
import connection from "../config/db.js";
const router=express.Router();

const getoffrebyId=(req,res)=>{
    const id=req.params.id;
    const query="SELECT * FROM offre_demploi  WHERE offre_demploi.idoffre=?";
 connection.query(query,[id],(err,data)=>{
    if(err){return console.log(err);}
    console.log(data);
    console.log("hello");
    return res.json(data);

    
})}
router.get("/:id",getoffrebyId);