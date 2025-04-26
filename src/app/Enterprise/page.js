'use client'
import style from "./page.module.css"
import Acceuil from "./acceuil/acceuil"
import Stat from "./acceuil/statistique"
import { onAuthStateChanged } from 'firebase/auth';
import {getDoc }from"firebase/firestore";
import{ db,doc,auth} from "@/app/auth/firebase";
import { useState ,useEffect} from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [isConnected,setConnected]=useState('connected');
  const [loading,setLoading]=useState(true);
  const [iduser,setiduser]=useState(null);
  const router = useRouter();
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
  ////enterprise id

  return ( 
  <>
  {loading? <div>Loading...</div>: ''}
    {isConnected &&
    <section className={style.home} >
      <Acceuil id={iduser} />
       <Stat id={iduser}/>
     </section>}
     </>
  );
}
