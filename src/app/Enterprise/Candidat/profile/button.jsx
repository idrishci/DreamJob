'use client'
import Image from "next/image"
import { addfav,getfavorit } from "../../server/candidat";
import { useEffect,useState } from "react"
import style from "./profile.module.css"

export default function Button({uid_firebase,identer}){
    const [save,setsave]=useState(false);
    const [fav,setfav]=useState();
    /////////////add favorit
    console.log(uid_firebase);
    const add=async(idcandidat)=>{
        
        const favorit=await addfav(ids);
        setfav(favorit);
        if (favorit) {
            alert("sauvgarde !");
          } else {
            alert("Erreur de sauvegarde");
          }
        }
        const fetchdata=async()=>{
            const data=await getfavorit(identer); 
            const isSaved = data.some((sav) => sav.idcandidat === uid_firebase);
            console.log("ui "+isSaved);
            setSave(isSaved);
            // setsave(data.find((data)=>data.idcandidat===uid_firebase));
            };
            ////////////get fav?
            useEffect(()=>{
               
                fetchdata();},[]); 
          
    
    return(

        
             <div className={style.save}>
 
          {save?     <Image   key={ "saved" }  width={40} height={40} src={"/icon/save.png"} unoptimized  alt="save" onClick={()=>setsave(!save) }/>
               : <Image   key={  "unsaved"}  width={40} height={40} src={"/icon/unsave.png"} unoptimized  alt="save" onClick={()=>setsave(!save) }/>} 

                </div>
        
    );
}