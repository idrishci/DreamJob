
"use client";
import style from "./profile.module.css"
import getenterprise from "../services/enterpriseserv";
import Photo from "./photo"
import { useEffect, useState } from "react";
export default function data({id}){
   
  const [enterprises,setEnterprises]=useState([]);
    useEffect(()=>{
       
        const fetchdata=async()=>{
            const data=await getenterprise();
            const enter=data.find((data)=>data.identerp===Number(id));
          
            // console.log(enter);
            // console.log("card");
            setEnterprises(enter ? [enter] : []);
        }
        fetchdata();
    }
    ,[id]);
    // useEffect(() => {
    //     console.log("Updated enterprise state of data:", enterprises);
    //   }, [enterprises]);

    
    return (
        <>
        
            {enterprises.map ((enterprise)=>{ return ( 
            <div className={style.data}>
           <Photo id={id}/><>
            <h1>Description : </h1>
            <p> {enterprise.desecription}</p>
       
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