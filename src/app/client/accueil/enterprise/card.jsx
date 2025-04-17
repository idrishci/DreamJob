import style from './style.module.css';
import Image from 'next/image';
import {date} from "./post.js"
import {useState,useEffect}from"react";
import getenterprise from "../../services/enterpriseserv"

import Aos from "aos";
import "aos/dist/aos.css";
export default function card({id}){

      const [enterprises,setEnterprises]=useState([]);
      useEffect(()=>{
        Aos.init({duration:800});
    
    },[]);

        useEffect(()=>{
            const fetchdata=async()=>{
    
                const data=await getenterprise();
                const enter=data.find((data)=>data.identerp===id);
                console.log(enter);
                console.log("card");
                setEnterprises(enter ? [enter] : []);
            }
            fetchdata();
        }
        ,[]);
    return(
        <>
          {enterprises.map((enterprise)=>{return (
        <div className={style.card} data-aos="fade-up">

            {/* <Image src={props.url}
                   width={85}
                   height={120}
                   alt="logo"
                //    key={enterprise.identerp}
                   /> */}
                   
           <h2>{enterprise.nom}</h2>
             
            {/* <h5>({props.post} post vide)</h5>  //for letter*/}
        </div>
           )})} 
   </>
    
        );}
