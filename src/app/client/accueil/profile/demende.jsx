import {secteur,fonction,niveau,experiance,contrat,lieu} from "@/app/file_json/data.js"
import Image from "next/image";
import style from "./profile.module.css"
export default function demende(){
    return(

        <div className={style.edit}>
    <div className={style.data}>
    <label > <h2>Titre</h2> <input type="text" /></label>
  

    </div> 
     <div className={style.desc}>
        
        <h2>Sujet</h2>
       {/* <textarea className={style.textarea} > */}
        <textarea name="" id=""  className={style.textarea} ></textarea>
    </div>
    <button>demende</button>
        </div>
        
    );
}