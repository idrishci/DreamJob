'use client'
import style from "./table.module.css";
import { useEffect,useState } from "react";
import { getenterprise } from "../server/offre";
export default function Enterprise(){
 
    const [enterprise,setenterprise]=useState([]);


    const fetchdata=async()=>{
 
      const enter=await getenterprise();
     setenterprise(enter);
    
  };
                 useEffect(()=>{
                  
                     fetchdata();
                     console.log(enterprise)
                 },[]);
    return(
    <div className={style.table}>
        <table>
            <thead>
                <tr>
                    <td>id</td>
                    <td>Nom d'enterprise</td>
                    <td>Localisation</td>
                    <td>Secteur d'activite</td>
                    <td>Email</td>
                    <td>Numero telephone</td>
                </tr>
            </thead>
            <tbody>
                {enterprise? enterprise.map((entr)=>{return(

                
                <tr>
                <td>{entr.uid_firebase}</td>
                    <td>{entr.nom}</td>
                    <td>{entr.localisation}</td>
                    <td>{entr.secteur_dactivite}</td>
                    <td>{entr.email}</td>
                    <td>{entr.num_telephone}</td>  
                </tr>
                );})
            :<></>}
            </tbody>
        </table>
    </div>
    );
    }