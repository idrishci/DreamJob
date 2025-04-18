'use client'
import style from "./offre.module.css"
import Offre from "./offre"
import Person from "./person"
import { useState,useEffect } from "react";
import { useRouter } from 'next/navigation';
export default function Home(){
    const router = useRouter();
    const [id, setId] = useState(null);
  
      
        useEffect(() => {
            const urlParams = new URLSearchParams(window.location.search);
            const idFromUrl = urlParams.get("id");
            setId(idFromUrl);
            console.log("ID from page:", idFromUrl);
          }, []);
    return (
        <div className={style.home}>
<Offre id={id}/>
<h1>person</h1>
<Person id={id}/>
        </div>
    );
}