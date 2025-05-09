'use client'
import Image from "next/image";
import Link from "next/link";
import style from "./profile.module.css"
import { useState,useEffect } from "react";
const img={
    src:"/images/1.jpg",
    width: "80%",
    height:"300px",
}

export default function photo({logo,cover,email,linkedin,siteweb}){
console.log(logo)
    return(
        <div className={style.photo}>

            <div className={style.second}>
        <img src={"http://localhost:8800/uploaded/photo/"+cover} alt="cover"  />
        
    </div> 
            <div className={style.first}>
            <div className={style.logo}><Image src={"http://localhost:8800/uploaded/photo/"+logo} width={120} height={120} alt="logo"/></div>

            <div className={style.social}>
                <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer"><div className={style.back}><Image src={"/icon/mail.png"} width={30} height={30} alt="mail"/></div></a>
                <a href={`https://${linkedin}`}target="_blank"rel="noopener noreferrer"><div className={style.back}><Image src={"/icon/linkedin.png"} width={30} height={30} alt="linkedin"/></div></a>
                <a href={`https://${siteweb}`}target="_blank"rel="noopener noreferrer"><div className={style.back}><Image src={"/icon/internet (1).png"} width={30} height={30} alt="site"/></div></a>
            </div>
            </div>
            
        </div>
    );
}