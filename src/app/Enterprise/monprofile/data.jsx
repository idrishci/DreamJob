'use client'
import style from "./profile.module.css"
import Photo from "./photo"
import {getEnterprise} from "../server/enterprise.js"
import { useState,useEffect } from "react"; 
export default function data({id}){
    const [enterprises,setEnterprises]=useState('');
    useEffect(()=>{
        const fetchdata=async()=>{

            const data=await getEnterprise(id);

           
            setEnterprises(data ? data[0] : []);
        }
        fetchdata();
    }
    ,[]);
    useEffect(() => {
        console.log("Updated enterprise state of card:", enterprises);
      }, [enterprises]);
     

    return (
        <>
        { enterprises &&
      <div className={style.data}>
<Photo 
    logo={enterprises.pathprofile ? enterprises.pathprofile : ""}
    cover={enterprises.pathcover ?enterprises.pathcover :""}
    email={enterprises.email ? enterprises.email :""}
    linkedin={enterprises.linkedin ?enterprises.linkedin:""}
    siteweb={enterprises.siteweb? enterprises.siteweb : "" }


/>


<>

<h1>Nom d'enterprise :</h1>
<p>{enterprises.nom}</p>
{/* //////////// */}
<h1> Numero Telephone :</h1>
<p>{enterprises.num_telephone}</p>
<h1>Secteur :</h1>
<p>{enterprises.secteur_dactivite}</p>
{/* //////////// */}
<h1>Nomber d’employés :</h1>
<p>{enterprises.nombre_demployer}</p>
{/* //////////// */}
<h1>Siège social :</h1>
<p>{enterprises.localisation}</p>

<h1>Description :</h1>
            <p>{enterprises.desecription}</p>

</>

        </div>
}
        </>
    );
}
