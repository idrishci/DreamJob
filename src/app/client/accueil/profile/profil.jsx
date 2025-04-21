import Image from "next/image"
import style from "./profile.module.css";
import { onAuthStateChanged } from 'firebase/auth';
import {getDoc }from"firebase/firestore";
import{ db,doc,auth } from "@/app/auth/firebase";
import {getinfouser}from"@/app/services/userserv";
import { useState ,useEffect} from "react";
export default function profile(){
const [userr,setUser]=useState([]);
useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async(user) => {
            if (user) {
                console.log("id of user ", user);
                const docref = doc(db, "users", user.uid);
                 const document=await getDoc(docref);
                 const res=await getinfouser(user.uid,"client");
                 await setUser(res);
            } else {
              console.log("no user is connected");
            }
        })
        return ()=>unsubscribe();
    },[]);

    return(<>{userr.map((usere)=>(
    <div className={style.profile}>
        <Image width={150} height={150} alt="photo" src={"/image/profile.jpg"} className={style.img}/>
        <div className={style.data}>
            <label > <h2>Nom :</h2> <h3>{usere.nom}</h3></label>
            <label > <h2>Prenom :</h2> <h3>{usere.prenom}</h3></label>
            <label > <h2>Age :</h2> <h3>{usere.age}</h3></label>
            <label > <h2>Gender :</h2> <h3>{usere.gender}</h3></label>
            <label > <h2>Localisation :</h2> <h3>{usere.wilaya}</h3></label>
            <label > <h2>N Telephone:</h2> <h3>+213{usere.num_telephone}</h3></label>
            <label > <h2>Email :</h2> <h3>{usere.email}</h3></label>
            <label > <h2>Niveau d’etude :</h2> <h3>{usere.niveau_detude}</h3></label>
            <label > <h2>Secteur d'activité :</h2> <h3>{usere.secteur_dactivite}</h3></label>
            <label > <h3>Mon cv</h3></label>

        </div>
        
        <hr/>
        <div className={style.desc}>
        <label >
            <h2>Description</h2>
            <p>{usere.sujet} </p>
        </label>
        </div>
    </div>
    ))}
    </>
);
}