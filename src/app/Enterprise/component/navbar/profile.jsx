
'use client'
import Image from "next/image";
import Link from "next/link";
import style from "./navbar.module.css"
import { useState, useEffect } from 'react';
export default function profile(){
    const [isOpen, setIsOpen] = useState(false);
    return (
        
        <div className={style.profile} onClick={()=>setIsOpen(!isOpen)}>
         <h2>khene Lokmen</h2> 
         <Image width={50} height={50} src={"/image/profile.jpg"} alt="profile" className={style.img}/>  
        
        
   
       
 {isOpen &&<div className={style.proflist}>
   <Link href={"../../Enterprise/monprofile"}><li onClick={()=>setIsOpen(!isOpen)}>Mon profile</li> </Link>
      <hr />
     <li onClick={ ()=>setIsOpen(!isOpen)}>deconected</li>
</div>} </div>

    );
}