import style from './footer.module.css';
export default function Footer(){

    return(
      
    <div className={style.footer}>

    <div className={style.first}>
      <h3>Dream Job</h3>
      <p>La plateforme qui connecte les talents avec les meilleures entreprises.</p>
    </div>
<div className={style.second}>
    <div >
      <h4>Liens utiles</h4>
      <ul >
        <p>Offres d'emploi</p>
        <p>Entreprises</p>
        <p>Contact</p>
        <p>À propos</p>
      </ul>
    </div>

    <div >
      <h4>Contact</h4>
      <p>Email : contact@dreamjob.com</p>
      <p>Téléphone : +213 774 28 13 78</p>
      <p>Adresse : oran, Algérie</p>
    </div>
 </div>

  <div >
    <span>© 2025 Dream Job. </span>Tous droits réservés.
  </div>
        </div>

    );
}