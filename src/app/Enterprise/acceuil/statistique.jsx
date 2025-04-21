'use client'
import Link from "next/link";
import Style from "./acceuil.module.css"
import {getoffresentrerp} from  "../server/offre.js"
import { useState,useEffect } from "react";
export default function statistiq({id}){
      const [offres,setOffres]=useState([]);
  

                   useEffect(()=>{
                       const fetchdata=async()=>{
                           const data1=await getoffresentrerp(id);
                         const  offre =data1;
                          setOffres(offre ? offre : []);  
                       };
                       fetchdata();
                   },[]);
                   useEffect(() => {
                       console.log("Updated offers state of card:", offres);
                     }, [offres]); 
                  
           
              const filtredoffre=offres.filter(offre=>offre.situation==="active");
    return(
        <div className={Style.main}>
            <section>
                <div className={Style.block}>
                    <h2>les post cree :</h2>
                    <span>{offres.length}</span>
                </div>
                <div className={Style.block}>
                    <h2>Les post actives :</h2>
                    <span>{filtredoffre.length}</span>
                </div>
                <div className={Style.block}>
                    <h2>Nombers des candidat :</h2>
                    <span>0</span>
                </div>
            </section>

            <section></section>

        </div>
    );
}