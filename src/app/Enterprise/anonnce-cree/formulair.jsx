'use client'
import { wilaya } from "@/app/file_json/wilaya.js"
import { secteur, fonction, niveau, experiance, contrat, lieu } from "@/app/file_json/data.js"
import FroalaEditor from "react-froala-wysiwyg"
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import style from "./form.module.css"
import Link from "next/link";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { postOffre } from "../server/offre";
import dynamic from "next/dynamic";

export default function Form({ id }) {

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split('T')[0];
  const [formData, setFormData] = useState({
    titre: '',
    fonction: '',
    type_de_lieu_de_travail: '',
    annees_dexper: '',
    wilaya: '',
    niveau_detude: '',
    salaire: '',
    type_de_contrat: '',
    nombre_de_post: '',
    description_offre: '',
    date:formattedDate,
    
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    console.log("Form Data à envoyer:", formData); // 🔍 vérifier les données avant envoi
    const result = await postOffre(id, formData);
    if (result) {
      alert("Offre est créée !");
    } else {
      alert("Erreur lors de la création.");
    }
  };

  return (
    <div className={style.form} data-aos="fade-up">
      <h1>Créer une annonce d'emploi</h1>
      <h5>Renseignez les champs suivants pour publier votre offre d'emploi.</h5>

      <label>
        <h3>Titre de Post :</h3>
        <input type="text" onChange={e => handleChange('titre', e.target.value)} required />
      </label>

      <label>
        <h3>Fonction :</h3>
        <select onChange={e => handleChange('fonction', e.target.value)} required>
          <option>fonction</option>
          {fonction.map((item) => (
            <option key={item.id} value={item.name}>{item.name}</option>
          ))}
        </select>
      </label>

      <label>
        <h3>Type de Lieu de travail :</h3>
        <select onChange={e => handleChange('type_de_lieu_de_travail', e.target.value)} required>
          <option value=''>Type de Lieu de travail</option>
          {lieu.map((item) => (
            <option key={item.id} value={item.name}>{item.name}</option>
          ))}
        </select>
      </label>

      <label>
        <h3>Années d'expérience :</h3>
        <select onChange={e => handleChange('annees_dexper', e.target.value)} required>
          <option>Années d'expérience</option>
          {experiance.map((item) => (
            <option key={item.id} value={item.name}>{item.name}</option>
          ))}
        </select>
      </label>

      <label>
        <h3>Lieu de travail :</h3>
        <select onChange={e => handleChange('wilaya', e.target.value)} required>
          <option>Lieu de travail</option>
          {wilaya.map(item => (
            <option key={item.name} value={item.name}>{item.name}</option>
          ))}
        </select>
      </label>

      <label>
        <h3>Niveau d’étude :</h3>
        <select onChange={e => handleChange('niveau_detude', e.target.value)} required>
          <option>Niveau d’étude</option>
          {niveau.map(item => (
            <option key={item.id} value={item.name}>{item.name}</option>
          ))}
        </select>
      </label>

      <label>
        <h3>Salaire :</h3>
        <input type="number" placeholder="Salaire" onChange={e => handleChange('salaire', e.target.value)} required />
      </label>

      <label>
        <h3>Type de contrat</h3>
        <select onChange={e => handleChange('type_de_contrat', e.target.value)} required>
          <option>type de contrat</option>
          {contrat.map(item => (
            <option key={item.id} value={item.name}>{item.name}</option>
          ))}
        </select>
      </label>

      <label>
        <h3>Nombre de postes</h3>
        <input type="number" onChange={e => handleChange('nombre_de_post', e.target.value)} required />
      </label>

      <label className={style.area}>
        <h3>Description du post</h3>
        <FroalaEditor
          tag={"description"}
          model={formData.description_offre}
          onModelChange={(newContent) => handleChange('description', newContent)}
        />
      </label>

      <div className={style.btn}>
        <button onClick={handleSubmit}>Poster</button>
        <Link href="../Enterprise/mesannonces"><button>Annuler</button></Link>
      </div>
    </div>
  );
}
