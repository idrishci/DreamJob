'use client'
import Formentre from "./formEntre"
import Formcan from "./formCan"
import style from "./page.module.css"
import { useState,useEffect} from "react";
import { useSearchParams} from "next/navigation";
export default function Page(){
    // const [user,setuser]=useState(null);
    // const [iduser,setiduser]=useState(null);
    // useEffect(()=>{
        // const featchdata=async()=>{
            const searchParams = useSearchParams();
            const iduser = searchParams.get("id");
            // setiduser(id);
            const user = searchParams.get("role");
            // setuser(role);
            console.log("role "+user);
            console.log("id "+iduser);

    //     }
    //     featchdata();
    // },[])
  
    return (
        <main className={style.page}>
{user==="entreprise" && <Formentre id={iduser} />}                    
{user==="candidat" && <Formcan id={iduser} />}  
        </main>
    );
}