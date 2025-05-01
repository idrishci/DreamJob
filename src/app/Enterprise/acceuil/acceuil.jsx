'use client'
import style from "./acceuil.module.css";
import Image from "next/image";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function acceuil({id}){

    useEffect(()=>{
        Aos.init({duration:800});
    
    },[]);
    return (
        <div className={style.acceuil}>
            <section >
                <h1>Bienvenue sur notre plateforme de recrutement</h1>
                <p>De nouvelles énergies, de réelles opportunités, des résultats impressionnants.</p>
                <Link href={`./Enterprise/anonnce-cree?id=${id}`}><button>cree une annonce</button></Link>
            </section>
            <section data-aos="fade-left">
                <Image src="/image/enter.png" width={350} height={500} alt={"photo"} />
            </section>
        </div>
    );
}