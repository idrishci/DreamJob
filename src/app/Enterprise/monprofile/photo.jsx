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
        <img src={"/image/"+cover} alt="cover"  />
        
    </div> 
            <div className={style.first}>
            <div className={style.logo}><Image src={"/image/"+logo} width={120} height={120} alt="logo"/></div>

            <div className={style.social}>
                <Link href={email}><div className={style.back}><Image src={"/icon/mail.png"} width={30} height={30} alt="mail"/></div></Link>
                <Link href={linkedin}><div className={style.back}><Image src={"/icon/linkedin.png"} width={30} height={30} alt="linkedin"/></div></Link>
                <Link href={siteweb}><div className={style.back}><Image src={"/icon/internet (1).png"} width={30} height={30} alt="site"/></div></Link>
            </div>
            </div>
            
        </div>
    );
}