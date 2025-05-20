'use client'
import style from "./offre.module.css"
import Offre from "./offre"
import Person from "./person"
import { useState,useEffect } from "react";
import { useRouter } from 'next/navigation';import { onAuthStateChanged } from 'firebase/auth';
import {getDoc }from"firebase/firestore";
import{ db,doc,auth} from "@/app/auth/firebase";


export default function Home(){
    const router = useRouter();
    const [id, setId] = useState(null);
useEffect(() => {
            const urlParams = new URLSearchParams(window.location.search);
            const idFromUrl = urlParams.get("id");
            setId(idFromUrl);
            console.log("ID from page:", idFromUrl);
          }, []);
          const [isConnected,setConnected]=useState('connected');
          const [loading,setLoading]=useState(true);
          const [iduser,setiduser]=useState(null);
           useEffect(() => {
               const unsubscribe = onAuthStateChanged(auth, async(user) => {
                   if (user) {
                       console.log("is steel connected");
                       setConnected("connected");
                       setiduser(user.uid);
                   } else {
                       setConnected("deconnected");
                       router.replace("/auth/signin");
                       alert("Vous n'avez pas l'accès");
                   }
                   setLoading(false);
               })
               return ()=>unsubscribe();
           },[]);
        
           if (loading) {
            return <div>Loading...</div>; // or a spinner/loading component
        }
        if (isConnected !== "connected") {
            return null; // prevent rendering anything while redirecting
        }
    return (
<>{isConnected&&
<div className={style.home}>
<Offre id={id}/>
<h1>Candidatures reçues</h1>
<Person id={id}/>
        </div>}</>

    );
}