'use client'

import Style_nav from "./nabar.module.css"
import Data from "../profile/data"
import Offre from "./offre"
import { useState } from "react"
import style from "./profile.module.css"
export default function profile({id,uid}){
    const [selectedItem, setSelectedItem] = useState({type:'offre'});
    const  rendercomponent = (type)=> {
       setSelectedItem({type});
   }
    return (
        <div className={style.profile}>
               <div className={Style_nav.nav}>
            <ul>
            <li onClick={()=>rendercomponent('enter') } style={{ color: selectedItem.type === 'enter' ? 'var(--buttoncolor)' : 'black' }}>Enterprise</li>
        <li onClick={()=>rendercomponent('offre')} style={{ color: selectedItem.type === 'offre' ? 'var(--buttoncolor)' : 'black' }}>Offres d'emploi</li>
      
            </ul> 
             </div>
             {selectedItem.type ==='offre' ? <Offre id={id}  />:<Data id={uid} />  }
        </div>
    );
}
