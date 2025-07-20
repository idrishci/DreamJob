'use client'
import Image from "next/image";
import style from "./offre.module.css"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect,useState } from "react";
import { getoffrebyId} from "../server/offre.js"
export default function offre({id}){
    useEffect(()=>{
        Aos.init({duration:800});
    
    },[]);
     const [offre,setOffre]=useState();
       
       
        useEffect(()=>{
            const fetchdata=async()=>{
                const offres=await getoffrebyId(id);
                 console.log(offres[0]);
               setOffre(offres[0] );
                // setEnterprise(data2);
               
            };
             
            fetchdata();
        },[id]);
    return(
        <>{offre && 
        <div className={style.offre} data-aos="fade-up">
            <div className={style.first}>
               <h1>{offre.titre}</h1>
                
                    {/* <Image width={40} height={40} src={"/icon/bookmark.png"} className={style.img}/> */}
            </div>
            <div className={style.second}>
                <label >
                    <Image width={20} height={20} src={"/icon/office-building.png"} alt="icon"/>
                    <span><h3>Lieu de travail :</h3></span>
                    <h3>{offre.wilaya}</h3>
                </label>
                <label >
                    <Image width={20} height={20} src={"/icon/audience.png"} alt="icon"/>
                    <span><h3>Nombre de postes:</h3></span>
                    <h3>{offre.nomber_de_post} poste ouvert</h3>
                </label>
                <label >
                    <Image width={20} height={20} src={"/icon/graduation-cap (1).png"} alt="icon"/>
                    <span><h3>Niveau d'étude :</h3></span>
                    <h3>{offre.niveau_detude}</h3>
                </label>
                <label >
                    <Image width={20} height={20} src={"/icon/form.png"} alt="icon"/>
                    <span><h3>Type de contrat :</h3></span>
                    <h3>{offre.type_de_contrat}</h3>
                </label>
                <label >
                    <Image width={20} height={20} src={"/icon/engineering.png"} alt="icon"/>
                    <span><h3>Secteur d'activité :</h3></span>
                    <h3>{offre.secteur_dactivite}</h3>
                </label>
                <label >
                    <Image width={20} height={20} src={"/icon/engineer.png"} alt="/icon/engineer.png"/>
                    <span><h3>Fonction</h3></span>
                    <h3>{offre.fonction}</h3>
                </label>
                <label >
                    <Image width={20} height={20} src={"/icon/verify.png"} alt="/icon/verify.png"/>
                    <span><h3>Expérience :</h3></span>
                    <h3>{offre.annees_dexper}</h3>
                </label>
                <label >
                    <Image width={20} height={20} src={"/icon/wallet.png"} alt="/icon/wallet.png"/>
                    <span><h3>Salaire :</h3></span>
                    <h3>{offre.salaire} DA</h3>
                </label>
               

            </div>
            <hr />
            <div className={style.three}> <h3 style={{fontWeight:"800"}}>Description:</h3> 
    {/* <pre dangerouslySetInnerHTML={{ __html: offre.description_offre }}  style={{ whiteSpace: "pre-wrap" }}/>             */}
       {/* <div dangerouslySetInnerHTML={{ __html: offre.description_offre }}  style={{ whiteSpace: "pre-wrap" }}></div>        */}
       <p>{offre.description_offre}</p>

                
            </div>
           
        </div>
       } </>
    );
}