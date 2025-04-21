'use client'
import style from "./form.module.css"
import Form from "./formulair"
import { useRouter } from 'next/navigation';
import { useState,useEffect } from "react";
export default function Home(){
    const router = useRouter();
      const [id, setId] = useState(null);
  
        
          useEffect(() => {
              const urlParams = new URLSearchParams(window.location.search);
              const idFromUrl = urlParams.get("id");
              setId(idFromUrl);
              console.log("ID from page:", idFromUrl);
            }, []);
  return(
<div  className={style.home}>
<Form id={id}/>

</div>
  );
}