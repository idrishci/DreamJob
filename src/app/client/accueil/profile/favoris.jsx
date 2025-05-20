'use client'
import Image from "next/image";
import style from "./offre.module.css";
import {useState,useEffect} from "react";
import {getfavorit,deletfav} from "../../services/offreserv";
import { onAuthStateChanged } from 'firebase/auth';
import{auth} from "@/app/auth/firebase";
import Link from "next/link";
export default function offre({id}){
    const [save,setsave]=useState([])
    // const [iduser,setiduser]=useState('');
    const [offres,setOffres]=useState([]);


   
    //////////////get favorit
    
                      const fetchFavoris = async () => {
                        const data = await getfavorit(id);
                        console.log("this id user: " + id);
                        console.log("this "+data);
                        setOffres(data);
                        // setsave(data.map((dat) => dat.idoffre));
                      }
  useEffect(() => {
                    
                      fetchFavoris();
                    }
                  , [id]);                     


                  //////////////save ou unsave
                    const toggleSave = async (idoffre) => {
               if (!id) {                    
                router.replace("/auth/signin");
                   return;
                 }
               const ids={idoffre:idoffre,idcandidat:id}
               
                   await deletfav(ids);
                   fetchFavoris();   
                 // هنا يمكنك إضافة خاصية حذف لو تريد
                //  setsave((prev) => prev.filter(idoffre => idoffre !== idoffre));

                                  
                                }; 
 
    return (
    <>
        {offres.length>0?(
            offres.map((offre) => (  
        <div className={style.offre}  key={offre.idoffre}> 
              
        <div className={style.card}>
    <div className={style.btn1}><Image 
                      src={"/icon/unsave.svg" }
                      width={30}
                      height={30}
                      alt={"save"}
                      unoptimized
                      onClick={ () => toggleSave(offre.idoffre)}
                      />
            </div>
        <div className={style.title}>{offre.titre}</div>
        <div className={style.option}>
        {offre.type_de_lieu_de_travail? <h2><Image src={"/icon/office-building.png"} width={18} height={18} alt="location" key={id}/><span>{offre.type_de_lieu_de_travail}</span></h2>:''}
        {offre.type_de_contrat?<h2><Image src={"/icon/form.png"} width={18} height={18} alt="location" key={id}/><span>{offre.type_de_contrat}</span></h2>:''}
        {offre.nombre_de_post?<h2><Image src={"/icon/audience.png"} width={18} height={18} alt="location" key={id}/><span>{offre.nombre_de_post}</span></h2>:''}
       {offre.niveau_detude? <h2><Image src={"/icon/graduation-cap.png"} width={18} height={18} alt="location" key={id}/><span>{offre.niveau_detude}</span></h2>:''}
        {offre.annees_dexper?<h2><Image src={"/icon/verify.png"} width={18} height={18} alt="location" key={id}/><span>{offre.annees_dexper}</span></h2>:''}
      {offre.wilaya?  <h2><Image src={"/icon/location-sign.png"} width={18} height={18} alt="location" key={id}/><span>{offre.wilaya}</span></h2>:''}
        </div>   
    </div>

     </div>
)

))
:(
    <p>Offre en cours de chargement...</p> // ✅ Display message while fetching
  )
  }
</>


    );
}