import Image from "next/image"
import style from "./navbar.module.css"
export default function profile(){
    return 
    <div className={style.profile}>
         <h2>khene Lokmen</h2> 
         <Image width={50} height={50} src={"/image/profile.jpg"} className={style.img}/>  
       
        
    </div>
}
