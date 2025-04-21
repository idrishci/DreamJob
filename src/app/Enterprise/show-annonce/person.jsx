import style from "./profile.module.css"
import Image from "next/image";
export default function Person({id}){
return(
  
         <div className={style.profile} data-aos="zoom-in">
        <Image width={100} height={100} alt="photo" src={"/image/profile.jpg"} className={style.img}/>
        <div className={style.data}>
            <label > <h2>Nom :</h2> <h3>Khene</h3></label>
            <label > <h2>Prenom :</h2> <h3>lokmen</h3></label>
            <label > <h2>Age :</h2> <h3>21</h3></label>
            <label > <h2>Localisation :</h2> <h3>oran</h3></label>
            <label > <h2>N Telephone:</h2> <h3>+213 774281378</h3></label>
            <label > <h2>Email :</h2> <h3>@gmail.com</h3></label>
            <label > <h2>Niveau d’etude :</h2> <h3>Master 1</h3></label>
            <label > <h3>Mon cv</h3></label>

        </div> 
    </div>
);
}