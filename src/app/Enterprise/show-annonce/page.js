import style from "./offre.module.css"
import Offre from "./offre"
import Person from "./person"
export default function Home(){
    return (
        <div className={style.home}>
<Offre/>
<h1>person</h1>
<Person/>
        </div>
    );
}