
'use client'

import style from "./profile.module.css"
import Profile from "./profil"
import Edit from "./edit"
import Demende from "./demende"
import Style_nav from "./nabar.module.css"

import { useState } from "react";
export default function Page(){
        const [selectedItem, setSelectedItem] = useState({type:'profile'});
        const  rendercomponent = (type)=> {
        setSelectedItem({type});
       }
    return (
<div className={style.page}>
<div className={Style_nav.nav}>
            <ul>
        <li onClick={()=>rendercomponent('profile') }>Mon profile</li>
        <li onClick={()=>rendercomponent('edit')}>Edit</li>

        <li onClick={()=>rendercomponent('demende')}> Demende demploi</li>

            </ul> 
             </div>
               {selectedItem.type ==='profile' && <Profile/> }
               {selectedItem.type ==='edit' && <Edit /> }
               {selectedItem.type ==='demende' && <Demende /> }

</div>    );

}