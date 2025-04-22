import {secteur,fonction,niveau,experiance,contrat,lieu} from "@/app/file_json/data.js"
import Image from "next/image";
import style from "./profile.module.css"
import {useEffect, useState}from "react";
import {postthepost} from "@/app/services/userserv";
export default function demende(iduser){
    // const [lademande,setdemande]=useState(null);

useEffect(()=>{
    const getthepost =async()=>{
        const res= await getthepost(iduser.id);
        console.log("the post",res);
        await setInfouser(res[0]);
        // await setuser(res[0]);
    }
    getthepost();
    })


    const handlelechange=async(e)=>{
        const titre=document.getElementById("name").value;
        const sujet=document.getElementById("sujet").value;
        // const {name,value}=e.target;
       console.log("name",titre);
        console.log("value",sujet);
         const lademande={
            titre: titre,
            sujet: sujet,
            uid: iduser.id, // ← correctly setting uid from your user object
          };
        console.log("lademande",lademande);
        await postthepost(lademande);
        
    }
    return(

        <div className={style.edit}>
    <div className={style.data}>
    <label > <h2>Titre</h2> <input type="text" name="titre" id="name" ></input></label>
  

    </div> 
     <div className={style.desc}>
        
        <h2>Sujet</h2>
       {/* <textarea className={style.textarea} > */}
        <textarea name="sujet" id="sujet"  className={style.textarea} ></textarea>
    </div>
    <button onClick={()=>{handlelechange()}}>demende</button>
        </div>
        
    );
}