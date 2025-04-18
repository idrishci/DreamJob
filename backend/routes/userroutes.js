import express from 'express';
import connection from '../config/db.js';
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
const values=[4,id];
    connection.query(query,values,(err,data)=>{
    if(err)return console.log(err);
    return res.json("user added successfully");
})
}
}
const getinfouser = (req,res) => {
    const {uid,role}=req.query;
    if(role=="client"){
        const query="SELECT * FROM candidat WHERE uid_firebase=?";
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
router.get("/",getinfouser);
router.post("/",postiduser);
export default router;