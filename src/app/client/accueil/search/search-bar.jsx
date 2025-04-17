"use client";
import { useRouter } from "next/navigation";
import { useEffect,useState } from "react";
import style from "../../offre/offre.module.css";
import  {wilaya} from "@/app/file_json/wilaya.js";
export default function page(){ 
     const router=useRouter();
     const [wilayaa, setWilaya] = useState("");
     const [motcle, setMotcle] = useState("");
const handleleclick=(e)=>{
    console.log();
        // const wilaya=document.getElementById("wilaya").value;
        // const motcle=document.getElementById("motcle").value;
        // router.push(`/client/offre?name=wilaya&value=${encodeURLComponent(wilaya)}&motcle=${encodeURLComponent(motcle)}`);
        router.push(`/client/offre?name=wilaya&value=${encodeURIComponent(wilayaa)}&namee=motcle&motcle=${encodeURIComponent(motcle)}`);

console.log("is is thh");
}
    return (
        <>
        <div className={style.search_bar} >
            <input type="text" name="search-bar" value={motcle} onChange={(e)=>{setMotcle(e.target.value)}} placeholder="motcle,post" />
            <select name="wilaya" id="wilaya" onChange={(e)=>{setWilaya(e.target.value)}}>
                <option value="" >wilaya</option>
                {wilaya.map((wilaya) =>  (<option key={wilaya.id} value={wilaya.name}> {wilaya.name}</option>))}
            </select>
            <button onClick={handleleclick}>search</button>
        </div>
        </>
    );

}