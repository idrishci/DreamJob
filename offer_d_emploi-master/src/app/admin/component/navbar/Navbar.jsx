
// import  "./navbar.css"
import styles from "./navbar.module.css";
import Logo from "./logo"
import Profile from "./profile"
import List from "./list"
import Menu from "./menu"
import Link from "next/link"
export default function page(){
    return (
        <div className={styles.navb}>
          <Menu/>
        <Logo/>
        <List/>
      
        <Profile />
        
        </div>
    );
}