
"use client";
import style from "./offre.module.css"
import Image from "next/image";
import {getoffres,getfavorit} from "../services/offreserv";
import getenterprise from "../services/enterpriseserv";
import { useEffect, useState } from "react";
import data from "../profile/data";
import { onAuthStateChanged } from 'firebase/auth';
import{auth} from "@/app/auth/firebase";


import Aos from "aos";
import "aos/dist/aos.css";

export default function card({id}){

  const [save,setsave]=useState([])
  const [iduser,setiduser]=useState('');
  const [offres,setOffres]=useState([]);
 ///////////////get iduser from firebase
 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (user) {
      setiduser(user.uid);
    } else {
      setiduser('');
    }
  });
  return () => unsubscribe();
}, []);
///////////animation
    useEffect(()=>{
        Aos.init({duration:800});
    
    },[]);

  
   
               //////////////get favorit
               useEffect(() => {
                if (iduser) {
                  const fetchFavoris = async () => {
                    const data = await getfavorit(iduser);
                    console.log("this id user: " + iduser);
                    console.log(data);
                    setsave(data.map((dat) => dat.idoffre));
                  };
                  fetchFavoris();
                }
              }, [iduser]);
              //////////////toglle save


              /////////////////get offre
            // useEffect(() => {
              
            //     fetchFavoris();
            //   }, []);
    useEffect(()=>{
        const fetchdata=async()=>{
         
            const data1=await getoffres();
            // const data2=await getenterprise();
            console.log(id);
          const  offre =data1.find((data)=>data.idoffre===id);
            //  console.log(offre);
            // console.log(data1);
           setOffres(offre ? [offre] : []);
            // setEnterprise(data2);
           
        };
         
        fetchdata();
        // console.log("Updated offers state:", offres);
    },[]);
    // useEffect(() => {
    //     console.log("Updated offers state of card:", offres);
    //   }, [offres]); 

    // console.log(offres.map((offre)=>offre.title));
    
// const api_url="http://localhost:8800/api/offers";

// const getoffres=async()=>{
//  try{
// const res=await axios.get(api_url);
// return console.log(res.data);
//     }catch(err){

//         console.log(err);
//     }
// }
// getoffres(); 
function timeAgo(date) {
    const now = new Date();
    const seconds = Math.floor((now - new Date(date)) / 1000);
  
    const intervals = {
      year: 31536000,
      month: 2592000,
      day: 86400,
      heurs: 3600,
      minute: 60,
      second: 1,
    };
  
    for (let key in intervals) {
      const interval = Math.floor(seconds / intervals[key]);
      if (interval > 0) {
        return `il y a ${interval} ${key}${interval !== 1 ? 's' : ''}`;
      }
      
    }
    return "à l'instant"; 
  }   
    return (

        <>
             
                {offres.map((offre) => (

             <div className={style.card} key={offre.idoffre}data-aos="fade-up">

             <div className={style.first}>
             <Image src={`http://localhost:8800/uploaded/photo/${offre.photo_profile}`} width={82} height={82} key={id} alt={"logo"}/>
                 <div className={style.data}>
                     <h3>{offre.titre}</h3>
                     <h5><Image src={"/icon/location-sign.png"} width={18} height={18}  key={id} alt="location"/> <span>{offre.wilaya}</span>  </h5>
                     <h5>{timeAgo(offre.date)} </h5>
                 </div>
                 {/* <div className="save"><Image src={"/icon/bookmark.png"} width={30} height={30} key={id} alt="bookmark"/></div> */}
             </div>
             <div className={style.second}>
                 <h3><Image src={"/icon/office-building.png"} width={26} height={26} key={id}  alt="icon"/><span> {offre.type_de_lieu_de_travail} </span></h3>
                <h3><Image src={"/icon/form.png"} width={26} height={26}key={id} alt="icon"/><span> {offre.type_de_contrat}</span></h3>
               <h3><Image src={"/icon/graduation-cap.png"} width={26} height={26}key={id} alt="icon"/><span> {offre.niveau_detude}</span></h3>
                <h3><Image src={"/icon/audience.png"} width={26} height={26}key={id} alt="icon"/><span>  {offre.nombre_de_post}</span></h3>
                <h3><Image src={"/icon/verify.png"} width={26} height={26}key={id} alt="icon"/> <span> {offre.annees_dexper} </span></h3>
             </div>
         </div>
            
         )) 
        
        }

       </>

      
    );
    

}