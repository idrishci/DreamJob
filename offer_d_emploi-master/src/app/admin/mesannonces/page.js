"use client"
import style from "./page.module.css"
import Post from "./post/post_ac"
import PostAtt from "./post/post_att"
import PostR from "./post/post_r"
import { useState } from 'react';
export default function Home() {
    const [activeItem, setActiveItem] = useState("item1");

    const handleClick = (item) => {
      setActiveItem(item);
    };
  
    return (
 
          <div className={style.page}>
               <div className={style.nav}>
            <ul>
        <li onClick={() => handleClick('item1')}>Active</li>
        <li onClick={() => handleClick('item2')}>En cour de validation</li>
        <li onClick={() => handleClick('item3') }>Rejeter</li>
            </ul> 
             </div>
             <main>
             {activeItem === 'item1' && <Post/>}
        {activeItem === 'item2' && <PostAtt/>}
        {activeItem === 'item3' && <PostR/>}
              
             </main>
             
             {/* {selectedItem.type ==='enter' ? <Data />: <Edit /> } */}
        </div>
         
    
    );
  }