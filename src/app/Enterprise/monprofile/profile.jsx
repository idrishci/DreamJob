'use client'
// import Nav from "../component/navbar/navbar"
import Style_nav from "./nabar.module.css"
import Data from "./data"
import Person from "./person"
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
        <li onClick={()=>rendercomponent('enter') } style={{ color: selectedItem.type === 'enter' ? 'var(--buttoncolor)' : 'black' }}>Mon profile</li>
        <li onClick={()=>rendercomponent('edit')}style={{ color: selectedItem.type === 'edit' ? 'var(--buttoncolor)' : 'black' }}>Edit</li>
        <li onClick={()=>rendercomponent('fav')}style={{ color: selectedItem.type === 'fav' ? 'var(--buttoncolor)' : 'black' }}>Favorit</li>
            </ul> 
             </div>
             {selectedItem.type ==='enter' && <Data id={id}/>  }
             {selectedItem.type==='edit' &&<Edit id={id} />}
             {selectedItem.type==='fav' &&<Person identer={id} />}
        </div>
    );
}
