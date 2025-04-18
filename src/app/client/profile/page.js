"use client";
import style from "./profile.module.css"

import Profil from "./profil"
import{useState,useEffect} from "react"
import { useRouter } from 'next/navigation';
export default function Page(){



    const router = useRouter();
    const [id, setId] = useState(null);

      
        useEffect(() => {
            const urlParams = new URLSearchParams(window.location.search);
            const idFromUrl = urlParams.get("id");
            setId(idFromUrl);
            console.log("ID from page:", idFromUrl);
          }, []);
    return (
        <div className={style.prof_entr}>

        
        <Profil id={id}/>




       
        
        </div>
    );
}
