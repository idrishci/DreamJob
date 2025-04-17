import Profile from "./profile/profil"
import style from "./page.module.css"
export default function home(){
    return(
        <div className={style.page}>
      <Profile/>
      </div>
    );
}