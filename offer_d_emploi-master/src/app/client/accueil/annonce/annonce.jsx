
'use client'
import style from "./annonce.module.css"
import { useEffect,useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Fonction from "./fonction.jsx"
import Region from "./region"
import Link from "next/link";
export default function page(){
    useEffect(()=>{
        Aos.init({duration:800});
    
    },[]);
    return( 
        <div className={style.annonce} >
            <h1>Annonce par Region </h1>
            <Region />

            <h1>Annonce par Fonction </h1>
             <Fonction/>
        </div>

    );
}