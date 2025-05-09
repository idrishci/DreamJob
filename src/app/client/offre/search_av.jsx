// "use client"
// import  {wilaya} from "@/app/file_json/wilaya.js"
// import {secteur,fonction,niveau,experiance,contrat,lieu} from "@/app/file_json/data.js"
// import style from "./offre.module.css"
// import { useState } from "react";
// import Hr from "@/app/component/hr/line.jsx";
// import {getoffresearch}from"../services/offreserv.js";
// export const handlesearch=(data)=>{
//     console.log("Updated rs:", data);
//     return data;
// }
// export default async  function search(){
//     const [filters, setFilters] = useState({});

//     const  handlelechange = async(e) => {
//       const { name, value } = e.target;
    
//       // update the filter state
     
//         const updatedFilters = {
//           ...prevFilters,
//           [name]: value,
//         };
    
//         // Call the search function after updating filters
//        const res= await getoffresearch(filters); // 🚀 Pass the latest filters
//        handlesearch(res);
//         console.log("Updated filters:",res);
//         return res;
      
//     };
    
//     return (
//         <div className={style.search}>
//         {/* //     <select name="region" id="" onChange={handlelechange}>
//         //         <option value="">Region</option>
//         //          {wilaya.map((wilaya) =>  (<option key={wilaya.id}  > {wilaya.name}</option>))}
//         //     </select> */}
//              <select name="secteur" id="" onChange={handlelechange}>
//                  <option value="">secteur d'activite</option>
//                  {secteur.map((secteur) =>  (<option key={secteur.id} value={secteur.name} > {secteur.name}</option>))}
//              </select>
//              <select name="fonction" id=""onChange={handlelechange}>
//                  <option value="">fonction</option>
//                  {fonction.map((fonction) =>  (<option key={fonction.id} value={fonction.name}> {fonction.name}</option>))}
//              </select>
//              <select name="niveau" id="" onChange={handlelechange}>
//                  <option value="">Niveau de Carier</option>
//                  {niveau.map((niveau) =>  (<option key={niveau.id} value={niveau.name}> {niveau.name}</option>))}
//              </select>
//              <select name="experiance" id="" onChange={handlelechange}>
//                  <option value="">experience</option>
//                  {experiance.map((experiance) =>  (<option key={experiance.id} value={experiance.name}> {experiance.name}</option>))}
//              </select>
//              <select name="contrat" id="" onChange={handlelechange} value={filters.contrat}>
//                  <option value="">type de contrat</option>
//                  {contrat.map((contrat) =>  (<option key={contrat.id} value={contrat.name}> {contrat.name}</option>))}
//              </select>
//              <select name="lieu" id="" onChange={handlelechange}>
//                  <option value="function">Lieu de travail</option>
//                  {lieu.map((lieu) =>  (<option key={lieu.id} value={lieu.name}> {lieu.name}</option>))}
//              </select> 
//              <Hr />
//              <div className="affiche">
//                 {/* <h1>{region}</h1> */}
//             </div>

          
//         </div>
//     );
// }