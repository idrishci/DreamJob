'use client'
import Image from "next/image";
import style from "./post.module.css"

import  Link from "next/link";
import { useState,useEffect } from "react"
import Aos from "aos";
import "aos/dist/aos.css";
import { getoffres,acceptoffre,refuseoffre } from "../../server/offre";
export default function offre(){
    const [offres, setOffres] = useState([]);
    useEffect(()=>{
        Aos.init({duration:800});
    
    },[]);
    useEffect(() => {
        fetchdata();
      }, []);
    const filter="attent";
    const fetchdata = async () => {
        const offre = await getoffres();
        console.log(offre);
        setOffres(offre || []);
      };
const accept = async(id) => {
    const data=await acceptoffre(id);
    fetchdata();
        // Logic to accept the offer

    };

const refuse = async(id) => {
    const data = await refuseoffre(id);
    fetchdata();
        // Logic to refuse the offer
    };
    return (
<>
{offres &&  offres.map((off) => (
<div className={style.offre} data-aos="fade-up">
   
    <div className={style.card}>
     <div className={style.title}>{off.titre}</div>
     <div className={style.option}>
        <h2><Image src={"/icon/office-building.png"} width={18} height={18} alt="location" key={off.idoffre}/><span>{off.type_de_lieu_de_travail}</span></h2>
        <h2><Image src={"/icon/form.png"} width={18} height={18} alt="location" key={off.idoffre}/><span>{off.type_de_contrat}</span></h2>
        <h2><Image src={"/icon/audience.png"} width={18} height={18} alt="location" key={off.idoffre}/><span>{off.nombre_de_post}</span></h2>
        <h2><Image src={"/icon/graduation-cap.png"} width={18} height={18} alt="location" key={off.idoffre}/><span>{off.niveau_detude}</span></h2>
        <h2><Image src={"/icon/verify.png"} width={18} height={18} alt="location" key={off.idoffre}/><span>{off.annees_dexper}</span></h2>
        <h2><Image src={"/icon/location-sign.png"} width={18} height={18} alt="location" key={off.idoffre}/><span>{off.wilaya}</span></h2>
        </div> 
  
 
    </div>
   
   {/* //////////////// */}
        <div className={style.button}>
   <button onClick={()=>accept(off.idoffre)}  >accept</button>
   <button onClick={()=>refuse(off.idoffre)} >refuser</button>
   </div>
 
</div>
))
}


</>

    );
}

