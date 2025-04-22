import styles from "./navbar.module.css"
import Link from "next/link"
export default function list(){
    return (
        <ul className={styles.list}>
        <Link href="../Enterprise"><li>Acceuil</li></Link>
            <Link href="../Enterprise/mesannonces/"><li >Mes post</li></Link>
            <Link href="../Enterprise/Candidat/"><li >Candidat</li></Link>
        </ul>
        
    );
} 