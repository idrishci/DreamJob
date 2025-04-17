import Image from "next/image";
import style from "./profile.module.css"
export default function photo(){
    return(
        <div className={style.photo}>
            <div className={style.second}>
                <img src="/image/sonatrach.png" alt="cover"  />
                
            </div>
            <div className={style.first}>
            <div className={style.logo}><Image src={"/image/sonatrach.png"} width={130} height={130} alt="logo"/></div>
            <div className={style.social}>
                <div className={style.back}><Image src={"/icon/mail.png"} width={30} height={30}/></div>
                <div className={style.back}><Image src={"/icon/linkedin.png"} width={30} height={30}/></div>
                <div className={style.back}><Image src={"/icon/internet (1).png"} width={30} height={30}/></div>
            </div>
            </div>
            
        </div>
    );
}