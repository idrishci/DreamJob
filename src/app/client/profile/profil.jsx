'use client'
import Nav from "../component/navbar/navbar"

import Style_nav from "./nabar.module.css"

import Data from "./data"
import Offre from "./offre"
import { useState } from "react"
import style from "./profile.module.css"


export default function profile({id}){

    const [selectedItem, setSelectedItem] = useState({type:'enter'});
    const  rendercomponent = (type)=> {
       setSelectedItem({type});
   }
    return (
        <div className={style.profile}>
               <div className={Style_nav.nav}>
            <ul>
        <li onClick={()=>rendercomponent('enter') }>Enterprise</li>
        <li onClick={()=>rendercomponent('offre')}>Offres d'emploi</li>
            </ul> 
             </div>
             { selectedItem.type ==='enter' ?  <Data id={id}/>:<Offre  id={id}/>  }

        </div>
    );
}
