

import Image from "next/image";
import style from "./navbar.module.css"
export default function profile(){
    return (
        <div className={style.profile}>
        <h1>Sonatrach</h1>
        <div className={style.logo_profile}><Image src={"/image/sonatrach.png"} width={40} height={40} /></div>
        
        </div>
    );
}