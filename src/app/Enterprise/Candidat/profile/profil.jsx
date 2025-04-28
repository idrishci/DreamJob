
'use client'
import Image from "next/image"
import style from "./profile.module.css"
import  {wilaya} from "@/app/file_json/wilaya.js"
import { useEffect,useState } from "react"
import Aos from "aos";
import "aos/dist/aos.css";
import {secteur,fonction,niveau,experiance,contrat,lieu} from "@/app/file_json/data.js"
import { getcandidat,getcandidatsearch ,getfavorit,addfav,deletfav} from "../../server/candidat"



export default function profile({identer}){
     const [candidat,setcandidat]=useState([]);
      const [filters, setFilters] = useState({});
      const [select,setselect]=useState('');
      const [loading, setLoading] = useState(true);
      const [favoris, setFavoris] = useState([]); 


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

  
////////add fav candidat

// function virifier(idcandidat,identerp){
//     const sauv=fav.find((av)=>(av.idcandidat===id&&av.identerp===identerp));
//     sauv? setsave(true):setsave(false);
//     ()=>{setsave(!save);add(can.idcandidat)}


// }
/////////////get candidat
 useEffect(()=>{
const fetchdata=async()=>{
    const data1 = await getfavorit(identer); // identer = 3
    setFavoris(data1.map((fav) => fav.idcandidat));
const data=await getcandidat();
 setcandidat(data);
 console.log(data); 
 fetchFavoris();
 setLoading(false);
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
            //////////////get favorit
            const fetchFavoris = async () => {
                const data1 = await getfavorit(identer); // identer = 3
                setFavoris(data1.map((fav) => fav.uid_firebase));
                console.log("hi "+data1);  // 🌟 فقط ids
              };
            useEffect(() => {
              
                fetchFavoris();
              }, []);
              /////////add fav 
const toggleSave = async (uid_firebase) => {
                const ids={identer:identer,idcandidat:uid_firebase}
                console.log(ids);
                if (!favoris.includes(uid_firebase)) {
                  await addfav(ids); // تسجيل في قاعدة البيانات
                  setFavoris((prev) => [...prev, uid_firebase]);

                } else { 
                    await deletfav(ids);   
                  // هنا يمكنك إضافة خاصية حذف لو تريد
                  setFavoris((prev) => prev.filter(id => id !== uid_firebase));

                }
              };

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
{loading ? (
  <h4>Chargement...</h4>
) :
candidat.length > 0?  candidat.map((can)=>(
    <div className={style.profile} data-aos="zoom-in">
    <div className={style.save}>
   
            <Image
              width={40}
              height={40}
              src={favoris.includes(can.uid_firebase) ? "/icon/unsave.svg" : "/icon/save.svg"}
              alt="save"
              unoptimized
              onClick={ () => toggleSave(can.uid_firebase)}
            />
        {/* <Button uid_firebase={can.uid_firebase} identer={3} key={can.idcandidat}  /> */}
    </div>
        <Image width={100} height={100} alt="photo" src={`/image/${can.photo_profile}`} className={style.img} key={can.idcandidat}/>
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
            
            <label > <a href={`/file/${can.cv}`} target="_blank" rel="noopener noreferrer"><h3>mon cv</h3></a></label>
        </div>
        <hr/>
        <div className={style.desc}>
        <label >
            <h2>Description</h2>
            <p>{can.sujet} </p>
        </label>
        </div>
        </div>
)) : <h4 >n'existe pas </h4> }
 
        

    

</>

 

    );
}