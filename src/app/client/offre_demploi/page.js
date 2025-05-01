"use client"
import style from "./profile.module.css"
import Photo from "./photo"
import Profil from "./profil";
import {useEffect, useState}from "react";
import { useSearchParams } from 'next/navigation';

export default function Page(){
     const [id, setId] = useState(null);  
  const searchParams = useSearchParams();
         useEffect(() => {
            
            const idoffre = searchParams.get('id');
            console.log("idddddddddd",idoffre);
             setId(idoffre);
            
           }, []);
    return (
        <>
        <div className={style.prof_entr}>
          
        {/* <Photo /> */}
        <Profil id={id} />
       
        
        </div></>
    );
}
