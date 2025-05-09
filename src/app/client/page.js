
import Search from "./accueil/search/search";
import Annonce from "./accueil/annonce/annonce";
import Annonce2 from "./accueil/enterprise/enterprise_card";
import style from "./style.module.css"
export default function Home() {
  return (
    <section  >
       
    <Search/>
     <Annonce/>
     <Annonce2/>
     </section>
  );
}