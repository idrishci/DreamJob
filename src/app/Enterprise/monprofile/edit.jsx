'use client'
import Photo from "./photo"
import style from "./edit.module.css"

import Image from "next/image"

import Mssg from "./message"
import {secteur} from "@/app/file_json/data.js"
import FroalaEditor from "react-froala-wysiwyg"
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

export default function edit(){
    
    return(
        <div className={style.edit}>
     <div className={style.photo}>
        
        <div className={style.logo}>
        <label htmlFor="logo"><img src="/image/sonatrach.png" alt="logo" /></label><input type="file" id="logo" style={{display:"none"}} />
        </div>
        <div className={style.background}>
        <label For="backg" ><Image width={140} height={140} src={"/image/sonatrach.png"}/></label><input type="file" id="backg" style={{display:"none"}} />
        </div>
        
     </div> 
     
            <div className={style.first}>
           

                <label >
                    <h3>Nom de l'enterprise</h3>
                    <input type="text"  />
                </label>
                <label >
                    <h3>Localisation</h3>
                    <input type="text" />
                </label>
                <label >
                    <h3>Numero Telephone</h3>
                    <input type="text"  />
                </label>
                <label >
                    <h3>Nombre d'employe</h3>
                    <select name="emplyoe" id="employe">
                        <option value=""></option>
                        <option value="">10 A 20 </option>
                        <option value="">20 a 50</option>
                        <option value="">50 A 100</option>
                    </select>
                </label>
                <label >
                    <h3>Secteur d'activite</h3>
                     <select name="" id="">
                                    <option value="">secteur d'activite</option>
                                    {secteur.map((secteur) =>  (<option key={secteur.id} value={secteur.name} > {secteur.name}</option>))}
                    </select>
                </label>
                
                <label >
                    <h3>Site web</h3>
                    <input type="text"  />
                </label>
                <label >
                    <h3>Linkedin</h3>
                    <input type="link"  />
                </label>
                <label >
                    <h3>Email de l'enterprise</h3>
                    <input type="email"   placeholder="@gmail.com"/>
                </label>
                <label className={style.description}>
                    <h3>Description</h3>
                   <FroalaEditor />   
                </label>
                <hr />
                <label >
                    <h3>Email </h3>
                    <input type="email"   placeholder="@gmail.com"/>
                </label>
                <label >
                    <h3>Mot de Pass</h3>
                    <input type="password"   placeholder=""/>
                </label>
            
                {/* <Mssg/> */}
            </div>
            <hr />
            <button >Engestrer</button>
        </div>
    );
}
