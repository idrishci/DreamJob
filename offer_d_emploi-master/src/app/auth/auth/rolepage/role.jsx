"use server";
import styles from "./style.module.css";
import {app,auth, createUserWithEmailAndPassword}from "../firebase";
import {getFirestore,doc,setDoc, collection, addDoc}from "firebase/firestore";

import { initializeFirestore,} from "firebase/firestore";
import {useFetchStreams } from "firebase/firestore";
import { cookies } from "next/headers";
const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
    useFetchStreams: false,
  })
const testFirestore = async () => {
    try {
      const userDocRef =  collection(db, 'use'); 
      const userId= cookies().get("userId").value;
      const userRef=doc(db, 'use', userId);
      const docRef = await addDoc(userDocRef, {
        testField: "Hello, Firestore!",
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document to Firestore:", error);
    }
  };
  export {testFirestore };