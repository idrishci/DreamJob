'use client'
import Link from "next/link";
import Style from "./acceuil.module.css"
import Aos from "aos";
import "aos/dist/aos.css";
import {getalloffres,getenterprise,getcandidat} from  "../server/offre.js"
import { useState,useEffect } from "react";
export default function statistiq(){
      const [offres,setOffres]=useState([]);
      const [enterprise,setenterprise]=useState([]);
      const [candidat,setcandidat]=useState([]);
   useEffect(()=>{
          Aos.init({duration:800});
      
      },[]);
      const fetchdata=async()=>{
        const offre=await getalloffres();
        const enter=await getenterprise();
        const can=await getcandidat();
        console.log(enter)
       setOffres(offre ? offre : []);  
       setenterprise(enter? enter:[]);
       setcandidat(can?can :[])
    };
                   useEffect(()=>{
                    
                       fetchdata();
                       console.log(enterprise)
                   },[]);
                 
    return(
        <div className={Style.main}>
            <section>
                <div className={Style.block} data-aos="zoom-in" >
                    <h2>Nomber des offers</h2>
                    <span>{offres.length}</span>
                </div>
                <div className={Style.block} data-aos="zoom-in">
                    <h2>Nomber des Enterprise</h2>
                    <span>{enterprise.length}</span>
                </div>
                <div className={Style.block} data-aos="zoom-in">
                    <h2>Nombers des candidat :</h2>
                    <span>{candidat.length}</span>
                </div>
            </section>

            <section></section>

        </div>
    );
}