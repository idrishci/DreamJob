
"use client";
import React from 'react'
import Link from "next/link";
import style from "./style.module.css"
import { useRouter } from 'next/navigation';
import Card from "./card.jsx"
import {useState,useEffect}from"react";
import getenterprise from "../../services/enterpriseserv"
export default function page(){
  const Router=useRouter();
  const [enterprises,setEnterprises]=useState([]);
  useEffect(()=>{
      const fetchdata=async()=>{
          const data=await getenterprise();
          console.log("enterprise data:");
          console.log(data);
          setEnterprises(data);
      }
      fetchdata();
  },[]);
    return(
      <>
        <div className={style.enter}>
             <h1>Annonce par Enterprise</h1>
             <div className={style.card1}>


      {enterprises.length > 0 ? (
      enterprises.map((enterprise)=>{
        return  <Link  href={`./client/profile?id=${enterprise.identerp}`} ><Card key={enterprise.identerp} id={enterprise.identerp}  /></Link>
     } )
  
      ) : (
        <p>Chargement des enterprises...</p> // ✅ Display message while fetching
      )}
           
           </div>
          <button onClick={()=>Router.push("/client/enterprise")}>voir plus {`>`}</button>  
         
        </div></>
    );
}
