
'use client'
import Image from "next/image";

import style from "./profile.module.css";
import {useState,useEffect} from "react";
import getenterprise from "../services/enterpriseserv";
const img={
    src:"/images/1.jpg",
    width: "80%",
    height:"300px",
}
export default function photo({id}){
    const [enterprises,setEnterprises]=useState([]);
    useEffect(()=>{
       
        const fetchdata=async()=>{
            const data=await getenterprise();
            const enter=data.find((data)=>data.uid_firebase===id);
          
            // console.log(enter);
            // console.log("card");
            setEnterprises(enter ? [enter] : []);
        }
        fetchdata();
    }
    ,[id]);
   


    return(<>

       

        <div className={style.photo}>
       {enterprises.map((enterprise)=>{ return (
       <>  
       <div className={style.second}>
        <img src={`/image/${enterprise.pathcover}`} alt="cover"  />

        
        </div> 
           <div className={style.first}>

               <Image src={`/image/${enterprise.photo_profile}`} width={130} height={130} alt="logo" className={style.logo}/>
               <div className={style.social}>
                   <div className={style.back}> <Image src={"/icon/mail.png"} onClick={() => enterprise.email && window.open(enterprises.email, "_blank")} width={30} height={30} alt="mail" /></div>
                   <div className={style.back}><Image src={"/icon/linkedin.png"} onClick={() => enterprise.linkedin && window.open(enterprises.linkedin, "_blank")} width={30} height={30} alt="linkedin" /></div>
                   <div className={style.back}><Image src={"/icon/internet (1).png"} onClick={() => enterprise.siteweb && window.open(enterprises.siteweb, "_blank")} width={30} height={30} alt="siteweb" /></div>
               </div>
               <h1> {enterprise.nom}</h1>
        </div>
      
        </>  
             )} )}
        </div>
       
   </>

    );
}