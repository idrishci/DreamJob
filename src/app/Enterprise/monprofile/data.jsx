'use client'
import style from "./profile.module.css"
import Photo from "./photo"
import {getEnterprise} from "../server/enterprise.js"
import { useState,useEffect } from "react"; 
export default function Data({id}){
    const [enterprises,setEnterprises]=useState('');
         const [loading, setLoading] = useState(true);

     
    useEffect(()=>{
        const fetchdata=async()=>{
            console.log("this id "+id)
            const data=await getEnterprise(id);
            console.log("this enterprise "+data[0])
            setEnterprises(data[0]) ;
            setLoading(false);
        }
        fetchdata();
    }
    ,[]);
    useEffect(() => {
        console.log("this enterprise"+enterprises)
      }, [enterprises]);
     

    return (
        <>
        { loading?<h4>chargement .....</h4>:
      enterprises &&<div className={style.data}>
<Photo 
    logo={enterprises.photo_profile ? enterprises.photo_profile : "account.png"}
    cover={enterprises.pathcover ?enterprises.pathcover :""}
    email={enterprises.email ? enterprises.email :""}
    linkedin={enterprises.linkedin ?enterprises.linkedin:""}
    siteweb={enterprises.siteweb? enterprises.siteweb : "" }


/>


<>

<h1>Nom d'entreprise :</h1>
<p>{enterprises.nom}</p>
{/* //////////// */}
<h1> Numero Telephone :</h1>
<p>{enterprises.num_telephone}</p>
<h1>Secteur d'activite:</h1>
<p>{enterprises.secteur_dactivite}</p>
{/* //////////// */}
<h1>Nombre d’employés :</h1>
<p>{enterprises.nombre_demployer}</p>
{/* //////////// */}
<h1>Siège social :</h1>
<p>{enterprises.localisation}</p>

<h1>Description :</h1>
            <p>{enterprises.description_enter}</p>

</>

        </div>
}
        </>
    );
}
