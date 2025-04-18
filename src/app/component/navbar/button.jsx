

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
}
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async(user) => {
        if (user) {
            console.log("id of user ", user);
            setConnected("connected");
            const docref = doc(db, "users", user.uid);
             const document=await getDoc(docref);
             const res=await getinfouser(user.uid,document.data().role);
             console.log("this is the user",res);
             setUser(res);
             console.log("this is the user",userr);
            console.log("role of user",document.data().role);
          
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
           <> <button onClick={()=>{router.push("/auth/signup")}}>sign up</button>
        <button onClick={()=>{router.push("/auth/signin")}}>sign in</button>
        </>}
      
     {isConnected=="connected" && <><div className={style.profile} onClick={() => setIsOpen(!isOpen)}>
         <h2>khene Lokmen </h2> 
         {/* <Image width={40} height={40} src={"/image/profile.jpg"} className={style.img}/>   */}
    </div></>}
    {isOpen &&<div className={style.proflist}>
       <Link href="../client/accueil/profile"> <li>Mon profile</li> </Link>
         <hr />
        <li onClick={()=>{setIsOpen(false); 
          signout()}}>deconected</li>
</div>}
        </div>
    );
}