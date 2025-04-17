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
     <Image src={"/icon/menu.png"}
           key={1}
           width={50}
           height={40}
           alt="menu"  />
    </div>
    {isOpen && <div className={style.menulist}>
    <Link href="../Enterprise"><li>Mon profile</li></Link>
            <Link href="../Enterprise/mesannonces/"><li >Mes post</li></Link>
            <Link href="../Enterprise/Candidat/"><li >Candidat</li></Link>
        </div>
        }
    </>
    );
}