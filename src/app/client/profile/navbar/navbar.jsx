import Link from "next/link";
import style from "./nabar.module.css"

export default function nav(){
    return (
        <div className={style.nav}>
            <ul>
        <li >Enterprise</li>
        <li >Offres d'emploi</li>
      
            </ul>
        </div>
    );
}