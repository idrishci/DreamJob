
"use client";
import style from "./offre.module.css"
import Image from "next/image";
import {getoffres} from "../services/offreserv";
import getenterprise from "../services/enterpriseserv";
import { useEffect, useState } from "react";
import data from "../profile/data";

import Aos from "aos";
import "aos/dist/aos.css";

export default function card({id}){
    useEffect(()=>{
        Aos.init({duration:800});
    
    },[]);

    const [offres,setOffres]=useState([]);
   
   
    useEffect(()=>{
        const fetchdata=async()=>{
            const data1=await getoffres();
            // const data2=await getenterprise();
            console.log(id);
          const  offre =data1.find((data)=>data.idoffre===id);
            //  console.log(offre);
            // console.log(data1);
           setOffres(offre ? [offre] : []);
            // setEnterprise(data2);
           
        };
         
        fetchdata();
        // console.log("Updated offers state:", offres);
    },[]);
    useEffect(() => {
        console.log("Updated offers state of card:", offres);
      }, [offres]); 

    // console.log(offres.map((offre)=>offre.title));
    
// const api_url="http://localhost:8800/api/offers";

// const getoffres=async()=>{
//  try{
// const res=await axios.get(api_url);
// return console.log(res.data);
//     }catch(err){

//         console.log(err);
//     }
// }
// getoffres(); 
       
    return (

        <div className={style.offre}>
             
                {offres.map((offre) => {return(
             <div className={style.card} data-aos="fade-up">

             <div className={style.first}>
             <Image src={"/image/sonatrach.png"} width={82} height={82} key={id} alt="logo"/>
                 <div className={style.data}>
                     <h3>{offre.nom}</h3>

                     <h2> {offre.niveau_de_post}</h2>

                     <h5><Image src={"/icon/location-sign.png"} width={18} height={18}  key={id} alt="location"/> {offre.wilaya}  - il y a 17 min {offre.date}</h5>
                 </div>
                 {/* <div className="save"><Image src={"/icon/bookmark.png"} width={30} height={30} key={id} alt="bookmark"/></div> */}
             </div>
             <div className={style.second}>
                 <h3><Image src={"/icon/office-building.png"} width={26} height={26} key={id}  alt="icon"/><span> {offre.type_de_lieu_de_travail} </span></h3>
                <h3><Image src={"/icon/form.png"} width={26} height={26}key={id} alt="icon"/><span> {offre.type_de_contrat}</span></h3>
               <h3><Image src={"/icon/graduation-cap.png"} width={26} height={26}key={id} alt="icon"/><span> {offre.niveau_detude}</span></h3>
                <h3><Image src={"/icon/audience.png"} width={26} height={26}key={id} alt="icon"/><span>  {offre.nombre_de_post}</span></h3>
                <h3><Image src={"/icon/verify.png"} width={26} height={26}key={id} alt="icon"/> <span> {offre.annees_dexper} </span></h3>
             </div>
         </div>
            
         )}) 
        
        }

       </div >

      
    );
    

}