import styles from "./navbar.module.css"
import Link from "next/link"
export default function list(){
    return (
        <ul className={styles.list}>
        <Link href="../admin"><li>accueil</li></Link>
            <Link href="../admin/mesannonces/"><li >Les offres</li></Link>
            <Link href="../admin/users/"><li >Les utilisateurs</li></Link>
        </ul>
        
    );
} 