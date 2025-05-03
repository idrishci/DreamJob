'use client'
// import Photo from "./photo"
import style from "./edit.module.css"

import Image from "next/image"
import {setcandidat} from "../../services/userserv"
import {secteur,niveau,experiance} from "@/app/file_json/data.js"
import { useState,useEffect } from "react";
import { useRouter } from 'next/navigation';
export default function FormEnter({id}){
    const router = useRouter();
  // console.log("hhhh"+id);
    //  const [enterprises,setEnterprises]=useState('');
     const [formData, setFormData] = useState({});
     const [previewLogo, setPreviewLogo] = useState('/icon/engineer.png');
     const [previewCover, setPreviewCover] = useState('');
     const requiredFields = [
      "nom",
      "prenom",
      "age",
      "gender",
      "wilaya",
      "exper",
      "num_telephone",
      "niveau_detude",
      "secteur_dactivite",
      "email",
      "description_can",
    ];
       
     
     ////get info


        ///////////////////
        const handleChange = (field, value) => {
            setFormData({ ...formData, [field]: value });};
          /////
        const handleSubmit = async () => {
     
          const formDataToSend = new FormData();
          formDataToSend.append('uid_firebase', id);
          console.log("this"+formDataToSend.uid_firebase)
          const requiredFields = [
            "nom",
            "prenom",
            "age",
            "gender",
            "wilaya",
            "exper",
            "num_telephone",
            "niveau_detude",
            "secteur_dactivite",
            "email",
            "description_can",

          ];
        
          for (const field of requiredFields) {
            if (!formData[field]) {
              alert(`Veuillez remplir le champ : ${field.replace(/_/g, " ")}`);
              return;
            }
          }
           
            for (let key in formData) {
              if (key !== "photo_profile" && key !== "cv") {
                formDataToSend.append(key, formData[key]);
              }
            }
            if (formData.photo_profile) {
              formDataToSend.append("photo_profile", formData.photo_profile);
            }
            if (formData.cv) {
                formDataToSend.append("cv", formData.cv);
              }

            // console.log("photo_profile type:", typeof formData.photo_profile);
            // console.log("pathcover type:", typeof formData.pathcover);
           const result = await setcandidat( formDataToSend);
              if (result) {
             router.push("/");

              } else {
                alert("Erreur lors de la modification.");
              }
           
            };
          const handleImageChange = (e, type) => {
            const file = e.target.files[0];
            if (file) {
              if (type === "logo") {
                setFormData({ ...formData, 'photo_profile': file });
                // setLogo(file);
                setPreviewLogo(URL.createObjectURL(file));
              } else if (type === "cv") {
                setFormData({ ...formData, 'cv': file });
                // setCover(file);
                setPreviewCover(URL.createObjectURL(file));
              }
            }
          };
    return(
        <>
        <div className={style.edit}> 
          <h1> Veuillez compléter votre profil</h1>
     <div className={style.photo}>
        
        <div className={style.logo}>
        <h3>Selection une photo profile</h3>
        <label htmlFor="logo"><Image width={150} height={150}src={previewLogo } alt="logo"  /><input type="file" id="logo" style={{display:"none"}}   onChange={(e) => handleImageChange(e, "logo")} /></label>
        </div>
     </div> 
     
            <div className={style.first}>
           

                <label >
                    <h3>Nom* </h3>
                    <input type="text"  onChange={e => handleChange('nom', e.target.value)}  required/>
                </label>
                <label >
                    <h3>Prenom* </h3>
                    <input type="text"  onChange={e => handleChange('prenom', e.target.value)}  required/>
                </label>
                <label >
                    <h3>Age*</h3>
                    <input type="number" onChange={e => handleChange('age', e.target.value)} />
                </label>
                <label >
                    <h3>genre*</h3>
                    <select name="" id="" onChange={e => handleChange('gender', e.target.value)}>
                        <option value="Male">Male </option>
                        <option value="Female">Female</option>
                    </select>
                </label>
                <label >
                    <h3>Adress*</h3>
                    <input type="text" onChange={e => handleChange('wilaya', e.target.value)} />
                </label>
                <label >
                    <h3>Numero Telephone*</h3>
                    <input type="text"onChange={e => handleChange('num_telephone', e.target.value)} />
                </label>
               
                <label >
                    <h3>Secteur d'activite*</h3>
                     <select name="" id="" onChange={e => handleChange('secteur_dactivite', e.target.value)} >
                                    <option value="">secteur d'activite</option>
                                    {secteur.map((secteur) =>  (<option key={secteur.id} value={secteur.name} > {secteur.name}</option>))}
                    </select>
                </label>
                <label htmlFor="">
                    <h3>Niveau d'etude*</h3>
                     <select name="niveau_etude" id=""  onChange={e => handleChange('niveau_detude', e.target.value)}>
                                    <option value="">Niveau d’etude</option>
                                    {niveau.map((niveau) =>  (<option key={niveau.id} value={niveau.name}> {niveau.name}</option>))}
                                </select>
                </label>
                  <label>
                        <h3>Années d'expérience*</h3>
                        <select onChange={e => handleChange('exper', e.target.value)} required>
                          <option>Années d'expérience</option>
                          {experiance.map((item) => (
                            <option key={item.id} value={item.name}>{item.name}</option>
                          ))}
                        </select>
                      </label>
                <label >
                    <h3>Email* </h3>
                    <input type="email"   placeholder="@gmail.com" onChange={e => handleChange('email', e.target.value)}  />
                </label>
                <label className={style.description}>
                    <h3>Description*</h3>
                    <textarea className={style.area}  onChange={e => handleChange('description_can', e.target.value)} ></textarea>
                </label>
      
        <label htmlFor="backg" className={style.btn} ><span>Telechargez votre CV</span><input type="file" id="backg" style={{display:"none"}} onChange={(e) => handleImageChange(e,"cv")} /></label>

                
               
            
                {/* <Mssg/> */}
            </div>
            <hr />
            <button onClick={handleSubmit} >Enregistrer</button>
         </div>
        </>
    );
}
