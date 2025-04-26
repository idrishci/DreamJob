'use client'
import style from "./acceuil.module.css";
import Image from "next/image";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function acceuil(){

    useEffect(()=>{
        Aos.init({duration:800});
    
    },[]);
    return (
        <div className={style.acceuil} >
            <section data-aos="fade-right" >
                <h1>Bienvenue dans votre espace d'administration.</h1>
                <p>Gérez vos offres, vos utilisateurs et vos entreprises en toute facilité.</p>
                
            </section>
            <section data-aos="fade-left">
                <Image src="/image/Clipped_image_20250426_101637.png" width={300} height={500} alt="photo" />
            </section>
        </div>
    );
}