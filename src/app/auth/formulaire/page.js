'use client'
import Formentre from "./formEntre"
import Formcan from "./formCan"
import style from "./page.module.css"
import { useState} from "react";
export default function Page(){
    const [user,setuser]=useState('candidat');
    const iduser="hhh"
    return (
        <main className={style.page}>
{user==="entreprise" && <Formentre id={iduser} />}                    
{user==="candidat" && <Formcan id={iduser} />}  
        </main>
    );
}