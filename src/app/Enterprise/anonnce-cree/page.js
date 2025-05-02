'use client'
import style from "./form.module.css"
import Form from "./formulair"
import { useRouter } from 'next/navigation';
import { useState,useEffect } from "react";import { onAuthStateChanged } from 'firebase/auth';
import {getDoc }from"firebase/firestore";
import{ db,doc,auth} from "@/app/auth/firebase";

export default function Home(){
  const [isConnected,setConnected]=useState('connected');
  const [loading,setLoading]=useState(true);
  const [iduser,setiduser]=useState(null);
  const router = useRouter();
  const [id, setId] = useState(null);
  const [role,setRole]=useState(null);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const idFromUrl = urlParams.get("id");
    setId(idFromUrl);
    console.log("ID from page:", idFromUrl);
  }, []);
   useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, async(user) => {
           if (user) {
               console.log("is steel connected");
               setConnected("connected");
               setiduser(user.uid);
               const userDocRef = doc(db, "users", user.uid);
               const documentt = await getDoc(userDocRef);
               const lerole = documentt.data().role;
               setRole(lerole);
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
// if (isConnected !== "connected") {
//     return null; // prevent rendering anything while redirecting
// }

       
    
          
           
  return(
<>
{(isConnected=="connected" && role==="enterprise")? (  
<div  className={style.home}>
<Form id={id}/>
</div>
):(<>
  {  router.push("/")}
  { alert("Vous n'avez pas l'accès")}
</>
)}
</>
  );
}