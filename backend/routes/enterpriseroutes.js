import connection from "../config/db.js";
import express from "express";

const router=express.Router();

const getenterprise=(req,res)=>{
    const query="SELECT * FROM enterprise";
    connection.query(query,(err,data)=>{
        if(err){console.log(err);return res.status(500).json({ error: err.message });
            }
        return res.json(data);
    })
}
const getenterprisebyID=(req,res)=>{
    const id=req.params.id;
    const query="SELECT * FROM enterprise WHERE enterprise.uid_firebase=?";
    console.log(id)
    console.log(query)
    connection.query(query,[id],(err,data)=>{
        if(err){console.log(err);return res.status(500).json({ error: err.message });
            }
        return res.json(data);
    })
}
const postenterprise=(req,res)=>{
    const query="INSERT INTO enterprise (nom,email,num_telephone,secteur_dactivite,siteweb,linkedin,nombre_demployer,localisation) VALUES(?)";
    const VALUES=[];
    connection.query(query,VALUES,(req,res)=>{
        if(err){return console.log(err);}
        return res.json(data);
    })
}

router.get("/:id",getenterprisebyID);
router.get("/",getenterprise);
router.post("/",postenterprise);
export default router;