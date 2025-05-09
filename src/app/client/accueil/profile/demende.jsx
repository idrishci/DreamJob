import {secteur,fonction,niveau,experiance,contrat,lieu} from "@/app/file_json/data.js"
import Image from "next/image";
import style from "./profile.module.css"
import {useEffect, useState}from "react";
import {postthepost} from "@/app/services/userserv";
import {getthepost} from "@/app/services/userserv";
export default function demende(iduser){
    const [lademande,setdemande]=useState({});

useEffect(()=>{
    const fetchPost =async()=>{
        const res= await getthepost(iduser.id);
        console.log("the post",res[0]);

        await setdemande(res[0]);
        // await setuser(res[0]);
    }
    if(iduser.id){
    fetchPost();}
    }
    ,[]);


    const handlelechange=async(e)=>{
        const {name,value}=e.target;
       await  setdemande((prev) => ({
            ...prev,
            [name]: value,
            uid: iduser.id,
          }));

        //  const lademande={
        //     [name]: value,
        //     uid: iduser.id, // ← correctly setting uid from your user object
        //   };
      
        
    }
    const updatethepost=async()=>{
        console.log("lademande",lademande);
        const res=await postthepost(lademande);
        if(res){
            alert("Succès !")
        }else{
            alert("Erreur");
        }
        
    }
    return(

        <div className={style.edit}>
    <div className={style.demende}>
    <label > <h2>Titre</h2> <input type="text" name="titre"   id="name"   value={lademande.titre || ""} onChange={handlelechange }></input></label>
  

    </div> 
     <div className={style.desc}>
        
        <h2>Sujet</h2>
       {/* <textarea className={style.textarea} > */}
        <textarea name="sujet" id="sujet" className={style.textarea}   value={lademande.sujet || ""} onChange={handlelechange}></textarea>
    </div>
    <button onClick={updatethepost}>demende</button>
        </div>
        
    );
}