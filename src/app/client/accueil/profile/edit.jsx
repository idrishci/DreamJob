import style from "./profile.module.css"
import Image from "next/image"
import {wilaya} from "@/app/file_json/wilaya"
import {secteur,fonction,niveau,experiance,contrat,lieu} from "@/app/file_json/data.js";
import {useState,useEffect}from "react";
import{updateinfouser}from"@/app/services/userserv.js";
export default function edit (iduser){
    console.log(iduser);
    const [infouser,setInfouser]=useState({});
    const[image,setImage]=useState(null);
    const[filecv,setFilecv]=useState(null);
const formdata=new FormData();
    const setinfouser = async (e) => {
        const {name,value}=e.target;
       await setInfouser(prev=>({...prev,[name]:value}));
       
       for (let key in infouser) {
        formdata.append(key, infouser[key]);
      }
      formdata.append("image",image);
        formdata.append("cv",filecv);
      for (let pair of formdata.entries()) {
        console.log(`${pair[0]}:`, pair[1]);
      }
   
    }
    const updateinfo = async (e) => {
        updateinfouser(iduser ,formdata);
    }
    useEffect(() =>{       
   
      }, [infouser]);
    setinfouser();
    return(
        <div className={style.edit}>

        <div className={style.lab}>
        <label  className={style.imag} name="image">
            <Image width={150} height={150} alt="photo" src={"/image/profile.jpg"}  className={style.img}/>
         <input type="file"  id="image" onChange={(e)=>{setImage(e.target.files[0])}}/>
        </label>
       </div>

        <div className={style.data}>
            <label > <h2>Nom :</h2> <input type="text"  name="nom" placeholder="Nom" onChange={setinfouser}/></label>
            <label > <h2>Prenom :</h2> <input type="text"  name="prenom" placeholder="Prenom"  onChange={setinfouser}/></label>
            <label > <h2>Age :</h2> <input type="number" name="age"  placeholder="Age"  onChange={setinfouser}/></label>
            <label >
                 <h2 >Gender :</h2> 
                 <select name="gender" onChange={setinfouser}>
                    <option value="male" default>Male</option>
                    <option value="female">Female</option>
                 </select>
                 </label>
            <label >
                 <h2>Localisation :</h2> 
                 <select name="wilaya" id="" onChange={setinfouser} >
                    <option value="">wilaya</option>
                 {wilaya.map (wilaya => <option key={wilaya.name}value={wilaya.name}  > {wilaya.name}</option>)}
                 </select>
                 </label>
            <label > <h2>N Telephone:</h2> <input name="telephone"type="text"  placeholder="Num Telephone" onChange={setinfouser}/></label>
            <label > <h2>Email:</h2> <input name="email"type="text" placeholder="Email"onChange={setinfouser}/></label>
            <label > <h2>Niveau d’etude :</h2> 
            <select name="niveau_etude" id="" onChange={setinfouser}>
                <option value="">Niveau d’etude</option>
                {niveau.map((niveau) =>  (<option key={niveau.id} value={niveau.name}> {niveau.name}</option>))}
            </select>
            </label>
            <label > <h2>Expérience :</h2> 
            <select name="exper" id="" onChange={setinfouser}>
                <option value="">experience</option>
                {experiance.map((experiance) =>  (<option key={experiance.id} value={experiance.name}> {experiance.name}</option>))}
            </select>
            </label>
            <label >
            <h2>Secteur d'activite :</h2> 
            <select name="secteur_activite" id="" onChange={setinfouser}>
                <option value="">secteur d'activite</option>
                {secteur.map((secteur) =>  (<option key={secteur.id} value={secteur.name} > {secteur.name}</option>))}
            </select>
            </label>
            <div className={style.lab}>
            
                 <label name="cv" className={style.button} >upload mon cv  </label> 
           
            <input type="file" id="cv" onChange={(e)=>{setFilecv(e.target.files[0])}} />
          </div>


        </div>
        <hr/>
        <div className={style.desc}>
        
            <h2>Description</h2>
           {/* <textarea className={style.textarea} > */}
            <textarea name="description" id=""  className={style.textarea} placeholder="description" onChange={setinfouser}></textarea>
        </div>
        <button type="submit" onClick={updateinfo}> Sauvgarder</button>
        </div>
    );
}