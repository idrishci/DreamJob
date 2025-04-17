import Link from "next/link";
import style from "./nabar.module.css"
export default function nav(){
    return (
        <div className={style.nav}>
            <ul>
        <Link href={""}><li>Enterprise</li></Link>
        <Link href={""}><li>Offres d'emploi</li></Link>
      
            </ul>
        </div>
    );
}