'use client'
import Image from "next/image";
import style from "./post.module.css"
import stle from "./form.module.css"
import style1 from "./offre.module.css"

import  Link from "next/link";
import {getoffresentrerp,deletoffre} from "../../server/offre.js"
import { useState,useEffect } from "react"
import Form from "./formulair"
import Aos from "aos";
import "aos/dist/aos.css";
export default function offre({id}){ 
        
    const [showDeleteId, setShowDeleteId] = useState(null);
      //////////////animation  

    useEffect(()=>{
        Aos.init({duration:800});
    
    },[]);
    //////////////////get offre/////////////
     const [offres,setOffres]=useState([]);
        useEffect(()=>{
            const fetchdata=async()=>{
                const data1=await getoffresentrerp(id);
              const  offre =data1;
               setOffres(offre ? offre : []);  
            };
            fetchdata();
        },[]);
        ////////////////delet
        const delet =async(id)=>{
            const delet =await deletoffre(id);
            setShowDeleteId(null);
            if(delet){
                alert('offre delet')
            }else{
                alert('Failed to delete offre');
            }
             }
     
          const filtredoffre=offres.filter(offre=>offre.situation==="refuse");
    return (
        <>
               {filtredoffre.length>0 ? (filtredoffre.map((off)=>{ return(
                  
      <div className={style.offre} data-aos="fade-up">
          <div className={style.card}>
          <div className={style.title}>{off.titre}</div>
          <div className={style.option}>
              <h2><Image src={"/icon/office-building.png"} width={18} height={18} alt="location" key={off.idoffre}/><span> {off.type_de_lieu_de_travail}</span></h2>
                          <h2><Image src={"/icon/form.png"} width={18} height={18} alt="location" key={off.idoffre}/><span> {off.type_de_contrat}</span></h2>
                          <h2><Image src={"/icon/audience.png"} width={18} height={18} alt="location" key={off.idoffre}/><span>{off.nombre_de_post}</span></h2>
                          <h2><Image src={"/icon/graduation-cap.png"} width={18} height={18} alt="location" key={off.idoffre}/><span> {off.niveau_detude}</span></h2>
                          <h2><Image src={"/icon/verify.png"} width={18} height={18} alt="location" key={off.idoffre}/><span>{off.annees_dexper}</span></h2>
                          <h2><Image src={"/icon/location-sign.png"} width={18} height={18} alt="location" key={off.idoffre}/><span>{off.wilaya}</span></h2>
                          </div> 
                          <Link href={`../../Enterprise/show-annonce?id=${off.idoffre}`}><h3 >voir plus</h3> </Link>
                      </div>
                      <div className={style.button}>
                              <Link href={`../../Enterprise/annonce-Edit?id=${off.idoffre}`}><button  >Modifier</button></Link>
                              <button onClick={()=>setShowDeleteId(off.idoffre)} >Supprimer</button>
          </div>
          {showDeleteId === off.idoffre && (
          <div className={style.delet}>
            <p>Êtes-vous sûr de vouloir supprimer cette offre ?</p>
            <button onClick={() => delet(off.idoffre)}>Confirmer</button>
            <button onClick={() => setShowDeleteId(null)}>Annuler</button>
          </div>
        )}
      </div>)})):(<h4 data-aos="zoom-in">n'existe pas</h4>)} </>
          );
      }