import styles from "./navbar.module.css"
import Link from "next/link"
export default function list(){
    return (
        <ul className={styles.list}>
        <Link href="/"><li>Accueil</li></Link>
            <Link href="/client/offre"><li >Offre d'emploi</li></Link>
            <Link href="/client/enterprise"><li >Entreprise</li></Link>



        </ul>
        
    );
} 