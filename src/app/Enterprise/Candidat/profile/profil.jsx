
'use client'
import Image from "next/image"
import style from "./profile.module.css"
import  {wilaya} from "@/app/file_json/wilaya.js"
import { useEffect,useState } from "react"
import Aos from "aos";
import "aos/dist/aos.css";
import {secteur,fonction,niveau,experiance,contrat,lieu} from "@/app/file_json/data.js"
import { getcandidat,getcandidatsearch } from "../../server/candidat"
import { addfav,getfavorit } from "../../server/candidat";

export default function profile(){
     const [candidat,setcandidat]=useState([]);
      const [filters, setFilters] = useState({});
      const [select,setselect]=useState('');
      const [save,setsave]=useState(false);
      const [fav,setfav]=useState();
      const identerp=1;
      ////////////recherche a candidat
      const  handlelechange = async(e) => {
        const { name, value } = e.target;
       if(name==="wilaya"){
        setselect(value);
       }
        setFilters(async( prevFilters) => {
          const updatedFilters = {
            ...prevFilters,
            [name]: value,
          };
         const res= await getcandidatsearch(updatedFilters); 
         setcandidat(res);
        });
        return res;
        }
        ////////////get fav 

   useEffect(()=>{
const fetchdata=async()=>{
const data=await getfavorit(identer); 
setfav(data);
};
fetchdata();},[]);  
////////add fav candidat
const add=async(idcandidat)=>{
    console.log(idcandidat);
    const ids={id:3,identerp:1,idcandidat:idcandidat}
    const favorit=await addfav(ids);
    setfav(favorit);
    if (favorit) {
        alert("sauvgarde !");
      } else {
        alert("Erreur de sauvegarde");
      }
}
// function virifier(idcandidat,identerp){
//     const sauv=fav.find((av)=>(av.idcandidat===id&&av.identerp===identerp));
//     sauv? setsave(true):setsave(false);
//     ()=>{setsave(!save);add(can.idcandidat)}


// }
/////////////get candidat
 useEffect(()=>{
const fetchdata=async()=>{
const data=await getcandidat();
 setcandidat(data);
 console.log(data); 
};
fetchdata();},[]);
////animation             
useEffect(()=>{
Aos.init({duration:800});
},[]);
/////recherch
      const handleclicksearch=async()=>{
                const text=document.getElementById("motcle");
                console.log(text.value);
                setFilters(async(prevFilters)=>{
                    const updatedFilters = {
                        ...prevFilters,
                        ['text']: text.value,
                    };
                    const res= await getcandidatsearch(updatedFilters); 
                    setcandidat(res);
                    return res;
    
                })
            }

    return(
        <>
        <div className={style.search}>
            <input type="text" placeholder="recherche" id="motcle"/>
            <select name="wilaya" id="" value={select} onChange={handlelechange}>
                            <option value="">Region</option>
                             {wilaya.map((wilaya) =>  (<option key={wilaya.id} value={wilaya.name} > {wilaya.name}</option>))}
                        </select>
            <select name="secteur" id="" onChange={handlelechange}>
                            <option value="">secteur d'activite</option>
                            {secteur.map((secteur) =>  (<option key={secteur.id} value={secteur.name} > {secteur.name}</option>))}
                        </select>
        <button onClick={handleclicksearch}>recherche</button>
        <hr />
        </div>
{/* //////////// */}

{candidat.length > 0?  candidat.map((can)=>{ return(
    <div className={style.profile} data-aos="zoom-in">
    <div className={style.save}>
     {save?  
    <Image width={40} height={40} src={"/icon/save.png"} alt="save" onClick={()=>setsave(!save)}/>
    :<Image width={40} height={40} src={"/icon/unsave.png"}alt="save" onClick={()=>setsave(!save)}/>  } 
    </div>
        <Image width={100} height={100} alt="photo" src={"/image/accueil.png"} className={style.img} key={can.idcandidat}/>
        <div className={style.data}>
            <h1>{can.titre}</h1>
            <label > <h2>Nom :</h2> <h3>{can.nom}</h3></label>
            <label > <h2>Prenom :</h2> <h3>{can.prenom}</h3></label>
            <label > <h2>Age :</h2> <h3>{can.age}</h3></label>
            <label > <h2>Gender :</h2> <h3>{can.gender}</h3></label>
            <label > <h2>Localisation :</h2> <h3>{can.wilaya}</h3></label>
            <label > <h2>N Telephone:</h2> <h3>{can.num_telephone}</h3></label>
            <label > <h2>Email :</h2> <h3>{can.email}</h3></label>
            <label > <h2>Niveau d’etude :</h2> <h3>{can.niveau_detude}</h3></label>
            <label > <h2>Secteur d'activité :</h2> <h3>{can.secteur_dactivite}</h3></label>
            
            <label > <a href="/file/1745249871661_cv.pdf" target="_blank" rel="noopener noreferrer"><h3>mon cv</h3></a></label>
        </div>
        <hr/>
        <div className={style.desc}>
        <label >
            <h2>Description</h2>
            <p>{can.sujet} </p>
        </label>
        </div>
        </div>
)}) : <h4 >n'existe pas </h4> }
 
        

    

</>

 

    );
}