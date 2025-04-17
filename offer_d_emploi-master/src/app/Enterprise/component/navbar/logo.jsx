import styles from "./navbar.module.css";
import Image from "next/image";
export default function logo(){
    return (
        <div className={styles.logo}>
      <h2>DreamJob</h2>
       </div>
    );
}