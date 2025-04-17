import style from "./profile.module.css"
import Image from "next/image"
import {wilaya} from "@/app/file_json/wilaya"
import {secteur,fonction,niveau,experiance,contrat,lieu} from "@/app/file_json/data.js"
export default function edit (){
    return(
        <div className={style.edit}>
        
        <label  className={style.imag} For="image"><Image width={150} height={150} alt="photo" src={"/image/profile.jpg"}  className={style.img}/>
        
        </label>
        <input type="file"  id="image" />
        <div className={style.data}>
            <label > <h2>Nom :</h2> <input type="text" /></label>
            <label > <h2>Prenom :</h2> <input type="text" /></label>
            <label > <h2>Age :</h2> <input type="number" /></label>
            <label >
                 <h2>Gender :</h2> 
                 <select >
                    <option value="male" default>Male</option>
                    <option value="female">Female</option>
                 </select>
                 </label>
            <label >
                 <h2>Localisation :</h2> 
                 <select name="" id="">
                    <option value="">wilaya</option>
                 {wilaya.map (wilaya => <option value={wilaya.name}> {wilaya.name}</option>)}
                 </select>
                 </label>
            <label > <h2>N Telephone:</h2> <input type="text" /></label>
            <label > <h2>Niveau d’etude :</h2> 
            <select name="" id="">
                <option value="">Niveau de Carier</option>
                {niveau.map((niveau) =>  (<option key={niveau.id} value={niveau.name}> {niveau.name}</option>))}
            </select>
            </label>
            <label > <h2>Expérience :</h2> 
            <select name="" id="">
                <option value="">experience</option>
                {experiance.map((experiance) =>  (<option key={experiance.id} value={experiance.name}> {experiance.name}</option>))}
            </select>
            </label>
            <label for="cv" > 
                <button>upload mon cv </button> 
                <input type="file" id="cv" />
            </label>
          

        </div>
        <hr/>
        <div className={style.desc}>
        
            <h2>Description</h2>
           {/* <textarea className={style.textarea} > */}
            <textarea name="" id=""  className={style.textarea} placeholder="description"></textarea>
        </div>
        <button type="submit"> Sauvgarder</button>
        </div>
    );
}