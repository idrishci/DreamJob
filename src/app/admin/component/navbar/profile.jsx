
'use client'
import Image from "next/image";
import style from "./navbar.module.css"
import { useState } from 'react';
import { signOut } from "firebase/auth";
import {useRouter}from"next/navigation";
export default function Profile(){
        const [isOpen, setIsOpen] = useState(false);
        const router = useRouter();
         const signout=async()=>{  
            console.log("hhhhhh");
                 await signOut(auth);
                
                router.push("/");
              
                // setUser(null);
            }
    return (
        <div className={style.profile} onClick={()=>setIsOpen(!isOpen)}>
        <h1>Admin</h1>
        {isOpen &&<div className={style.proflist}>
      <hr />
     <li onClick={ ()=>{setIsOpen(!isOpen);signout()}}><Image src={"/icon/logout.png"} width={20} height={20}/><h4>deconected</h4></li>
</div>}
        </div>
    );
}