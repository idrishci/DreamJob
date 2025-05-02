
"use client";
import style from "./profile.module.css"
import getenterprise from "../services/enterpriseserv";
import Photo from "./photo"
import { useEffect, useState } from "react";
export default function data({id}){
   
  const [enterprises,setEnterprises]=useState([]);
  ////////////get entreprise
    useEffect(()=>{
        const fetchdata=async()=>{
            const data=await getenterprise();
            
            const enter=data.find((data)=>data.uid_firebase===id);
            setEnterprises(enter ? [enter] : []);
        }
        fetchdata();
    }
    ,[id]);

    
    return (
        <>
        
            {enterprises.map ((enterprise)=>{ return ( 
            <div className={style.data} key={enterprise.identerp}>
           <Photo id={id} key={enterprise.identerp}/><>
            <h1>Description : </h1>
            <p> {enterprise.description_enter}</p>
       
        <h1>Secteur :</h1>
        <p>{enterprise.secteur_dactivite}</p>
      
        <h1>Nomber d’employés :</h1>
        <p> {enterprise.nombre_demployer}</p>
       

        <h1>Siège social :</h1>
        <p> {enterprise.localisation}</p>
        </>

        </div>
    )

})}
</>

    );
}