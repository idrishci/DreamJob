'use client'
// import Photo from "./photo"
import style from "./edit.module.css"

import Image from "next/image"

import {secteur} from "@/app/file_json/data.js"
import { useState,useEffect } from "react";

export default function edit({id}){
    //  const [enterprises,setEnterprises]=useState('');
     const [formData, setFormData] = useState({});
     const [previewLogo, setPreviewLogo] = useState('');
     const [previewCover, setPreviewCover] = useState('');
       
     
     ////get info
     const fetchdata=async()=>{
    
      const data=await getEnterprise(id);
      setFormData(data[0]);
      // setEnterprises(data ? data[0] : []);
      // setDescription(offres[0]?.description || "");
  }
     useEffect(()=>{
            
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
            for (let key in formData) {
              if (key !== "photo_profile" && key !== "pathcover") {
                formDataToSend.append(key, formData[key]);
              }
            }
            if (formData.photo_profile) {
              formDataToSend.append("photo_profile", formData.photo_profile);
            }
            if (formData.pathcover) {
              formDataToSend.append("pathcover", formData.pathcover);
            }

            console.log("photo_profile type:", typeof formData.photo_profile);
            console.log("pathcover type:", typeof formData.pathcover);
           const result = await updateenterprise(id, formDataToSend);
              if (result) {
                alert("Offre modifiée avec succès !");
                fetchdata();
              } else {
                alert("Erreur lors de la modification.");
              }
           
            };
          const handleImageChange = (e, type) => {
            const file = e.target.files[0];
            if (file) {
              if (type === "logo") {
                setFormData({ ...formData, 'photo_profile': file });
                setLogo(file);
                setPreviewLogo(URL.createObjectURL(file));
              } else if (type === "cover") {
                setFormData({ ...formData, 'pathcover': file });
                setCover(file);
                setPreviewCover(URL.createObjectURL(file));
              }
            }
          };
    return(
        <>
        <div className={style.edit}> 
          <h1>Remplire cette </h1>
     <div className={style.photo}>
        
        <div className={style.logo}>
        <h3>Selection une photo profile</h3>
        <label htmlFor="logo"><img src={previewLogo } alt="logo" /><input type="file" id="logo" style={{display:"none"}}   onChange={(e) => handleImageChange(e, "logo")} /></label>
        </div>

        <div className={style.background}>
        <h3>Selection une photo profile</h3>
        <label For="backg" ><img  src={previewCover } alt="Backround" /><input type="file" id="backg" style={{display:"none"}} onChange={(e) => handleImageChange(e,"cover")} /></label>
        </div>
        
     </div> 
     
            <div className={style.first}>
           

                <label >
                    <h3>Nom de l'enterprise</h3>
                    <input type="text"  onChange={e => handleChange('nom', e.target.value)}  required/>
                </label>
                <label >
                    <h3>Localisation</h3>
                    <input type="text" onChange={e => handleChange('localisation', e.target.value)} />
                </label>
                <label >
                    <h3>Numero Telephone</h3>
                    <input type="text"onChange={e => handleChange('num_telephone', e.target.value)} />
                </label>
                <label >
                    <h3>Nombre d'employe</h3>
                    <select name="emplyoe" id="employe" onChange={e => handleChange('nombre_demployer', e.target.value)}>
                        <option value="10 A 20">10 A 20 </option>
                        <option value="20 a 50">20 a 50</option>
                        <option value="50 A 100">50 A 100</option>
                        <option value="100 A 500">100 A 500</option>
                        <option value="500 A 1000">500 A 1000</option>
                        <option value="1000 A 2000">1000 A 2000</option>
                        <option value="2000 A 5000">2000 A 5000</option>
                        <option value="Plus de 5000">Plus de 5000</option>
                    </select>
                </label>
                <label >
                    <h3>Secteur d'activite</h3>
                     <select name="" id="" onChange={e => handleChange('secteur_dactivite', e.target.value)} >
                                    <option value="">secteur d'activite</option>
                                    {secteur.map((secteur) =>  (<option key={secteur.id} value={secteur.name} > {secteur.name}</option>))}
                    </select>
                </label>
                
                <label >
                    <h3>Site web</h3>
                    <input type="text" onChange={e => handleChange('siteweb', e.target.value)} />
                </label>
                <label >
                    <h3>Linkedin</h3>
                    <input type="link" onChange={e => handleChange('linkedin', e.target.value)} />
                </label>
                <label >
                    <h3>Email de l'enterprise</h3>
                    <input type="email"   placeholder="@gmail.com" onChange={e => handleChange('email', e.target.value)}  />
                </label>
                <label className={style.description}>
                    <h3>Description</h3>
                    <textarea className={style.area}  onChange={e => handleChange('description_enter', e.target.value)} ></textarea>
                </label>
                
                
               
            
                {/* <Mssg/> */}
            </div>
            <hr />
            <button onClick={handleSubmit} >Engestrer</button>
         </div>
        </>
    );
}
