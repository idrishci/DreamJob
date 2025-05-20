
"use client";
import style from "./offre.module.css"
import { useEffect, useState,useRef } from "react";
import {getoffres} from "../services/offreserv";
import Card from "./card";
import  {wilaya} from "@/app/file_json/wilaya.js";
import {secteur,fonction,niveau,experiance,contrat,lieu} from "@/app/file_json/data.js";
import Hr from "@/app/component/hr/line.jsx";
import {getoffresearch}from"../services/offreserv.js";
import {useSearchParams}from"next/navigation";
import Link from "next/link";
// import stylee from "../../component/search-bar/search-bar.module.css";

import stylesearch from "@/app/component/search-bar/search.module.css";

export default function page(){
   
    const [filters, setFilters] = useState({});
      const [selected, setSelected] = useState({});
      const inputref=useRef(null);
      
 const searchParams=useSearchParams();
 const namee = searchParams.get("name");
 const name1=searchParams.get("name");
 const valuee = searchParams.get("value");
 const text = searchParams.get("mocle");
 
    console.log("this is useparams",name1,"value",valuee);
    /////////////set value
 useEffect(() => {
    if (namee ==="fonction"  ) {
      setSelected(valuee);
      handlelechange( { target: { name: "fonction", value: valuee } })
    //   handlefunctionacceil({ target: { name: "fonction", value: valuee } });
    }
    if (namee ==="wilaya"  ) {
        setSelected(valuee);
        handlelechange( { target: { name: "wilaya", value: valuee }})
        // handlefunctionacceil({ target: { name: "wilaya", value: valuee } });
      }
  }, [valuee]);
  const reset=()=>{
    setFilters({});
    document.getElementById('wilaya').value='';
    document.getElementById('fonction').value='';
    document.getElementById('contrat').value='';
    document.getElementById('niveau').value='';
    document.getElementById('exper').value='';
    document.getElementById('lieu').value='';
    document.getElementById('secteur').value='';
    document.getElementById('text').value='';
    setSelected('');

  }
    ///////////////get by region in acceuil
//   const  handleregionacceil=(e)=>{ 
//     console.log("this is the inpurref",inputref.current);
//     console.log("hjhjh");
 
//       const { name, value } = e.target;
//       console.log("this is useparams",namee,"value",valuee);
//      if(value==null){
//              // setSelected(valuee);
//          console.log("this is the value",valuee);
//          setFilters(async( prevFilters) => {
//              const updatedFilters = {
//              ...prevFilters,
//              [namee]: valuee,
//              };
//          const res= await getoffresearch(updatedFilters); 
//          setOffres(res);
//              console.log("Updated filters:",res);
//          });
//          }else{
 
//              setSelected(value);
//              setFilters(async( prevFilters) => {
//                  const updatedFilters = {
//                  ...prevFilters,
//                  [name]: value,
//                  };
//              const res= await getoffresearch(updatedFilters); 
//              setOffres(res);
//                  console.log("Updated filters:",res);
//              });
//          }
//  return value;
//      }
     ////////////////by fonction
//    const  handlefunctionacceil=(e)=>{ 
//    console.log("hjhjh");

//      const { name, value } = e.target;
//      console.log("this is useparams",namee,"value",valuee);
//     if(value==null){
//             // setSelected(valuee);
//         console.log("this is the value",valuee);
//         setFilters(async( prevFilters) => {
//             const updatedFilters = {
//             ...prevFilters,
//             [namee]: valuee,
//             };
//         const res= await getoffresearch(updatedFilters); 
//         setOffres(res);
//             console.log("Updated filters:",res);
//         });
//         }else{

//             setSelected(value);
//             setFilters(async( prevFilters) => {
//                 const updatedFilters = {
//                 ...prevFilters,
//                 [name]: value,
//                 };
//             const res= await getoffresearch(updatedFilters); 
//             setOffres(res);
//                 console.log("Updated filters:",res);
//             });
//         }
// return value;
//     }
    ////////////////get offre
    const [offres,setOffres]=useState([]);
    // useEffect(()=>{
       
    //    const fetchdata=async()=>{
    //         const data=await getoffres();
    //         setOffres(data);
    //     } 
    //     fetchdata();
       
    // },[]);
    useEffect(() => {
        if (Object.keys(filters).length === 0) {
            const fetchAll = async () => {
              const all = await getoffres();
              setOffres(all);
            };
            fetchAll();
          } else {
            // Sinon → appliquer les filtres
            const fetchFiltered = async () => {
              const data = await getoffresearch(filters);
              setOffres(data);
            };
            fetchFiltered();
          }
        }
      , [filters]);
//////////////////set filter
   
   
        const  handlelechange = async(e) => {
            setSelected(valuee);
          const { name, value } = e.target;
         
         
            const updatedFilters = {
              ...filters,
              [name]: value,
            };
            setFilters(updatedFilters);
            console.log("Updated filters:",updatedFilters);
           const res= await getoffresearch(updatedFilters); 
           setOffres(res);
          
    
           
            return res;
          
        };

      
        const handleclicksearch=async()=>{
            const text=document.getElementById("text");
            console.log(text.value);
            
          
                const updatedFilters = {
                    ...filters,
                    ['text']: text.value,
                };
                setFilters(updatedFilters);
                const res= await getoffresearch(updatedFilters); 
                setOffres(res);
                console.log("Updated filters2:",res);
                return res;

        
        }
        const filtredoffre=offres.filter(offres=>offres.situation==="active");
    return (
        <>
         <div className={stylesearch.search_bar}>
                    <input type="text" name="search-bar" id="text"  placeholder="motcle,post" />

                       <select name="wilaya" id="wilaya" value={selected} onChange={handlelechange}>
                                <option value="">Region</option>
                                 {wilaya.map((wilaya) =>  (<option key={wilaya.id}  > {wilaya.name}</option>))}
                            </select>
                    <button onClick={handleclicksearch}>Rechercher</button>
                </div>

          <div className={style.search}>

                    <select name="secteur" id="secteur" onChange={handlelechange}>
                        <option value="">secteur d'activite</option>
                        {secteur.map((secteur) =>  (<option key={secteur.id} value={secteur.name} > {secteur.name}</option>))}
                    </select>
                    <select name="fonction" id="fonction" value={selected} onChange={handlelechange}>
                        <option value="">fonction</option>
                        {fonction.map((fonction) =>  (<option key={fonction.id} value={fonction.name} > {fonction.name}</option>))}
                    </select>
                    <select name="niveau" id="niveau" onChange={handlelechange}>
                        <option value="">Niveau de Carier</option>
                        {niveau.map((niveau) =>  (<option key={niveau.id} value={niveau.name}> {niveau.name}</option>))}
                    </select>
                    <select name="experiance" id="exper" onChange={handlelechange}>
                        <option value="">experience</option>
                        {experiance.map((experiance) =>  (<option key={experiance.id} value={experiance.name}> {experiance.name}</option>))}
                    </select>
                    <select name="contrat" id="contrat" onChange={handlelechange} value={filters.contrat}>
                        <option value="">type de contrat</option>
                        {contrat.map((contrat) =>  (<option key={contrat.id} value={contrat.name}> {contrat.name}</option>))}
                    </select>
                    <select name="lieu" id="lieu" onChange={handlelechange}>
                        <option value="">Lieu de travail</option>
                        {lieu.map((lieu) =>  (<option key={lieu.id} value={lieu.name}> {lieu.name}</option>))}
                    </select> 
                    {filters && Object.keys(filters).length > 0 && (
  <div className={style.filter}>
    <h3 onClick={reset}>supprimer le filter</h3>
  </div>
)}
                    <Hr />
                    <div className="affiche">
                        {/* <h1>{region}</h1> */}
                    </div>
                  
                </div>


        <div className={style.offre}>
          {filtredoffre.length > 0 ? (
           filtredoffre.map((offre)=>{
           
          return  <Link href={`./offre_demploi?id=${offre.idoffre}&uid=${offre.id_enterp}`} key={offre.idoffre}id={offre.idoffre}  className={style.link}><Card  id={offre.idoffre} key={offre.idoffre}/></Link> 
           } )
        ): offres.length===0 ? (
            <p> n'existe pas d'offres...</p>
          ) : (
            <p>Chargement des offres...</p> // ✅ Display message while fetching
          )
          }
       {/* <Card key={1} id={1} /> */}
        </div>
        </>

    );

}