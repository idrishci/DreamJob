import Image from "next/image";
import style from "./offre.module.css";
import {useState,useEffect} from "react";
import {getoffresentrerp,getfavorit,addfav,deletfav} from "../services/offreserv";
import { onAuthStateChanged } from 'firebase/auth';
import{auth} from "@/app/auth/firebase";
import Link from "next/link";
export default function offre({id}){
    const [save,setsave]=useState([])
    const [iduser,setiduser]=useState('');
    const [offres,setOffres]=useState([]);
    /////////get id user
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
      ////////get offre entreprise
    useEffect(()=>{
        const fetchdata=async()=>{
            const offre=await getoffresentrerp(id);
            // console.log(id);
            //  console.log(offre);
            // console.log(data1);
           setOffres(offre );
            // setEnterprise(data2);
           
        };
         
        fetchdata();
        // console.log("Updated offers state:", offres);
    },[id]);
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

                  //////////////save ou unsave
 
    return (
    <>
        {offres.length>0?(
            offres.map((offre) => (  
        <div className={style.offre}  key={offre.idoffre}> 
              <Link href={`./offre_demploi?id=${offre.idoffre}&uid=${id}`} key={offre.idoffre} className={style.link}>
        <div className={style.card}>
        <div className={style.btn}><Image 
                      src={save.includes(offre.idoffre)? "/icon/unsave.svg" :"/icon/save.svg"}
                      width={30}
                      height={30}
                      alt={"save"}
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
   </Link>
     </div>
)

))
:(
    <p>Loading offers...</p> // ✅ Display message while fetching
  )
  }
</>


    );
}