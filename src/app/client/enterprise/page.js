
"use client";

import React from 'react'
import Link from 'next/link'
import style from "./enter.module.css"
import Search from "./search-bar.jsx"
import Hr from "@/app/component/hr/line"
import Card from "./card.jsx"
import {useEffect,useState} from "react"
import getenterprise from "../services/enterpriseserv"
import {wilaya} from "@/app/file_json/wilaya";
import {secteur} from "@/app/file_json/data.js";
import {getoffresearch}from"../services/offreserv.js";
export default function Page(){
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
  //  useEffect(() => {
  //      console.log("Updated enterprise state:", enterprises);
  //    }, [enterprises]);

     const [filters, setFilters] = useState({});
         
     const  handlelechange = async(e) => {
      const { name, value } = e.target;
      console.log("the name",name);
      console.log("the value",value);
      setFilters(async( prevFilters) => {
        const updatedFilters = {
          ...prevFilters,
          [name]: value,
        };
      
        console.log("the update",updatedFilters);
      const res= await getoffresearch(updatedFilters); 
       setEnterprises(res);
        console.log("Updated filters:",res);
    });
       
        return res;
      
    };
             const handleclick=async()=>{
              const text=document.getElementById("nom");

              setFilters(async(prevFilters)=>{
                const updatedFilters = {
                    ...prevFilters,
                    ['text']: text.value,
                }
                const res= await getoffresearch(updatedFilters);
                setEnterprises(res);
            }); }
  return (


    <div className={style.enterprise}>
      
         <div className={style.search_bar}>
          <input type="text" name="nom" id="nom" placeholder="nom d'enterprise" />
             <select name="secteur" id="" onChange={handlelechange}>
                <option value="">secteur d'activite</option>
              {secteur.map((secteur) =>  (<option key={secteur.id} value={secteur.name} > {secteur.name}</option>))}
             </select>
           <select name="localisation" id="" onChange={handlelechange}>
          <option value="">Region</option>
          {wilaya.map((wilaya) =>  (<option key={wilaya.id}  value={wilaya.name} > {wilaya.name}</option>))}
          </select>
          <button onClick={handleclick}>search</button>
      </div>
      <Hr/> 
      <div className={style.cards}>
    {enterprises.length > 0 ? (
      enterprises.map((enterprise)=>(
        console.log("enterprise uid",enterprise.uid_firebase),
         <Link  href={`./profile?uid=${enterprise.uid_firebase}`} key={enterprise.identerp} ><Card key={enterprise.identerp} id={enterprise.identerp}  /></Link>
  ))
  
  ): enterprises.length===0 ? (
    <p> n'existe pas d'enterprise...</p>
  ) : (
    <p>Chargement des enterprises...</p> // ✅ Display message while fetching
  )
  }
   </div>
  </div>
  
  )
}

