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
           width={35}
           height={30}

           alt="menu"  />
    </div>
    {isOpen && <div className={style.menulist}>
    <Link href="../"><li>Accueil</li></Link>
            <Link href="/client/offre"><li >Offre d_emploi</li></Link>
            <Link href="../../client/enterprise"><li >Enterprise</li></Link>
        </div>
        }
    </>
    );
}
