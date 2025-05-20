'use client'
import Link from "next/link";
import Style from "./acceuil.module.css"
import {getoffresentrerp,getcan} from  "../server/offre.js"
import { useState,useEffect } from "react";
export default function statistiq({id}){
      const [offres,setOffres]=useState([]);
      const [candidats,setCandidats]=useState([]);
  

                   useEffect(()=>{
                       const fetchdata=async()=>{
                           const data1=await getoffresentrerp(id);
                            const data=await getcan(id);
                         const  offre =data1;
                            console.log("hi "+id)
                         const  candidat =data;
                          setCandidats(candidat ? candidat : []);  
                          setOffres(offre ? offre : []);  
                       };
                       fetchdata();
                   },[]);
                    useEffect(()=>{
                       const fetchdata=async()=>{
                          
                        
                       };
                       fetchdata();
                   },[]);

                  
           
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
                    <h2>Nombre de candidats :</h2>
                    <span>{candidats.length}</span>
                </div>
            </section>

            <section></section>

        </div>
    );
}