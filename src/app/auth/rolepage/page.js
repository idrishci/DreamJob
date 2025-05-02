"use client";
import styles from "./style.module.css";
import { userAgent } from "next/server";
import {addDoc,db,auth,collection, createUserWithEmailAndPassword}from "../firebase";
import {getFirestore,doc,setDoc}from "firebase/firestore";
import { ClassNames } from "@emotion/react";
import { Sync } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { postiduser } from "../../services/userserv";
export default function Rolepage(){
  const router =useRouter();
  const [isConnected,setConnected]=useState('connected');
  const [loading,setLoading]=useState(true);
  const [userr, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async(user) => {
            if (user) {
              await setUser(user);
                console.log("is steel connected");
                setConnected("connected");
            } else {
                setConnected("deconnected");
                alert("Vous n'avez pas l'accès");
                router.push("/auth/signin");
            }
            setLoading(false);
        })
        return ()=>unsubscribe();
    },[]);

    const handleSelectRole = async(selectedRole) => {
          if (userr) {
       
            if (selectedRole === "client") {
              await setDoc(doc(db, "users",userr.uid), {
                email: userr.email,
                role: selectedRole,
                createdAt: new Date(),
              });
              
              postiduser(userr.uid,userr.email,selectedRole);
              router.push("/");
            }
            else if (selectedRole === "enterprise") {
              await setDoc(doc(db, "users", userr.uid), {
                email: userr.email,
                role: selectedRole,
                createdAt: new Date(),
              });
              postiduser(userr.uid,userr.email,selectedRole);
              router.push("/Enterprise");
            }
            console.log("conn")
            setConnected("connected");
          } else {
            console.log("No user is signed in.");
            return null;
          }  
     }
 
    return(
      <>
        {isConnected=="connected"&&<>
        <div className={styles.container}>
        <h1 className={styles.title}>Rejoignez-nous en tant qu Entreprise ou Candidat</h1>
        <div className={styles.cardGrid}>
          <div  
            className={`${styles.card} `}
         >
            <h2 className={styles.cardTitle}>Candidat</h2>
            <p className={styles.cardText}>Trouvez du travail, mettez en valeur vos compétences et développez votre carrière.</p>
            <button className={styles.cardButton} onClick={()=>{handleSelectRole("client")}}> continuer </button>
          </div>
          <div 
            className={`${styles.card}`}>
           
            <h2 className={styles.cardTitle}>Entreprise</h2>
            <p className={styles.cardText}>Recrutez des talents, gérez des projets et développez votre entreprise.</p>
            <button className={styles.cardButton} onClick={()=>{handleSelectRole("enterprise")}}> continuer </button>
          </div>
        </div>
      </div>
   
    </>} </> 
    );
} 