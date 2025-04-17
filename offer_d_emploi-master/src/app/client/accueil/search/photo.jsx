"use client";
import { useRouter } from "next/navigation";
import { useEffect,useState } from "react";
import style from "./search.module.css";
import  {wilaya} from "@/app/file_json/wilaya.js";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
export default function page(){ 

useEffect(()=>{
    Aos.init({duration:800});

},[]);
    return (
        <div className={style.img} data-aos="fade-left">
<Image width={400} height={400} src={"/image/accueil.png"}/>
        </div>
    );

}