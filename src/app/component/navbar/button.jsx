

"use client"
import Image from "next/image"
import style from "./navbar.module.css"
import Link from "next/link";
import{ useState,useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/app/auth/firebase";
import { onAuthStateChanged } from 'firebase/auth';
import {getDoc }from"firebase/firestore";
import{ db,doc} from "@/app/auth/firebase";
import {useRouter}from"next/navigation";
import {getinfouser}from"../../services/userserv";
export default function button(){
      const [isOpen, setIsOpen] = useState(false);
      const [isConnected, setConnected] = useState('connected');
      const [userr, setUser] = useState([]);
      const router = useRouter();
      
   
const signout=async()=>{
    await await signOut(auth);
    // setUser(null);
}

useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, async(user) => {
        if (user) {
            // console.log("id of user ", user);
            setConnected("connected");
            const docref = doc(db, "users", user.uid);
             const document=await getDoc(docref);
             
             const res=await getinfouser(user.uid,document.data().role);
             await setUser(res);
            //  console.log("infouserbuton", res);
        } else {
          console.log("no user is connected");
            setUser(null);
            setConnected("deconnected");
        }
    })
    return ()=>unsubscribe();
},[]);

    return (
        <div className={style.btn}>
           {isConnected=="deconnected" &&
           <> 
           <button onClick={()=>{router.push("/auth/signup")}}>sign up</button>
            <button onClick={()=>{router.push("/auth/signin")}}>sign in</button>
            </>
        }
      
     {/* {isConnected=="connected" && 
     <>
     <div className={style.profile} onClick={() => setIsOpen(!isOpen)}>
     {userr.map((use)=>( 
      <>
      
    <h2> {use.nom }{use.prenom }</h2>
     <Image width={40} height={40} alt={"photo profile"} src={use.photo_profile?`/image/${use.photo_profile}`:"/image/account.png"} className={style.img}/>
     </>
    ))} 
     </div>
     </>

    } */}

    {isConnected === "connected" && userr[0] &&(
  <div className={style.profile} onClick={() => setIsOpen(!isOpen)}>
    <h2>{userr[0].nom} {userr[0].prenom}</h2>
    <Image 
      width={40} 
      height={40} 
      alt={userr[0].photo_profile} 
      src={`/public/image/${userr[0].photo_profile}` } 
      className={style.img}
    />
  </div>
)}
    {isOpen &&<div className={style.proflist}>
      <li onClick={()=>{router.push("/client/accueil/profile");setIsOpen(false)}}>Mon profile</li> 
         <hr />
        <li onClick={()=>{setIsOpen(false); 
          signout()}}>deconected</li>
</div>}
        </div>
    );
}