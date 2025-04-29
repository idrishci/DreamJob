
'use client'
import Image from "next/image"
import style from "./person.module.css"
import { useEffect,useState } from "react"
import Aos from "aos";
import "aos/dist/aos.css";
import {secteur,fonction,niveau,experiance,contrat,lieu} from "@/app/file_json/data.js"
import { getfavorit,addfav,deletfav} from "../server/candidat"



export default function profile({identer}){
      const [loading, setLoading] = useState(false);
      const [favoris, setFavoris] = useState([]); 


      ////////////recherche a candidat

        ////////////get fav 

  
////////add fav candidat

// function virifier(idcandidat,identerp){
//     const sauv=fav.find((av)=>(av.idcandidat===id&&av.identerp===identerp));
//     sauv? setsave(true):setsave(false);
//     ()=>{setsave(!save);add(can.idcandidat)}


// }
/////////////get candidat

////animation             
useEffect(()=>{
Aos.init({duration:800});
},[]);

            //////////////get favorit
            const fetchFavoris = async () => {
                const data1 = await getfavorit(identer); // identer = 3
                setFavoris(data1);
                console.log("hi "+identer);  // 🌟 فقط ids
              };
            useEffect(() => {
              
                fetchFavoris();
              }, []);
              /////////add fav 
const toggleSave = async (uid_firebase) => {
                const ids={identer:identer,idcandidat:uid_firebase}
                console.log(ids);
              
                    await deletfav(ids);   
                  // هنا يمكنك إضافة خاصية حذف لو تريد
                    fetchFavoris();

                
              };

    return(
        <>
{/* //////////// */}
{
favoris.length > 0?  favoris.map((can)=>(
    <div className={style.profile} data-aos="zoom-in">
    <div className={style.save}>
   
            <Image
              width={40}
              height={40}
              src={ "/icon/unsave.svg" }
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
  
        </div>
)) : <h4 >n'existe pas </h4> }
 
        

    

</>

 

    );
}