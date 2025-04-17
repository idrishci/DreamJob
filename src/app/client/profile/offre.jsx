import Image from "next/image";
import style from "./offre.module.css";
import {useState,useEffect} from "react";
import {getoffresentrerp} from "../services/offreserv";
export default function offre({id}){

    const [offres,setOffres]=useState([]);
   
   
    useEffect(()=>{
        const fetchdata=async()=>{
            const offre=await getoffresentrerp(id);
            // console.log(id);
            //  console.log(offre);
            // console.log(data1);
           setOffres(offre );
            // setEnterprise(data2);
           
        };
         
        fetchdata();
        // console.log("Updated offers state:", offres);
    },[id]);

    //  useEffect(() => {
    //          console.log("Updated enterprise state of data:", offres);
    //        }, [offres]);
    return (
    <>
        {offres.length>0?(
            offres.map((offre) => {return(
<div className={style.offre}>
    <div className={style.card}>
     <div className={style.title}>{offre.titre}</div>
     <div className={style.option}>
        <h2><Image src={"/icon/office-building.png"} width={18} height={18} alt="location" key={id}/><span>{offre.type_de_lieu_de_travail}</span></h2>
        <h2><Image src={"/icon/form.png"} width={18} height={18} alt="location" key={id}/><span>{offre.type_de_contrat}</span></h2>
        <h2><Image src={"/icon/audience.png"} width={18} height={18} alt="location" key={id}/><span>{offre.nombre_de_post}</span></h2>
        <h2><Image src={"/icon/graduation-cap.png"} width={18} height={18} alt="location" key={id}/><span>{offre.niveau_detude}</span></h2>
        <h2><Image src={"/icon/verify.png"} width={18} height={18} alt="location" key={id}/><span>{offre.annees_dexper}</span></h2>
        <h2><Image src={"/icon/location-sign.png"} width={18} height={18} alt="location" key={id}/><span>{offre.wilaya}</span></h2>
        </div>   
    </div>
   
</div>
)}))
:(
    <p>Loading offers...</p> // ✅ Display message while fetching
  )
  }
</>


    );
}