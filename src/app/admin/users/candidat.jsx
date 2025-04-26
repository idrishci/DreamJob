import style from "./table.module.css"
import { useState,useEffect } from "react";
import { getcandidat } from "../server/offre";
export default function candidat(){
          const [candidat,setcandidat]=useState([]);

          const fetchdata=async()=>{
            const data=await getcandidat();
           setcandidat(data)
        };
                       useEffect(()=>{
                        
                           fetchdata();
                       },[]);
return(
<div className={style.table}>
    <table>
        <thead>
            <tr>
                <td>id</td>
                <td>nom</td>
                <td>prenom</td>
                <td>email</td>
                <td>numero telephone</td>
                <td>cv</td>
            </tr>
        </thead>
        <tbody>
            {candidat.map((can)=>{return(

     
            <tr>
                <td>{can.uid_firebase}</td>
                <td>{can.nom}</td>
                <td>{can.prenom}</td>
                <td>{can.email}</td>
                <td>{can.num_telephone}</td>
                <td><a href={`/file/${can.cv}`} target="blanc">cv</a></td>  
            </tr>
                   );})}
        </tbody>
    </table>
</div>
);
}