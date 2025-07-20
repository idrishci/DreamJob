'use client'
import style from "./profile.module.css"
import Image from "next/image";
import {getperson} from "../server/offre"
import { useState,useEffect } from "react";

export default function Person({id}){
    const [person,setperson]=useState([])
    const fetchdata=async()=>{
    
        const data=await getperson(id);
        setperson(data);
    
    }
      useEffect(()=>{
                
                fetchdata();
            }
            ,[]);
return(
  <>{person.length>0?
person.map((per)=>{return ( 

         <div className={style.profile} data-aos="zoom-in">
        <Image width={100} height={100} alt="photo" src={per.photo_profile? `http://localhost:8800/uploaded/photo/${per.photo_profile}`:''} className={style.img}/>
        <div className={style.data}>
            <label > <h2>Nom :</h2> <h3>{per.nom}</h3></label>
            <label > <h2>Prenom :</h2> <h3>{per.prenom}</h3></label>
            <label > <h2>Age :</h2> <h3>{per.age}</h3></label>
            <label > <h2>Localisation :</h2> <h3>{per.wilaya}</h3></label>
            <label > <h2>N Telephone:</h2> <h3>{per.num_telephone}</h3></label>
            <label > <h2>Email :</h2> <h3>{per.email}</h3></label>
            <label > <h2>Niveau d’etude :</h2> <h3>{per.niveau_detude}</h3></label>
            <label > <a href={`http://localhost:8800/uploaded/cv/${per.cv}`} target="blanc"><h3>Mon cv</h3></a></label>

        </div> 
    </div>
     )}):<p>n'exist pas</p> }
      </>
);
}