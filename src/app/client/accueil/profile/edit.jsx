import style from "./profile.module.css"
import Image from "next/image"
import {wilaya} from "@/app/file_json/wilaya"
import {secteur,fonction,niveau,experiance,contrat,lieu} from "@/app/file_json/data.js";
import {useState,useEffect}from "react";
import{updateinfouser}from"@/app/services/userserv.js";
import {getinfouser}from"@/app/services/userserv";
import { onAuthStateChanged } from 'firebase/auth';
export default function edit (iduser){
    console.log(iduser);
    const [infouser,setInfouser]=useState({});
    const[user,setuser]=useState({});
    const[image,setImage]=useState(null);
    const[filecv,setFilecv]=useState(null);
    const formdata=new FormData();
useEffect(()=>{
 
    const getinfouserr =async()=>{
        const res= await getinfouser(iduser.id,"client");
        
        await setInfouser(res[0]);
        // await setuser(res[0]);
    }
    getinfouserr();
    },[]);


    const setinfouser = async (e) => {
        const {name,value}=e.target;
       await setInfouser(prev=>({...prev,[name]:value}));

    //   for (let pair of formdata.entries()) {
    //     console.log(`${pair[0]}:`, pair[1]);
    //   }
    }
    const updateinfo = async (e) => {
        formdata.append("iduser",iduser.id);
        for (let key in infouser) {
         formdata.append(key, infouser[key]);
       }
       await formdata.append("photo",image);
       await formdata.append("cv",filecv);
        console.log("fdfd");
       await  updateinfouser(formdata);
    }
    return(
        // <>
        // {user.map((usere)=>(
       
        <div className={style.edit}>

        <div className={style.lab}>
        <label  className={style.imag} name="image">
        <Image width={150} height={150} alt="User profile photo" src={`http://localhost:8800/uploaded/photo/${infouser.photo_profile}`} className={style.img}/>
                <input type="file"  id="image" onChange={(e)=>{setImage(e.target.files[0])}}/>
        </label>
       </div>

        <div className={style.data}>
            <label > <h2>Nom :</h2> <input type="text"  name="nom" placeholder="Nom" value={infouser.nom||""} onChange={setinfouser}/></label>
            <label > <h2>Prenom :</h2> <input type="text"  name="prenom" placeholder="Prenom"  value={infouser.prenom||""} onChange={setinfouser}/></label>
            <label > <h2>Age :</h2> <input type="number" name="age"  placeholder="Age" value={infouser.age||""} onChange={setinfouser}/></label>
            <label >
                 <h2 >Gender :</h2> 
                 <select name="gender" value={infouser.gender} onChange={setinfouser}>
                    <option value="male" default>Male</option>
                    <option value="female">Female</option>
                 </select>
                 </label>
            <label >
                 <h2>Localisation :</h2> 
                 <select name="wilaya" id="" value={infouser.wilaya} onChange={setinfouser} >
                    <option value="">wilaya</option>
                 {wilaya.map (wilaya => <option key={wilaya.name}value={wilaya.name}  > {wilaya.name}</option>)}
                 </select>
                 </label>
            <label > <h2>N Telephone:</h2> <input name="telephone"type="text"  placeholder="Num Telephone" value={infouser.num_telephone||""} onChange={setinfouser}/></label>
            <label > <h2>Email:</h2> <input name="email"type="text" placeholder="Email" value={infouser.email||""} onChange={setinfouser}/></label>
            <label > <h2>Niveau d’etude :</h2> 
            <select name="niveau_etude" id=""value={infouser.niveau_detude} onChange={setinfouser}>
                <option value="">Niveau d’etude</option>
                {niveau.map((niveau) =>  (<option key={niveau.id} value={niveau.name}> {niveau.name}</option>))}
            </select>
            </label>
            <label > <h2>Expérience :</h2> 
            <select name="exper" id="" value={infouser.exper} onChange={setinfouser}>
                <option value="">experience</option>
                {experiance.map((experiance) =>  (<option key={experiance.id} value={experiance.name}> {experiance.name}</option>))}
            </select>
            </label>
            <label >
            <h2>Secteur d'activite :</h2> 
            <select name="secteur_activite" id="" value={infouser.secteur_dactivite} onChange={setinfouser}>
                <option value="">secteur d'activite</option>
                {secteur.map((secteur) =>  (<option key={secteur.id} value={secteur.name} > {secteur.name}</option>))}
            </select>
            </label>
            <div className={style.lab}>
            
            <label name="cv" className={style.button} >upload mon cv  
           
            <input type="file" id="cv"  onChange={(e)=>{setFilecv(e.target.files[0])}} />
            </label> 
          </div>


        </div>
        <hr/>
        <div className={style.desc}>
        
            <h2>Description</h2>
           {/* <textarea className={style.textarea} > */}
            <textarea name="description" id=""  className={style.textarea} placeholder="description" value={infouser.description_can} onChange={setinfouser}></textarea>
        </div>
        <button  onClick={updateinfo}> Sauvgarder</button>
        </div>
        // ))}
        // </>
    );
}