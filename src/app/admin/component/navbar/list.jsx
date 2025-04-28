import styles from "./navbar.module.css"
import Link from "next/link"
export default function list(){
    return (
        <ul className={styles.list}>
        <Link href="../admin"><li>acceuil</li></Link>
            <Link href="../admin/mesannonces/"><li >Anonnces</li></Link>
            <Link href="../admin/users/"><li >Users</li></Link>
        </ul>
        
    );
} 