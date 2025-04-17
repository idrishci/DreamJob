import Image from "next/image";
import style from "./offre.module.css"
export default function offre(){
    return(
        <div className={style.offre}>
            <div className={style.first}>
               <h1>Conseiller Commercial :</h1>
                
                    {/* <Image width={40} height={40} src={"/icon/bookmark.png"} className={style.img}/> */}
            </div>
            <div className={style.second}>
                <label >
                    <Image width={20} height={20} src={"/icon/office-building.png"} alt="icon"/>
                    <span><h3>Lieu de travaille :</h3></span>
                    <h3>Alger, Algérie</h3>
                </label>
                <label >
                    <Image width={20} height={20} src={"/icon/audience.png"} alt="icon"/>
                    <span><h3>Nombre de postes:</h3></span>
                    <h3>1 poste ouvert</h3>
                </label>
                <label >
                    <Image width={20} height={20} src={"/icon/graduation-cap (1).png"} alt="icon"/>
                    <span><h3>Niveau d'étude :</h3></span>
                    <h3>Master 2, Ingéniorat, Bac + 5</h3>
                </label>
                <label >
                    <Image width={20} height={20} src={"/icon/form.png"} alt="icon"/>
                    <span><h3>Type de contrat :</h3></span>
                    <h3>Consultant</h3>
                </label>
                <label >
                    <Image width={20} height={20} src={"/icon/engineering.png"} alt="icon"/>
                    <span><h3>Secteur d'activité :</h3></span>
                    <h3>Informatique, Télécom, Internet</h3>
                </label>
                <label >
                    <Image width={20} height={20} src={"/icon/engineer.png"} alt="/icon/engineer.png"/>
                    <span><h3>Niveau de poste:</h3></span>
                    <h3>Débutant / Junior | Confirmé/ Expérimenté</h3>
                </label>
                <label >
                    <Image width={20} height={20} src={"/icon/verify.png"} alt="/icon/verify.png"/>
                    <span><h3>Expérience :</h3></span>
                    <h3>1 a 2 ans</h3>
                </label>
                <label >
                    <Image width={20} height={20} src={"/icon/wallet.png"} alt="/icon/wallet.png"/>
                    <span><h3>Salary :</h3></span>
                    <h3>100000.00 DA</h3>
                </label>
               

            </div>
            <hr />
            <div className={style.three}>
    <p>            
                Description:
Nous recherchons un(e) Ingénieure Informatique pour rejoindre notre équipe. 
Le candidat idéal devra avoir une solide expérience dans le domaine de l'informatique
 et des systèmes d'information, ainsi qu'une passion pour les nouvelles technologies.
Responsabilités:
Développer, tester et maintenir des logiciels et des applications informatiques
Participer à la conception et à l'implémentation de systèmes d'information
Assurer le support technique et la résolution des problèmes liés aux systèmes informatiques
Exigences:
Maîtrise des langages de programmation et des outils de développement informatique
Connaissance approfondie des systèmes d'information et des réseaux
Capacité à travailler en équipe et à communiquer efficacement
Avantages:

Nous offrons un environnement de travail dynamique et stimulant, des opportunités
 de développement professionnel, ainsi qu'une rémunération compétitive.
                </p>
            </div>
            <div className={style.btn}><button>postuler</button></div>
        </div>
    );
}