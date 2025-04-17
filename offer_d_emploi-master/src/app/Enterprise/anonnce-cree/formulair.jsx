'use client'
import  {wilaya} from "@/app/file_json/wilaya.js"
import {secteur,fonction,niveau,experiance,contrat,lieu} from "@/app/file_json/data.js"
import FroalaEditor from "react-froala-wysiwyg"
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import style from "./form.module.css"
// import { Link } from "lucide-react";
import Link from "next/link";
export default function form(){
    return(
    
        <div className={style.form}>
 
         <h1> Créer une annonce d'emploi</h1>  
         <h5>Renseignez les champs suivants pour publier votre offre d'emploi.</h5>
         <label >
            <h3>Titer de Post :</h3>
            <input type="text"  placeholder="ex : Comptable junior"/>
         </label>
         <label >
            <h3>Métier :</h3>
            <input type="text" placeholder="Metier du profile recherche" />
         </label>
         <label >
            <h3>Lieu de travail :</h3>
            <select name="" id="">
            {wilaya.map (wilaya => <option value={wilaya.name}>{wilaya.name} </option>)}
            </select>
         </label>
         <label htmlFor="">
            <h3>Type de Lieu de travail :</h3>
            <select name="" id="">
                <option value="function">Lieu de travail</option>
                {lieu.map((lieu) =>  (<option key={lieu.id} value={lieu.name}> {lieu.name}</option>))}
            </select>
         </label>
         <label >
            <h3>Années d'expérience :</h3>
            <select name="" id="">
                         <option value="">experience</option>
                         {experiance.map((experiance) =>  (<option key={experiance.id} value={experiance.name}> {experiance.name}</option>))}
                     </select>
         </label>
         <label >
            <h3>Niveau du Post :</h3>
           <select name="" id="">
           <option value="">Niveau de Carier</option>
           </select>
         </label>
          <label >
            <h3>Niveau d’étude :</h3> 
            <select name="" id="">
                         <option value="">Niveau de Carier</option>
                         {niveau.map((niveau) =>  (<option key={niveau.id} value={niveau.name}> {niveau.name}</option>))}
                    </select>
          </label>
          <label >
            <h3>Salaire :</h3>
            <input type="number" placeholder="Salaire"/>
          </label>
          <label >
            <h3>Type de contrat</h3>
            <select name="" id="">
                         <option value="">type de contrat</option>
                         {contrat.map((contrat) =>  (<option key={contrat.id} value={contrat.name}> {contrat.name}</option>))}
                     </select>
          </label>
          <label >
            <h3>Nombre de postes</h3>
            <input type="numbre" />
          </label>
          <label >
            <h3>Description du post</h3>
            <FroalaEditor className={style.textarea}/>  
          </label>
                     
        <div className={style.btn}>
            <Link href={"../Enterprise"}> <button type="reset">Annuler</button></Link>
             <button type="submit">Poster</button>
        </div>           
       
   
        </div>
    
    );
} 