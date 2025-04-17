

"use client"
import Image from "next/image"
import style from "./navbar.module.css"
import Link from "next/link";
import { useState } from "react";
export default function button(){
      const [isOpen, setIsOpen] = useState(false);
      const [isConnected, setConnected] = useState('connected');
    //   const  rendercomponent = (type)=> {
    //      setConnected({type});
    //  }
    return (
        <div className={style.btn}>
           {isConnected=="deconnected" &&<> <button>sign up</button>
        <button>sign in</button></>}
      
     {isConnected=="connected" && 
     <div className={style.profile} onClick={() => setIsOpen(!isOpen)}>
         <h2>khene Lokmen</h2> 
         <Image width={40} height={40} src={"/image/profile.jpg"} className={style.img}/>  
    </div>
    }

    {isOpen &&<div className={style.proflist}>
       <Link href="../client/accueil/profile"> <li>Mon profile</li> </Link>
         <hr />
        <li>deconected</li>
</div>}
        </div>
    );
}