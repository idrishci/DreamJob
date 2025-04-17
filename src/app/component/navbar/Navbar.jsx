
// import  "./navbar.css"
import styles from "./navbar.module.css";
import Logo from "./logo"
import Button from "./button"
import List from "./list"
import Menu from "./menu"
import Link from "next/link"
import Profile from "./profile"
export default function page(){
    return (
        <div className={styles.navb}>
         <Menu/>
        <Link href="/"> <Logo/></Link>
        <List/>
  
        <Button/>
        
        
        </div>
    );
}