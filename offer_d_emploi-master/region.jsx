"use client";
import Link from "next/link";
import {useState,useEffect}from"react";
import {wilaya} from "../../../file_json/wilaya";
import style from "./annonce.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
export default function region(){
  useEffect(()=>{
    Aos.init({duration:800});

},[]);
     const [voirPlus, setVoirPlus] = useState(false);
     const afficheregion =voirPlus?wilaya:wilaya.slice(0,30);
    return (
        <div className={style.main} data-aos="zoom-in">
        <div className={style.region}>

       {afficheregion.map ((wilaya,index) =>(
        <Link 
        key={index}
        href={{
            pathname: "../../client/offre",
            query: { name: "wilaya", value: wilaya.name },
        }}
        > <h3>{wilaya.name} </h3></Link>
        ))}
        </div>
          {!voirPlus && (
            <h4 onClick={() => setVoirPlus(true)} >voir plus  {'>'}</h4> 
            )}
              {voirPlus && (
            <h4 onClick={() => setVoirPlus(false)} >voir mois  {'>'}</h4> 
            )}
        </div>
    );
}