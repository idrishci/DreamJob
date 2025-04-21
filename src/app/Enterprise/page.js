
import style from "./page.module.css"
import Acceuil from "./acceuil/acceuil"
import Stat from "./acceuil/statistique"

export default function Home() {
const id=1;
  return (
    <section className={style.home} >
      <Acceuil />
       <Stat id={id}/>
     </section>
  );
}
