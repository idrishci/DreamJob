import express from "express";
import connection from "../config/db.js";
const router=express.Router();

const getoffres=(req,res)=>{
    const query="SELECT * FROM offre_demploi INNER JOIN enterprise ON offre_demploi.id_enterp=enterprise.uid_firebase ORDER BY offre_demploi.date DESC";
    connection.query(query,(err,data)=>{
        if(err){return console.log(err);}
        return res.json(data);
    })}
    const getoffresAtt=(req,res)=>{
        const query="SELECT * FROM offre_demploi WHERE offre_demploi.situation ='attent' ORDER BY offre_demploi.date DESC";
        console.log(query);
        connection.query(query,(err,data)=>{
            if(err){return console.log(err);}
            return res.json(data);
        })}
        const acceptoffre=(req,res)=>{
            const id =req.params.id
            const query="UPDATE offre_demploi SET situation ='active' WHERE offre_demploi.idoffre=?";
            console.log(query);
            connection.query(query,[id],(err,data)=>{
                if(err){return console.log(err);}
                return res.json(data);
            })}
            const refuseoffre=(req,res)=>{
                const id =req.params.id
                const query="UPDATE offre_demploi SET situation ='refuse' WHERE offre_demploi.idoffre=?";
                console.log(query);
                connection.query(query,[id],(err,data)=>{
                    if(err){return console.log(err);}
                    return res.json(data);
                })}

    const getoffresenterp= (req,res)=>{
        const id=req.params.id;
        console.log("id of enterp3333",id);
        const query="SELECT * FROM offre_demploi  INNER JOIN enterprise  ON offre_demploi.id_enterp=enterprise.uid_firebase WHERE offre_demploi.id_enterp=? ORDER BY offre_demploi.date DESC";
        connection.query(query,[id],(err,data)=>{
            if(err){return console.log(err);}
            // console.log(data);
            return res.json(data);
        
            
        })}
        const getperson= (req,res)=>{
            const id=req.params.id;
            const query="SELECT * FROM postuler  INNER JOIN candidat  ON postuler.idcandidat=candidat.uid_firebase WHERE postuler.idoffre=?";
            connection.query(query,[id],(err,data)=>{
                if(err){return console.log(err);}
                // console.log(data);
                return res.json(data);
            
                
            })}
             const getcan= (req,res)=>{
            const id=req.params.id;
            const query="SELECT * FROM postuler  INNER JOIN offre_demploi  ON postuler.idoffre=offre_demploi.idoffre WHERE offre_demploi.id_enterp=?";
            connection.query(query,[id],(err,data)=>{
                if(err){return console.log(err);}
                // console.log(data);
                return res.json(data);
            
                
            })}



 
    router.get("/:id",getoffresenterp);
    router.get("/person/:id",getperson);
    router.get("/cand/:id",getcan);
    router.get("/attent/attent",getoffresAtt);
    router.get("/",getoffres);
    router.put("/accept/:id",acceptoffre);
    router.put("/refuse/:id",refuseoffre);

    export default router;
