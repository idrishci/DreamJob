
import style from "./profile.module.css"
import Photo from "./photo"
import Profil from "./profil"
export default function page(){
 
    return (
        <div className={style.prof_entr}>
          
        <Photo />
        <Profil />
       
        
        </div>
    );
}
