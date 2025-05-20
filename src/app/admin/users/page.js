"use client"
import style from "./page.module.css"
import Candidat from "./candidat"
import Enterprise from "./enterprise"
import { useState ,useEffect} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {getDoc }from"firebase/firestore";
import{ db,doc,auth} from "@/app/auth/firebase";
import { useRouter } from "next/navigation";
export default function Home() {
    const [activeItem, setActiveItem] = useState("item1");

    const handleClick = (item) => {
      setActiveItem(item);
    };
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
    return <div> en cours de chargement...</div>; // or a spinner/loading component
}
if (isConnected !== "connected") {
    return null; // prevent rendering anything while redirecting
}
  
    return (
 
    <>{isConnected  &&      <div className={style.page}>
               <div className={style.nav}>
            <ul>
        <li onClick={() => handleClick('item1')} style={{ color: activeItem === 'item1' ? 'var(--buttoncolor)' : 'black' }}>candidat</li>
        <li onClick={() => handleClick('item2') }  style={{ color: activeItem === 'item2' ? 'var(--buttoncolor)' : 'black' }}>entreprise</li>
            </ul> 
             </div>
             <main>
             {activeItem === 'item1' && <Candidat/>}
             {activeItem === 'item2' && <Enterprise/>}

              
             </main>
             
             {/* {selectedItem.type ==='enter' ? <Data />: <Edit /> } */}
        </div>
         }</>
    
    );
  }