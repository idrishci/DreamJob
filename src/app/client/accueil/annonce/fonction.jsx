"use client";
import { useState,useEffect } from "react";
import style from "./annonce.module.css";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Fonction() {
  useEffect(()=>{
    Aos.init({duration:800});

},[]);

  const [voirPlus, setVoirPlus] = useState(false);

  const fonctions = [
    "Commerce / Distribution / Vente",
    "Commercial, Technico Commercial, Service Client",
    "Responsable Commercial, Grands Comptes",
    "Création, Design",
    "Marketing, Communication",
    "Journalisme, Médias, Traduction",
    "Informatique, Systèmes d'Information, Internet",
    "Télécommunication, Réseaux",
    "Chantier, Métiers BTP, Architecture",
    "Ingénierie, Etudes, Projet, R&D",
    "Logistique, Achat, Stock, Transport",
    "Production, Méthode, Industrie",
    "Maintenance, Entretien",
    "Qualité, Sécurité, Environnement",
    "Santé, Médical, Pharmacie",
    "Métiers de l'Agriculture",
    "Hôtellerie, Tourisme, Restauration, Loisirs",
    "Ouvriers Qualifiés, Chauffeur",
    "Administration, Moyens Généraux",
    "Assistanat, Secrétariat",
    "Comptabilité, Finance",
    "Métiers Banque et Assurances",
    "RH, Personnel, Formation",
    "Education, Enseignement",
    "Direction Générale, Direction d'Unité",
    "Autre",
  ];

  const fonctionsAffichees = voirPlus ? fonctions : fonctions.slice(0, 10);

  return (
    <div className={style.main} data-aos="fade-up">

    <div className={style.fonction}>
      {fonctionsAffichees.map((fonction, index) => (
        <Link
          key={index}
          href={{
            pathname: "../../client/offre",
            query: { name: "fonction", value: fonction },
          }}
        >
          <h3>{fonction}</h3>
        </Link>
      ))}

      
        
    </div>
    {!voirPlus && (
        <h4 onClick={() => setVoirPlus(true)} >voir plus  {'>'}</h4> 
        )}
          {voirPlus && (

        <h4 onClick={() => setVoirPlus(false)} >voir moin  {'>'}</h4> 

        )}
    </div>
  );
}
