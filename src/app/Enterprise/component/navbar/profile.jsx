
'use client'
import Image from "next/image";
import Link from "next/link";
import style from "./navbar.module.css"
import { useState, useEffect } from 'react';
import { signOut } from "firebase/auth";
import { auth } from "@/app/auth/firebase";
import { onAuthStateChanged } from 'firebase/auth';
import {getDoc }from"firebase/firestore";
import{ db,doc} from "@/app/auth/firebase";
import {useRouter}from"next/navigation";
import {getEnterprise}from"../../server/enterprise";
export default function profile(){
    const [isOpen, setIsOpen] = useState(false);
    const [isConnected, setConnected] = useState('connected');
    const [userr, setUserr] = useState([]);
    const router = useRouter();
    const signout=async()=>{  
        await await signOut(auth);
        router.push("/auth/signin")
      
        // setUser(null);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async(user) => {
            if (user) {
                console.log("id of user ", user);
                setConnected("connected");
                const docref = doc(db, "enterprise", user.uid);
                console.log(docref)
                //  const document=await getDoc(docref);
          
                 
                 const res=await getEnterprise(user.uid);
                 setUserr(res);
              
              
            } else {
              console.log("no user is connected");
                setUserr(null);
                setConnected("deconnected");
            }
        })
        return ()=>unsubscribe();
    },[]);
    useEffect(() => {
        console.log("this", userr);
      }, [userr]);
    return (
        
        <div className={style.profile} onClick={()=>setIsOpen(!isOpen)}>
            {isConnected &&<>
                {userr &&userr[0]&& userr[0].nom ? (
  <h2>{userr[0].nom}</h2>
) : (
  <h2>undifiened</h2>
)}
                {userr && userr[0] && userr[0].photo_profile ? (
  <Image width={50} height={50} src={`/image/${userr[0].photo_profile}`} alt="profile" className={style.img}/> 

) : (
    <Image width={50} height={50} src={`/icon/account.png`} alt="profile" className={style.img}/> 
)}       
         
         </>}  
        
        
   
       
 {isOpen &&<div className={style.proflist}>
   <Link href={"../../Enterprise/monprofile"}><li onClick={()=>setIsOpen(!isOpen)}><Image src={"/icon/account.png"} width={20} height={20} /><h4>Mon profile</h4></li> </Link>
      <hr />
     <li onClick={ ()=>{setIsOpen(!isOpen);signout()}}><Image src={"/icon/logout.png"} width={20} height={20}/><h4>deconected</h4></li>
</div>} </div>

    );
}