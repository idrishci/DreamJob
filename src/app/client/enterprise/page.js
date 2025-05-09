
"use client";

import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import style from "./enter.module.css"
import Hr from "@/app/component/hr/line"
import Card from "./card.jsx"
import {useEffect,useState} from "react"
import {getenterprise,getenterprisesearch} from "../services/enterpriseserv"
import {getoffresearch} from "../services/offreserv"
import {wilaya} from "@/app/file_json/wilaya";
import {secteur} from "@/app/file_json/data.js";
export default function Page(){
   const [enterprises,setEnterprises]=useState([]);
   const [filters, setFilters] = useState({});
   const [button, setbutton] = useState(false);
   useEffect(()=>{
       const fetchdata=async()=>{
           const data=await getenterprise();
          //  console.log("enterprise data:");
          //  console.log(data);
           setEnterprises(data);
       }
       fetchdata();
   },[]);
  //  useEffect(() => {
  //      console.log("Updated enterprise state:", enterprises);
  //    }, [enterprises]);
 
   
     //////////////rechrche by filter  
     const reset =async()=> {
      setbutton(false)
      const updatedFilters={}
      document.getElementById("nom").value = "";
      document.getElementById("secteur").value = "";
      document.getElementById("wilaya").value = "";
      setFilters(updatedFilters);
      const res = await getenterprisesearch(updatedFilters);

      // Mettre à jour la liste des entreprises
      setEnterprises(res);

     }  
const handlelechange = async (e) => {
  setbutton(true)
  const { name, value } = e.target;

  const updatedFilters = {
    ...filters,
    [name]: value,
  };

  // Mise à jour du state
  setFilters(updatedFilters);

  // Appel API avec les nouveaux filtres
  const res = await getenterprisesearch(updatedFilters);

  // Mettre à jour la liste des entreprises
  setEnterprises(res);

  console.log("Filtres mis à jour :", updatedFilters);
  console.log("Résultat de la recherche :", res);}
    //////////////////
             const handleclick=async()=>{
              const text=document.getElementById("nom");
              const updatedFilters = {
                ...filters,
                ['text']: text.value,
              };
              setFilters(updatedFilters);
            
                const res= await getenterprisesearch(updatedFilters);
                setEnterprises(res);
           }
  return (


    <div className={style.enterprise}>
      
         <div className={style.search_bar}>
          <input type="text" name="nom" id="nom" placeholder="nom d'enterprise" />
             <select name="secteur_dactivite" id="secteur" onChange={handlelechange}>
                <option value="">secteur d'activite</option>
              {secteur.map((secteur) =>  (<option key={secteur.id} value={secteur.name} > {secteur.name}</option>))}
             </select>
           <select name="localisation" id="wilaya" onChange={handlelechange}>
          <option value="">Region</option>
          {wilaya.map((wilaya) =>  (<option key={wilaya.id}  value={wilaya.name} > {wilaya.name}</option>))}
          </select>
          <button onClick={handleclick}>search</button>
         <> {button &&  <Image width={40} height={40} src={"/image/undo.png"} onClick={reset} />}</>
          
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

