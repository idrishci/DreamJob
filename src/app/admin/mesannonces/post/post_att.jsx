'use client'
import Image from "next/image";
import style from "./post.module.css"
import stle from "./form.module.css"
import style1 from "./offre.module.css"
import pp from"./pp.css"
import  Link from "next/link";
import { useState,useEffect } from "react"
import Form from "./formulair"
import Aos from "aos";
import "aos/dist/aos.css";
export default function offre(){
    useEffect(()=>{
        Aos.init({duration:800});
    
    },[]);
    const id =1;
    return (
<div className={style.offre} data-aos="fade-up">
    <div className={style.card}>
     <div className={style.title}>Conseiler Commercial 1</div>
     <div className={style.option}>
        <h2><Image src={"/icon/office-building.png"} width={18} height={18} alt="location" key={id}/><span> Sur site</span></h2>
        <h2><Image src={"/icon/form.png"} width={18} height={18} alt="location" key={id}/><span> CDI</span></h2>
        <h2><Image src={"/icon/audience.png"} width={18} height={18} alt="location" key={id}/><span> 1 poste</span></h2>
        <h2><Image src={"/icon/graduation-cap.png"} width={18} height={18} alt="location" key={id}/><span>  Bac +5</span></h2>
        <h2><Image src={"/icon/verify.png"} width={18} height={18} alt="location" key={id}/><span> 1 a 2 ans</span></h2>
        <h2><Image src={"/icon/location-sign.png"} width={18} height={18} alt="location" key={id}/><span> Alger</span></h2>
        </div> 
      
 
 </div>

{/* //////////////// */}
     <div className={style.button}>
     <button  >accept</button>
   <button>refuser</button>
</div>
</div>
    );
}

