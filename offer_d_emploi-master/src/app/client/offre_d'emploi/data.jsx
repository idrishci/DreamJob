import style from "./profile.module.css"
export default function data(){
    return (
        <div className={style.data}>
            {/* ///////////// */}
            <h1>Description :</h1>
            <p>Sonatrach (Société Nationale pour la Recherche, la Production, le Transport, la Transformation, et la Commercialisation
 des Hydrocarbures s.p.a.) is an Algerian government-owned company formed to exploit the hydrocarbon resources 
of the country. Its diversified activities cover all aspects of Oil & Gas industry chain. Upstream (E&P), Midstream (Transport) 
and Downstream (Marketing, Refining and Petchems).</p>
{/* ////////////// */}
<h1>Secteur :</h1>
<p>Énergie, Mines, Matière première</p>
{/* //////////// */}
<h1>Nomber d’employés :</h1>
<p>10000 A 20000 employés</p>
{/* //////////// */}
<h1>Siège social :</h1>
<p>Hydra,alger</p>
        </div>
    );
}