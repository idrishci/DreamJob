"use client"
import style from "./profile.module.css"
import Photo from "./photo"
import Profil from "./profil";
import {useEffect, useState}from "react";
import { useSearchParams } from 'next/navigation';

export default function page(){
     const [id, setId] = useState(null);  
     const [uid, setUid] = useState(null);  
    
  const searchParams = useSearchParams();
         useEffect(() => {
            
            const idoffre = searchParams.get('id');
            const uidd= searchParams.get('uid');
            console.log("offre.id_enterp222",uidd);
            console.log("idddddddddd",idoffre);
             setId(idoffre);
             setUid(uidd);
            
           }, []);
    return (
        <>
        <div className={style.prof_entr}>
          
        {/* <Photo /> */}
        <Profil id={id} uid={uid} />
       
        
        </div></>
    );
}
