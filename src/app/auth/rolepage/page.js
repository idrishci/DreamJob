"use client";
import styles from "./style.module.css";
import { userAgent } from "next/server";
import {addDoc ,db,auth,getDoc}from "../firebase";
import {getFirestore,doc,setDoc}from "firebase/firestore";
import { ClassNames } from "@emotion/react";
import { Sync } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { postiduser } from "../../services/userserv";
export default function Rolepage(){
  const router =useRouter();
  const [isConnected,setConnected]=useState(null);
  const [loading,setLoading]=useState(true);
  const [userr, setUser] = useState(null);
  // const [role,setRole]=useState(null);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        alert("Vous n'avez pas l'accès");
        router.push("/auth/signin");
        return;
      }

      setUser(user);
      const userDocRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userDocRef);
      const lerole = docSnap.data()?.role || "";

      // ✅ Redirect immediately if role is already set
      if (lerole === "admin") {
        router.push("/admin");
        return;
      } else if (lerole === "client") {
        router.push("/");
        return;
      } else if (lerole === "enterprise") {
        router.push("/Enterprise");
        return;
      }

      setLoading(false);  // no role found, so show the role selection UI
    });

    return () => unsubscribe();
  }, [router]);

    const handleSelectRole = async(selectedRole) => {
          if (userr) {
       
            if (selectedRole === "client") {
              await setDoc(doc(db, "users",userr.uid), {
                email: userr.email,
                role: selectedRole,
                createdAt: new Date(),
              });
              
              // postiduser(userr.uid,userr.email,selectedRole);
              router.push(`/auth/formulaire?role=candidat&id=${userr.uid}`);

            }
            else if (selectedRole === "enterprise") {
              await setDoc(doc(db, "users", userr.uid), {
                email: userr.email,
                role: selectedRole,
                createdAt: new Date(),
              });
              // postiduser(userr.uid,userr.email,selectedRole);
              router.push(`/auth/formulaire?role=${"entreprise"}&id=${userr.uid}`);
              
            }
            console.log("conn")
            setConnected("connected");
          } else {
            console.log("No user is signed in.");
            return null;
          }  
     }
     if (loading) return <p>Loading...</p>;
    //  if (isConnected === "deconnected") return null;
    return(

        
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
   
    
    );
} 