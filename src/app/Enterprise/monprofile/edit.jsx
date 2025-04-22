'use client'
import Photo from "./photo"
import style from "./edit.module.css"

import Image from "next/image"

import Mssg from "./message"
import {secteur} from "@/app/file_json/data.js"
import FroalaEditor from "react-froala-wysiwyg"
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import {getEnterprise,updateenterprise} from "../server/enterprise.js"
import { useState,useEffect } from "react";

export default function edit({id}){
     const [enterprises,setEnterprises]=useState('');
     const [formData, setFormData] = useState({});
     const [logo, setLogo] = useState(null);
     const [cover, setCover] = useState(null);
     const [previewLogo, setPreviewLogo] = useState('');
     const [previewCover, setPreviewCover] = useState('');
       
     
     ////get info
     useEffect(()=>{
            const fetchdata=async()=>{
    
                const data=await getEnterprise(id);
                setFormData(data[0]);
                setEnterprises(data ? data[0] : []);
                setDescription(offres[0]?.description || "");
            }
            fetchdata();
        }
        ,[]);
        ///////////////////
        const handleChange = (field, value) => {
            setFormData({ ...formData, [field]: value });
          };
          /////
        const handleSubmit = async () => {
            const formDataToSend = new FormData();
               // ajouter les champs texte
            for (let key in formData) {
              formDataToSend.append(key, formData[key]);
            }
          
            // ajouter les fichiers s'ils existent
            if (logo) formDataToSend.append("logo", logo);
            if (cover) formDataToSend.append("cover", cover);
                 console.log("this "+formDataToSend)
           const result = await updateenterprise(id, formDataToSend);
              if (result) {
                alert("Offre modifiée avec succès !");
              } else {
                alert("Erreur lors de la modification.");
              }
           
            };
          const handleImageChange = (e, type) => {
            const file = e.target.files[0];
            if (file) {
              if (type === "logo") {
                setLogo(file);
                setPreviewLogo(URL.createObjectURL(file));
              } else if (type === "cover") {
                setCover(file);
                setPreviewCover(URL.createObjectURL(file));
              }
            }
          };
    return(
        <>{enterprises &&
        <div className={style.edit}>
     <div className={style.photo}>
        
        <div className={style.logo}>
        <label htmlFor="logo"><img src={previewLogo || enterprises.pathprofile} alt="logo" /></label><input type="file" id="logo" style={{display:"none"}}  onChange={(e) => handleImageChange(e, "logo")} />
        </div>
        <div className={style.background}>
        <label For="backg" ><Image width={140} height={140} src={previewCover || enterprises.pathcover}/></label><input type="file" id="backg" style={{display:"none"}} onChange={(e) => handleImageChange(e, "cover")} />
        </div>
        
     </div> 
     
            <div className={style.first}>
           

                <label >
                    <h3>Nom de l'enterprise</h3>
                    <input type="text"  onChange={e => handleChange('nom', e.target.value)} defaultValue={enterprises.nom}/>
                </label>
                <label >
                    <h3>Localisation</h3>
                    <input type="text" onChange={e => handleChange('localisation', e.target.value)} defaultValue={enterprises.localisation}/>
                </label>
                <label >
                    <h3>Numero Telephone</h3>
                    <input type="text"onChange={e => handleChange('num_telephone', e.target.value)} defaultValue={enterprises.num_telephone}/>
                </label>
                <label >
                    <h3>Nombre d'employe</h3>
                    <select name="emplyoe" id="employe" onChange={e => handleChange('nombre_demployer', e.target.value)} >
                        <option value={enterprises.nombre_demployer}>{enterprises.nombre_demployer}</option>
                        <option value="">10 A 20 </option>
                        <option value="">20 a 50</option>
                        <option value="">50 A 100</option>
                        <option value="">100 A 500</option>
                        <option value="">500 A 1000</option>
                        <option value="">Plus de 1000</option>
                    </select>
                </label>
                <label >
                    <h3>Secteur d'activite</h3>
                     <select name="" id="" onChange={e => handleChange('secteur_dactivite', e.target.value)} defaultValue={enterprises.secteur_dactivite}>
                                    <option value="">secteur d'activite</option>
                                    {secteur.map((secteur) =>  (<option key={secteur.id} value={secteur.name} > {secteur.name}</option>))}
                    </select>
                </label>
                
                <label >
                    <h3>Site web</h3>
                    <input type="text" onChange={e => handleChange('siteweb', e.target.value)} defaultValue={enterprises.siteweb} />
                </label>
                <label >
                    <h3>Linkedin</h3>
                    <input type="link" onChange={e => handleChange('linkedin', e.target.value)} defaultValue={enterprises.linkedin}/>
                </label>
                <label >
                    <h3>Email de l'enterprise</h3>
                    <input type="email"   placeholder="@gmail.com" onChange={e => handleChange('email', e.target.value)} defaultValue={enterprises.email} />
                </label>
                <label className={style.description}>
                    <h3>Description</h3>
                    <textarea className={style.area}  onChange={e => handleChange('desecription', e.target.value)} value={enterprises.desecription}></textarea>
                </label>
                
                
               
            
                {/* <Mssg/> */}
            </div>
            <hr />
            <button onClick={handleSubmit} >Engestrer</button>
         </div>} 
        </>
    );
}
