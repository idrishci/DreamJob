import styles from "./navbar.module.css"
import Link from "next/link"
export default function list(){
    return (
        <ul className={styles.list}>
        <Link href="../Enterprise"><li>Accueil</li></Link>
            <Link href="../Enterprise/mesannonces/"><li >Mes offres</li></Link>
            <Link href="../Enterprise/Candidat/"><li >Candidats</li></Link>
        </ul>
        
    );
} 