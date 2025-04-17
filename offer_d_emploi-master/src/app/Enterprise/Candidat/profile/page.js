"use client"
import style from "./profile.module.css"
import Profile from "./profil"
import Edit from "./edit"
import Style_nav from "./nabar.module.css"
import { useState } from "react"
<<<<<<< HEAD
export default function Page(){
=======
export default function page(){
>>>>>>> 357c77b0a493bed13f73fe5a626f93dd9dbbfbb7
        const [selectedItem, setSelectedItem] = useState({type:'enter'});
        const  rendercomponent = (type)=> {
           setSelectedItem({type});
       }
    return (
<div className={style.page}>
<div className={Style_nav.nav}>
            <ul>
        <li onClick={()=>rendercomponent('enter') }>Mon profile</li>
        <li onClick={()=>rendercomponent('offre')}>Edit</li>
            </ul> 
             </div>
              <Profile/>
<<<<<<< HEAD
              <Profile/>
=======
>>>>>>> 357c77b0a493bed13f73fe5a626f93dd9dbbfbb7

</div>    );

}