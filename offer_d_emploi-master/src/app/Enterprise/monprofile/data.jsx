import style from "./profile.module.css"
import Statis from "./statistique"
import Photo from "./photo"
export default function data(){
    return (
      <> <div className={style.data}>
<Photo/>
            {/* ///////////// */}
            
{/* ////////////// */}

<>

<h1>Nom d'enterprise :</h1>
<p>Sonatrch</p>
{/* //////////// */}
<h1> Numero Telephone :</h1>
<p>+21375565665</p>
<h1>Secteur :</h1>
<p>Énergie, Mines, Matière première</p>
{/* //////////// */}
<h1>Nomber d’employés :</h1>
<p>10000 A 20000 employés</p>
{/* //////////// */}
<h1>Siège social :</h1>
<p>Hydra,alger</p>

<h1>Description :</h1>
            <p>Sonatrach (Société Nationale pour la Recherche, la Production, le Transport, la Transformation, et la Commercialisation
 des Hydrocarbures s.p.a.) is an Algerian government-owned company formed to exploit the hydrocarbon resources 
of the country. Its diversified activities cover all aspects of Oil & Gas industry chain. Upstream (E&P), Midstream (Transport) 
and Downstream (Marketing, Refining and Petchems).</p>

</>

        </div><Statis/> </> 
    );
}
