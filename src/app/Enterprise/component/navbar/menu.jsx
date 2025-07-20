"use client"
import style from "./navbar.module.css"
import Image from "next/image";
import List from "./list"
import Link from "next/link"
   import { useState } from "react";
export default function menu() {
  const [isOpen, setIsOpen] = useState(false);

 return (
    <>
 <div className={style.menu} onClick={() => setIsOpen(!isOpen)}>
     <Image src={"/icon/hamburger.png"}
           key={1}
           width={40}
           height={35}
           alt="menu"  />
    </div>
    {isOpen && <div className={style.menulist}>
    <Link href="../Enterprise"><li onClick={() => setIsOpen(!isOpen)}>accueil</li></Link>
            <Link href="../Enterprise/mesannonces/"><li onClick={() => setIsOpen(!isOpen)}>Mes offres</li></Link>
            <Link href="../Enterprise/Candidat/"><li onClick={() => setIsOpen(!isOpen)}>Candidats</li></Link>
        </div>
        }
    </>
    );
}