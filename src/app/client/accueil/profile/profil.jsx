import Image from "next/image"
import style from "./profile.module.css"
export default function profile(){
    return(
    <div className={style.profile}>
        <Image width={150} height={150} alt="photo" src={"/image/profile.jpg"} className={style.img}/>
        <div className={style.data}>
            <label > <h2>Nom :</h2> <h3>Khene</h3></label>
            <label > <h2>Prenom :</h2> <h3>lokmen</h3></label>
            <label > <h2>Age :</h2> <h3>21</h3></label>
            <label > <h2>Gender :</h2> <h3>Male</h3></label>
            <label > <h2>Localisation :</h2> <h3>oran</h3></label>
            <label > <h2>N Telephone:</h2> <h3>+213 774281378</h3></label>
            <label > <h2>Email :</h2> <h3>@gmail.com</h3></label>
            <label > <h2>Niveau d’etude :</h2> <h3>Master 1</h3></label>
            <label > <h2>Secteur d'activité :</h2> <h3>Informatique, Télécom, Internet</h3></label>
            <label > <h3>Mon cv</h3></label>

        </div>
        
        <hr/>
        <div className={style.desc}>
        <label >
            <h2>Description</h2>
            <p>hello ,my name lokmen </p>
        </label>
        </div>
    </div>);
}