
"use client";
import Image from "next/image";
import style from "./enter.module.css";
import getenterprise from "../services/enterpriseserv";
import { useEffect, useState } from "react";
export default function card({id}){
    const [enterprises,setEnterprises]=useState([]);
    useEffect(()=>{
        const fetchdata=async()=>{

            const data=await getenterprise();
            const enter=data.find((data)=>data.identerp===id);
            console.log(enter);
            console.log("card");
            setEnterprises(enter ? [enter] : []);
        }
        fetchdata();
    }
    ,[]);
    useEffect(() => {
        console.log("Updated enterprise state of card:", enterprises);
      }, [enterprises]);
    return(
        <>
        {enterprises.map((enterprise)=>(

        <div className={style.card} key={enterprise.identerp}>
            <div className={style.background} >

            <div className={style.logo}>
                <Image src={"/image/sonatrach.png"} width={100} height={80} key={1} alt="logo"/>
            </div>
            <h1>{enterprise.nom}</h1>
            </div>
           

            <div className={style.data}>

                <h3><Image src={"/icon/office-building.png"} alt={"icon"} width={20} height={20}/><span> {enterprise.secteur_dactivite}</span></h3>
                <h3><Image src={"/icon/location-sign.png"}alt={"icon"} width={20} height={20}/><span>  {enterprise.localisation}</span></h3>
                <h3><Image src={"/icon/audience.png"} alt={"icon"} width={20} height={20}/><span></span> {enterprise.nombre_demployer}</h3>
                {/* <h3>2 offer d’emploi</h3> */}
            </div>
        </div>
    ))}
    </>
    )

}