"use client";
import styles from "./style.module.css";
import {app,auth,db, createUserWithEmailAndPassword,initializeFirestore }from "../firebase";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import{ onAuthStateChanged,}from"firebase/auth";
import {useFetchStreams } from "firebase/firestore";

export default function RolePage(){
    const [role, setRole] = useState(null);
    const [userr, setUser] = useState();
   
    //  const db = initializeFirestore(app, {
    //   experimentalForceLongPolling: true,
    //   useFetchStreams: false,
    // })

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, proceed with storage access
        console.log("User is signed in",user.uid);
        setDoc(doc(db, "users", user.uid, {
          email:"idris@Gmailerrorred.com",
          role: role,
        }));
        setUser(user);

      } else {
        // User is not signed in, redirect to login
        console.log("User is not signed in");
      }
    });

    const addUserRole = async (userId, role) => {
      // if (!user) {
      //   console.error("❌ User must be signed in to store role.");
      //   return;
      // }
      console.log("🚀 Adding role to user:", userId);
      try {
        await setDoc(doc(db, "users", userId), {
          email:"idris@Gmailerrorred.com",
          role: role,
        });
        console.log("Role stored successfully!");
      } catch (error) {
        console.error("Error storing role:", error);
      }
    };
    
    // addUserRole("userr.uid", "admin");

    const handleSelectRole = async() => {
        
        
        console.log("11111");
        const authdata=JSON.parse(sessionStorage.getItem("authdata"));
        // const userCredential= await createUserWithEmailAndPassword(auth, "local@gmail.com","12345678");
           console.log("2222");
            const userDocRef =  doc(db, 'users', "id123"); // Reference to the user document
        // await setDoc(userDocRef, {
        //   email: "local3@gmail.com",
        //   role: "candidat", 
        // });
        // const docRef =
         await addDoc(collection(db, "users1"), {
          first: "Alan",
          middle: "Mathison",
          last: "Turing",
          born: 1912
        });
      
        console.log("Document written with ID: ", docRef.id);
      // console.log("le id de l'utilisateur est:",idd.id);
        console.log("333333");
      }

      const handleContinue = () => {
      if (role) {
        router.push(`/signup?role=${role}`);
      }
    };
  
  
  
    return(
        <div className={styles.container}>
        <h1 className={styles.title}>Join as a Freelancer or Client</h1>
        <div className={styles.cardGrid}>
          <div  
            onClick={(event) => {event.preventDefault();
              // testFirestore() ;
              handleSelectRole();
                            // setRole('candidat');
            }}
            className={`${styles.card} `}
            
         >
            <h2 className={styles.cardTitle}>I’m a candidat</h2>
            <p className={styles.cardText}>Find work, showcase your skills, and grow your career.</p>
          </div>
          <div 
            onClick={() => {
              // handleSelectRole();
              setRole('enterprise');
            }}
            className={`${styles.card}`
            }
          >
            <h2 className={styles.cardTitle}>I’m a enterprise</h2>
            <p className={styles.cardText}>Hire talent, manage projects, and scale your business.</p>
          </div>
        </div>
      </div>
    // 
        
    );
  }
