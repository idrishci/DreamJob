
'use client'
import style from "./search.module.css"
import Link from "next/link";
import { useEffect } from "react";
import {wilaya} from "../../../file_json/wilaya.js";
import Aos from "aos";
import "aos/dist/aos.css";
export default function post(){
    useEffect(()=>{
        Aos.init({duration:800});
    
    },[]);
  
    return(
   
        <div className={style.post} data-aos="fade-right">
            
         <h1>Trouvez l'emploi de vos rêves en Algérie</h1>
         <p>Trouvez le bon emploi ,au bon moment , avec nous !</p>
         <Link href={"../../client/offre"}><button>Decouvrez les offres</button></Link>
            {/* {wilaya.slice(0,10).map (wilaya =><Link  key={wilaya.id} href="/"><h3>{wilaya.name}</h3></Link> )} */}

            
        </div>
    );
}