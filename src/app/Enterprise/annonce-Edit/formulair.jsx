"use client"
import  {wilaya} from "@/app/file_json/wilaya.js"
import {secteur, fonction, niveau, experiance, contrat, lieu} from "@/app/file_json/data.js"
import FroalaEditor from "react-froala-wysiwyg"
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import style from "./form.module.css"
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getoffrebyId, updateOffre } from "../server/offre.js"
import Aos from "aos";
import "aos/dist/aos.css";

export default function Form({id}) {
   const router = useRouter();
  useEffect(() => {
    Aos.init({duration:800});
  }, []);

  const [offre, setOffre] = useState();
  const [description, setDescription] = useState('');
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchdata = async () => {
      const offres = await getoffrebyId(id);
      setOffre(offres[0]);
      setFormData(offres[0]);
      // setDescription(offres[0]?.description_offre || "");
    };
    fetchdata();
  }, [id]);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async () => {
    const result = await updateOffre(id, formData);
    if (result) {
      alert("Offre modifiée avec succès !");
      router.push("/Enterprise/mesannonces");
    } else {
      alert("Erreur lors de la modification.");
    }
  };


  return (
    <>
      {offre && (
        <div className={style.form} data-aos="fade-up">
          <h1>Modifier l'offre d'emploi</h1>
          <h5>Renseignez les champs suivants pour publier votre offre d'emploi.</h5>

          <label>
            <h3>Titre de l'offre :</h3>
            <input type="text" placeholder="ex : Comptable junior" defaultValue={offre.titre} onChange={e => handleChange('titre', e.target.value)} />
          </label>

          <label>
            <h3>Fonction :</h3>
            <select defaultValue={offre.fonction} onChange={e => handleChange('fonction', e.target.value)}>
              <option value={offre.fonction}>{offre.fonction}</option>
              {fonction.map((item) => (<option key={item.id} value={item.name}>{item.name}</option>))}
            </select>
          </label>

          <label>
            <h3>Type de Lieu de travail :</h3>
            <select defaultValue={offre.type_de_lieu_de_travail} onChange={e => handleChange('type_de_lieu_de_travail', e.target.value)}>
              <option value={offre.type_de_lieu_de_travail}>{offre.type_de_lieu_de_travail}</option>
              {lieu.map((item) => (<option key={item.id} value={item.name}>{item.name}</option>))}
            </select>
          </label>

          <label>
            <h3>Années d'expérience :</h3>
            <select defaultValue={offre.annees_dexper} onChange={e => handleChange('annees_dexper', e.target.value)}>
              <option value={offre.annees_dexper}>{offre.annees_dexper}</option>
              {experiance.map((item) => (<option key={item.id} value={item.name}>{item.name}</option>))}
            </select>
          </label>

          <label>
            <h3>Lieu de travail :</h3>
            <select defaultValue={offre.wilaya} onChange={e => handleChange('wilaya', e.target.value)}>
              <option value={offre.wilaya}>{offre.wilaya}</option>
              {wilaya.map(item => <option key={item.name} value={item.name}>{item.name}</option>)}
            </select>
          </label>

          <label>
            <h3>Niveau d’étude :</h3>
            <select defaultValue={offre.niveau_detude} onChange={e => handleChange('niveau_detude', e.target.value)}>
              <option value={offre.niveau_detude}>{offre.niveau_detude}</option>
              {niveau.map(item => <option key={item.id} value={item.name}>{item.name}</option>)}
            </select>
          </label>

          <label>
            <h3>Salaire :</h3>
            <input type="number" placeholder="Salaire" defaultValue={offre.salaire} onChange={e => handleChange('salaire', e.target.value)} />
          </label>

          <label>
            <h3>Type de contrat</h3>
            <select defaultValue={offre.type_de_contrat} onChange={e => handleChange('type_de_contrat', e.target.value)}>
              <option value={offre.type_de_contrat}>{offre.type_de_contrat}</option>
              {contrat.map(item => <option key={item.id} value={item.name}>{item.name}</option>)}
            </select>
          </label>

          <label>
            <h3>Nombre de postes</h3>
            <input type="number" defaultValue={offre.nombre_de_post} onChange={e => handleChange('nombre_de_post', e.target.value)} />
          </label>

          <label className={style.area}>
            <h3>Description du l'offre</h3>
            <textarea
              
              defaultValue={offre.description_offre}
              onChange={e => handleChange('description_offre', e.target.value)}
            ></textarea>
          </label>

          <div className={style.btn}>
            <button onClick={handleSubmit}>Modifier</button>
            <Link href={"../Enterprise/mesannonces"}><button>Annuler</button></Link>
          </div>
        </div>
      )}
    </>
  );
}