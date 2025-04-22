'use client'
// import Nav from "../component/navbar/navbar"
import Style_nav from "./nabar.module.css"
import Data from "./data"
import Edit from "./edit"
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
        <li onClick={()=>rendercomponent('enter') }>Mon profile</li>
        <li onClick={()=>rendercomponent('edit')}>Edit</li>
            </ul> 
             </div>
             {selectedItem.type ==='enter' ? <Data id={id}/> :<Edit id={id} /> }
        </div>
    );
}
