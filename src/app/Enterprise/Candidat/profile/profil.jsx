
'use client'
import Image from "next/image"
import style from "./profile.module.css"
import  {wilaya} from "@/app/file_json/wilaya.js"
import { useEffect } from "react"
import Aos from "aos";
import "aos/dist/aos.css";
import {secteur,fonction,niveau,experiance,contrat,lieu} from "@/app/file_json/data.js"

export default function profile(){
    useEffect(()=>{
        Aos.init({duration:800});
    
    },[]);

    return(
        <>
        <div className={style.search}>
            <input type="text" placeholder="recherche" />
            <select name="" id="">
                            <option value="">Region</option>
                             {wilaya.map((wilaya) =>  (<option key={wilaya.id} value={wilaya.name} > {wilaya.name}</option>))}
                        </select>
            <select name="" id="">
                            <option value="">secteur d'activite</option>
                            {secteur.map((secteur) =>  (<option key={secteur.id} value={secteur.name} > {secteur.name}</option>))}
                        </select>
        <button>recherche</button>
        <hr />
        </div>

    <div className={style.profile} data-aos="zoom-in">

        <Image width={100} height={100} alt="photo" src={"/image/profile.jpg"} className={style.img}/>
        <div className={style.data}>
            <h1>Titre</h1>
            <label > <h2>Nom :</h2> <h3>Khene</h3></label>
            <label > <h2>Prenom :</h2> <h3>lokmen</h3></label>
            <label > <h2>Age :</h2> <h3>21</h3></label>
            <label > <h2>Gender :</h2> <h3>Male</h3></label>
            <label > <h2>Localisation :</h2> <h3>oran</h3></label>
            <label > <h2>N Telephone:</h2> <h3>+213 774281378</h3></label>
            <label > <h2>Email :</h2> <h3>@gmail.com</h3></label>
            <label > <h2>Niveau d’etude :</h2> <h3>Master 1</h3></label>
            <label > <h2>Secteur d'activité :</h2> <h3>Informatique, Télécom, Internet</h3></label>
            <label > <h3>Mon cv</h3></label>

        </div>
        
        <hr/>
        <div className={style.desc}>
        <label >
            <h2>Description</h2>
            <p>hello ,my name lokmen </p>
        </label>
        </div>
    </div>

    <div className={style.profile} data-aos="zoom-in">

        <Image width={100} height={100} alt="photo" src={"/image/profile.jpg"} className={style.img}/>
        <div className={style.data}>
            <h1>Titre</h1>
            <label > <h2>Nom :</h2> <h3>Khene</h3></label>
            <label > <h2>Prenom :</h2> <h3>lokmen</h3></label>
            <label > <h2>Age :</h2> <h3>21</h3></label>
            <label > <h2>Gender :</h2> <h3>Male</h3></label>
            <label > <h2>Localisation :</h2> <h3>oran</h3></label>
            <label > <h2>N Telephone:</h2> <h3>+213 774281378</h3></label>
            <label > <h2>Email :</h2> <h3>@gmail.com</h3></label>
            <label > <h2>Niveau d’etude :</h2> <h3>Master 1</h3></label>
            <label > <h2>Secteur d'activité :</h2> <h3>Informatique, Télécom, Internet</h3></label>
            <label > <h3>Mon cv</h3></label>

        </div>
        
        <hr/>
        <div className={style.desc}>
        <label >
            <h2>Description</h2>
            <p>hello ,my name lokmen </p>
        </label>
        </div>
    </div>

</>

 

    );
}