
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
   
    
      const [selected, setSelected] = useState({});
      const inputref=useRef(null);
      
 const searchParams=useSearchParams();
 const namee = searchParams.get("name");
 const name1=searchParams.get("namee");
 const valuee = searchParams.get("value");
 const text = searchParams.get("mocle");
    console.log("this is useparams",name1,"value",text);
 useEffect(() => {
    if (namee ==="fonction"  ) {
      setSelected(valuee);
      handlefunctionacceil({ target: { name: "fonction", value: valuee } });
    }
    if (namee ==="wilaya"  ) {
        setSelected(valuee);
        handlefunctionacceil({ target: { name: "wilaya", value: valuee } });
      }
      if(name1==="motcle"){
        // setmot(text);
        if (inputref.current) inputref.current.value=text;
        handleregionacceil({ target: { name: "motcle", value: text } });
      }
  }, [valuee]);
    
  const  handleregionacceil=(e)=>{ 
    console.log("this is the inpurref",inputref.current);
    console.log("hjhjh");
 
      const { name, value } = e.target;
      console.log("this is useparams",namee,"value",valuee);
     if(value==null){
             // setSelected(valuee);
         console.log("this is the value",valuee);
         setFilters(async( prevFilters) => {
             const updatedFilters = {
             ...prevFilters,
             [namee]: valuee,
             };
         const res= await getoffresearch(updatedFilters); 
         setOffres(res);
             console.log("Updated filters:",res);
         });
         }else{
 
             setSelected(value);
             setFilters(async( prevFilters) => {
                 const updatedFilters = {
                 ...prevFilters,
                 [name]: value,
                 };
             const res= await getoffresearch(updatedFilters); 
             setOffres(res);
                 console.log("Updated filters:",res);
             });
         }
 return value;
     }
   const  handlefunctionacceil=(e)=>{ 
   console.log("hjhjh");

     const { name, value } = e.target;
     console.log("this is useparams",namee,"value",valuee);
    if(value==null){
            // setSelected(valuee);
        console.log("this is the value",valuee);
        setFilters(async( prevFilters) => {
            const updatedFilters = {
            ...prevFilters,
            [namee]: valuee,
            };
        const res= await getoffresearch(updatedFilters); 
        setOffres(res);
            console.log("Updated filters:",res);
        });
        }else{

            setSelected(value);
            setFilters(async( prevFilters) => {
                const updatedFilters = {
                ...prevFilters,
                [name]: value,
                };
            const res= await getoffresearch(updatedFilters); 
            setOffres(res);
                console.log("Updated filters:",res);
            });
        }
return value;
    }
    const [offres,setOffres]=useState([]);
    useEffect(()=>{
       
       const fetchdata=async()=>{
            const data=await getoffres();
            setOffres(data);
        } 
        fetchdata();
       
    },[]);

     const [filters, setFilters] = useState({});
   
        const  handlelechange = async(e) => {
          const { name, value } = e.target;
         
          setFilters(async( prevFilters) => {
            const updatedFilters = {
              ...prevFilters,
              [name]: value,
            };
           const res= await getoffresearch(updatedFilters); 
           setOffres(res);
            console.log("Updated filters:",res);
        });
           
            return res;
          
        };

      
        const handleclicksearch=async()=>{
            const text=document.getElementById("motcle");
            console.log(text.value);
            
            setFilters(async(prevFilters)=>{
                const updatedFilters = {
                    ...prevFilters,
                    ['text']: text.value,
                };
                const res= await getoffresearch(updatedFilters); 
                setOffres(res);
                console.log("Updated filters2:",res);
                return res;

            })
        }
    return (
        <>
         <div className={stylesearch.search_bar}>
                    <input type="text" name="search-bar"   placeholder="motcle,post" />

                       <select name="wilaya" id="" value={selected} onChange={handleregionacceil}>
                                <option value="">Region</option>
                                 {wilaya.map((wilaya) =>  (<option key={wilaya.id}  > {wilaya.name}</option>))}
                            </select>
                    <button onClick={handleclicksearch}>search</button>
                </div>

          <div className={style.search}>

                    <select name="secteur" id="" onChange={handlelechange}>
                        <option value="">secteur d'activite</option>
                        {secteur.map((secteur) =>  (<option key={secteur.id} value={secteur.name} > {secteur.name}</option>))}
                    </select>
                    <select name="fonction" id="" value={selected} onChange={handlefunctionacceil}>
                        <option value="">fonction</option>
                        {fonction.map((fonction) =>  (<option key={fonction.id} value={fonction.name} > {fonction.name}</option>))}
                    </select>
                    <select name="niveau" id="" onChange={handlelechange}>
                        <option value="">Niveau de Carier</option>
                        {niveau.map((niveau) =>  (<option key={niveau.id} value={niveau.name}> {niveau.name}</option>))}
                    </select>
                    <select name="experiance" id="" onChange={handlelechange}>
                        <option value="">experience</option>
                        {experiance.map((experiance) =>  (<option key={experiance.id} value={experiance.name}> {experiance.name}</option>))}
                    </select>
                    <select name="contrat" id="" onChange={handlelechange} value={filters.contrat}>
                        <option value="">type de contrat</option>
                        {contrat.map((contrat) =>  (<option key={contrat.id} value={contrat.name}> {contrat.name}</option>))}
                    </select>
                    <select name="lieu" id="" onChange={handlelechange}>
                        <option value="function">Lieu de travail</option>
                        {lieu.map((lieu) =>  (<option key={lieu.id} value={lieu.name}> {lieu.name}</option>))}
                    </select> 
                    <Hr />
                    <div className="affiche">
                        {/* <h1>{region}</h1> */}
                    </div>
                  
                </div>


        <div className={style.offre}>
          {offres.length > 0 ? (
           offres.map((offre)=>{
            // console.log(offre.idoffre);
          return  <Link href={`./offre_demploi?id=${offre.idoffre}`} key={offre.idoffre}id={offre.idoffre}  className={style.offre}><Card  id={offre.idoffre} key={offre.idoffre}/></Link> 
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