import Image from "next/image";
import style from "./offre.module.css";
import { useEffect, useState } from "react";
import {getoneoffresentrerp} from "../services/offreserv";
import { off } from "node:process";
import { onAuthStateChanged } from 'firebase/auth';
import {getDoc }from"firebase/firestore";
import{ db,doc,auth} from "@/app/auth/firebase";
import { postpostuler,getpostuler } from "../services/offreserv";
import Buttonpostuler from "./buttonpostuler";
export default function offre({id}){
   const [offres,setOffres]=useState([]);
   const [idoffre,setIdoffre]=useState(null);
   const [iduser,setiduser]=useState(null);
   const [identrep,setIdentreprise]=useState(null);
   const [isConnected,setConnected]=useState('connected');
   const [ispostuler,setispostuler]=useState(false);
   
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async(user) => {
            if (user) {
                setConnected("connected");
                console.log("user",user.uid);
                setiduser(user.uid);
            } else {
                setConnected("deconnected");
            }
        })
        return ()=>unsubscribe();
    },[]);

 useEffect(()=>{
   
        const fetchdata=async()=>{  
            const offre=await getoneoffresentrerp(id);
            setOffres(offre); 
            console.log("user",iduser);
            console.log("offre11111",idoffre,identrep,iduser);

            const postulerr=await getpostuler(id,offre[0].identerp,iduser);
            console.log("postulerr",postulerr[0].identerp);

            if(postulerr.length>0){
                setispostuler(true);
                console.log("already postuler");
            }
           
               
        };
         
        fetchdata();
    },[id,iduser]);
useEffect(() => {
       
    }, []);

    const postuler=async()=>{
        setispostuler(true);
        console.log("isistpostuler",ispostuler);
        await postpostuler(id,offres[0].identerp,iduser);
        
    }

    return(
        <>
        {offres.length>0?(
            offres.map((offre) => {
                return(  
               
        <div className={style.offre}>
            <div className={style.first}>
               <h1>{offre.titre}  </h1>
                    <Image width={40} height={40} src={"/icon/bookmark.png"} className={style.img}/>
            </div>
            <div className={style.second}>
                <label >
               
                    <Image width={20} height={20} src={"/icon/office-building.png"} alt="icon"/>
                    <span><h3>Lieu de travaille :</h3></span>
                    <h3> {offre.wilaya}</h3>
                </label>
                <label >
                    <Image width={20} height={20} src={"/icon/audience.png"} alt="icon"/>
                    <span><h3>Nombre de postes:</h3></span>
                    <h3>{offre.nombre_de_post} poste ouvert</h3>
                </label>
                <label >
                    <Image width={20} height={20} src={"/icon/graduation-cap (1).png"} alt="icon"/>
                    <span><h3>Niveau d'étude :</h3></span>
                    <h3>{offre.niveau_detude} </h3>
                </label>
                <label >
                    <Image width={20} height={20} src={"/icon/form.png"} alt="icon"/>
                    <span><h3>Type de contrat :</h3></span>
                    <h3>{offre.type_de_contrat} </h3>
                </label>
                <label >
                    <Image width={20} height={20} src={"/icon/engineering.png"} alt="icon"/>
                    <span><h3>Secteur d'activité :</h3></span>
                    <h3>{offre.secteur_dactivite} </h3>
                </label>
                <label >
                    <Image width={20} height={20} src={"/icon/engineer.png"} alt="/icon/engineer.png"/>
                    <span><h3>Fonction :</h3></span>
                    <h3>{offre.fonction}</h3>
                </label>
                <label >
                    <Image width={20} height={20} src={"/icon/verify.png"} alt="/icon/verify.png"/>
                    <span><h3>Expérience :</h3></span>
                    <h3>{offre.annees_dexper}</h3>
                </label>
                <label >
                    <Image width={20} height={20} src={"/icon/wallet.png"} alt="/icon/wallet.png"/>
                    <span><h3>Salary :</h3></span>
                    <h3>{offre.salaire} DA</h3>
                </label>
               

            </div>
            <hr />
            <div className={style.three}>
            <span><h3>Description:</h3></span>
            
            <p>             
            {offre.description_offre}
            </p>
            </div>
            {ispostuler?(
                <div className={style.btn}> <span><h3>vous postulez deja</h3></span></div>
            ):(
               
                <div className={style.btn}><button onClick={()=>postuler()}>postuler</button></div>
            )}
          
        </div>
        )}

    ))
    :(
        <p>Loading offers...</p> // ✅ Display message while fetching
      )
      }
    </>
    );
}