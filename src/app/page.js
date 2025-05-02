
import Search from "./client/accueil/search/search";
import Annonce from "./client/accueil/annonce/annonce";
import Annonce2 from "./client/accueil/enterprise/enterprise_card";
import Image from "next/image";
import styles from "./page.module.css";
export default function Home() {
  return (
    <section >
       
    <Search/>
     <Annonce/>
     <Annonce2/>
     </section>
  );
}