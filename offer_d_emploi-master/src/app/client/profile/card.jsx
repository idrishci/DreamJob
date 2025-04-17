import Image from "next/image";
import style from "./offre.module.css"
const id=1;
export default function card(){
    return(
        <div className={style.card}>
     <div className={style.title}>Conseiler Commercial</div>
     <div className={style.option}>
        <h2><Image src={"/icon/office-building.png"} width={18} height={18} alt="location" key={id}/><span> Sur site</span></h2>
        <h2><Image src={"/icon/form.png"} width={18} height={18} alt="location" key={id}/><span> CDI</span></h2>
        <h2><Image src={"/icon/audience.png"} width={18} height={18} alt="location" key={id}/><span> 1 poste</span></h2>
        <h2><Image src={"/icon/graduation-cap.png"} width={18} height={18} alt="location" key={id}/><span>  Bac +5</span></h2>
        <h2><Image src={"/icon/verify.png"} width={18} height={18} alt="location" key={id}/><span> 1 a 2 ans</span></h2>
        <h2><Image src={"/icon/location-sign.png"} width={18} height={18} alt="location" key={id}/><span> Alger</span></h2>
        </div>   
    </div>
    );
}