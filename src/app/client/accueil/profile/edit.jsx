'use client'
import style from "./profile.module.css"
import Image from "next/image"
import {wilaya} from "@/app/file_json/wilaya"
import {secteur,fonction,niveau,experiance,contrat,lieu} from "@/app/file_json/data.js";
import {useState,useEffect}from "react";
import{updateinfouser}from"@/app/services/userserv.js";
import {getinfouser}from"@/app/services/userserv";
import { onAuthStateChanged } from 'firebase/auth';
export default function edit ({id}){
    console.log(id);
    const [infouser,setInfouser]=useState('');
    const[image,setImage]=useState('');
    const [formData, setFormData] = useState({});
    // const formdata=new FormData();
    useEffect(() => {
        const fetchData = async () => {
          const res = await getinfouser(id, "client");
          await setInfouser(res[0])

        };
        fetchData();
        const interval = setInterval(() => {
            fetchData(); // rafraîchir chaque seconde
          }, 5000); // 1000ms = 1 seconde
        
          return () => clearInterval(interval);
      }, []);
      


    const setinfouser = async (e) => {
        const {name,value}=e.target;
        setFormData({ ...formData, [name]: value });
    }
    // const updateinfo = async (e) => {
    //     formdata.append("iduser",iduser.id);
    //     for (let key in infouser) {
    //      formdata.append(key, infouser[key]);
    //    }
    //    await formdata.append("photo_profile",image);
    //    await formdata.append("cv",filecv);
    //    await  updateinfouser(formdata);
    // }
         const handleSubmit = async () => {
                const formDataToSend = new FormData();
                formDataToSend.append("iduser",id);
                for (let key in formData) {
                  if (key !== "photo_profile" && key !== "cv") {
                    formDataToSend.append(key, formData[key]);
                  }
                }
                if (formData.photo_profile) {
                  formDataToSend.append("photo_profile", formData.photo_profile);
                }
                if (formData.cv) {
                  formDataToSend.append("cv", formData.cv);
                }
    
                console.log("photo_profile type:",  formData.photo_profile);
                console.log("cv type:",  formData.cv);
               const result = await updateinfouser(formDataToSend);
               console.log('the result '+result);
                  if (result) {
                    alert("Profile modifiée avec succès !");
                    fetchdata();
                  } else {
                    alert("Erreur lors de la modification.");
                  }
               
                };
    const handleFileChange = (e, type) => {
        const file = e.target.files[0];
        if (file) {
          if (type === "photo") {
            setFormData({ ...formData, 'photo_profile': file });
            // setLogo(file);
            setImage(URL.createObjectURL(file));
          } else if (type === "cv") {
            setFormData({ ...formData, 'cv': file });
            // setCover(file);
           
          }
        }
      };
    return(
        <>
       {infouser && <div className={style.edit}>

        <div className={style.lab}>
        <label  className={style.imag} name="image">
        {infouser.photo_profile ==null ? (
              <Image width={150} height={150} alt={"photo_profile"} src={"/icon/engineer.png"}  className={style.img}/>
             ):(        
        <Image width={150} height={150} alt={"User profile photo"} src={image? image : `http://localhost:8800/uploaded/photo/${infouser.photo_profile}`} className={style.img}/>
              )} 
        <input type="file"  id="image" onChange={(e) => handleFileChange(e,"photo")}/>
        </label>
       </div>

        <div className={style.data}>
            <label > <h2>Nom :</h2> <input type="text"  name="nom" placeholder="Nom" defaultValue={infouser.nom||""} onChange={setinfouser}/></label>
            <label > <h2>Prenom :</h2> <input type="text"  name="prenom" placeholder="Prenom"  defaultValue={infouser.prenom||""} onChange={setinfouser}/></label>
            <label > <h2>Age :</h2> <input type="number" name="age"  placeholder="Age" defaultValue={infouser.age||""} onChange={setinfouser}/></label>
            <label >
                 <h2 >Gender :</h2> 
                 <select name="gender"  onChange={e => setinfouser(e)} defaultValue={infouser.gender || ''}>
                    <option value="male" >Male</option>
                    <option value="female">Female</option>
                 </select>
                 </label>
            <label >
                 <h2>Localisation :</h2> 
                 <select name="wilaya" id=""  onChange={e => setinfouser(e)} defaultValue={infouser.wilaya || "oran"}>
                    <option value="">wilaya</option>
                 {wilaya.map (wilaya => <option key={wilaya.name}value={wilaya.name}  > {wilaya.name}</option>)}
                 </select>
                 </label>
            <label > <h2>N Telephone:</h2> <input name="telephone"type="text"  placeholder="Num Telephone" defaultValue={infouser.num_telephone||""} onChange={e => setinfouser(e)}/></label>
            <label > <h2>Email:</h2> <input name="email"type="text" placeholder="Email" defaultValue={infouser.email||""} onChange={e => setinfouser(e)}/></label>
            <label > <h2>Niveau d’etude :</h2> 
            <select name="niveau_etude" id=""  onChange={e => setinfouser(e)} defaultValue={infouser.niveau_detude}>
                <option value="">Niveau d’etude</option>
                {niveau.map((niveau) =>  (<option key={niveau.id} defaultValue={niveau.name}> {niveau.name}</option>))}
            </select>
            </label>
            <label > <h2>Expérience :</h2> 
            <select name="exper" id="" defaultValue={infouser.exper} onChange={e => setinfouser(e)}>
                <option value="">experience</option>
                {experiance.map((experiance) =>  (<option key={experiance.id} value={experiance.name}> {experiance.name}</option>))}
            </select>
            </label>
            <label >
            <h2>Secteur d'activite :</h2> 
            <select name="secteur_activite" id="" defaultValue={infouser.secteur_dactivite} onChange={e => setinfouser(e)}>
                <option value="">secteur d'activite</option>
                {secteur.map((secteur) =>  (<option key={secteur.id} value={secteur.name} > {secteur.name}</option>))}
            </select>
            </label>
            <div className={style.lab}>
            
            <label name="cv" className={style.button} >Ajouter mon CV
           
            <input type="file" id="cv"  onChange={(e) => handleFileChange(e,"cv")} />
            </label> 
          </div>


        </div>
        <hr/>
        <div className={style.desc}>
        
            <h2>Description</h2>
           {/* <textarea className={style.textarea} > */}
            <textarea name="description_can" id=""  className={style.textarea} placeholder="description" defaultValue={infouser.description_can} onChange={e => setinfouser(e)}></textarea>
        </div>
        <button  onClick={handleSubmit}> Sauvgarder</button>
        </div>}
      
     
        </>
    );
}