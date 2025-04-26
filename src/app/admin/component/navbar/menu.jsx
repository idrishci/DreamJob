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
           height={40}
           alt="menu"  />
    </div>
    {isOpen && <div className={style.menulist}>
    <Link href="../admin"><li>acceuil</li></Link>
    <Link href="../admin/mesannonces/"><li >Anonnces</li></Link>
    <Link href="../admin/users/"><li >Users</li></Link>
        </div>
        }
    </>
    );
}