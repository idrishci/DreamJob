

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
      const [isConnected, setConnected] = useState('');
      const [role, setRole] = useState('client');
      const [userr, setUser] = useState([]);
      const[userid,setUserId]=useState(null);
      const router = useRouter();
      
   
const signout=async()=>{
    await signOut(auth);
    // setUser(null);
}

useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
      const featchdata =async()=>{
         if (user) {
            // console.log("id of user ", user);
            setConnected("connected");
            const docref =await doc(db, "users", user.uid);
            console.log("docref12",user.uid);
             const document= await getDoc(docref);
             setRole(document.data().role);
            //  console.log("document",document.data().role);
             console.log("document rooole",document.data().role);
             const res= await getinfouser(user.uid,document.data().role);
              // console.log("infouserbuton", res[0]); 
              setUser(res);
            
        } else {
          console.log("no user is connected");
            setUser(null);
            setConnected("deconnected");
        }
    
      }
      featchdata();
       })
    return ()=>unsubscribe();
},[]);
useEffect(() => {
  console.log("Updated userr:", userr);
}, [userr]);

useEffect(() => {
  if (isConnected === "connected" && role === "client" && Array.isArray(userr) && userr.length == 0) {
    router.push(`/auth/formulaire?role=candidat&id=${userid}`);
  }
}, [userid, role, userr]);
    return (
        <div className={style.btn}>
           {(isConnected=="deconnected" ||role==="enterprise"||role==="admin")&&
           <> 
           <button onClick={()=>{router.push("/auth/signup")}}>sign up</button>
            <button onClick={()=>{router.push("/auth/signin")}}>sign in</button>
            </>
        }
{/* && Array.isArray(userr) && userr.length > 0 && */}

    {isConnected === "connected" && role==="client"&& Array.isArray(userr) && userr.length > 0 &&(
  <div className={style.profile} onClick={() => setIsOpen(!isOpen)}>
    {(userr[0].nom!=null && userr[0].prenom!=null )?(
      <h2>{userr[0].nom} {userr[0].prenom}</h2>
    ):(
      <h2>Undefined</h2>
    )}
   {(userr[0].photo_profile!=null )?(
    <Image 
      width={40} 
      height={40} 

      alt={userr[0].photo_profile} 
      src={`http://localhost:8800/uploaded/photo/${userr[0].photo_profile}`} 
      


      className={style.img}
    />
  ):(
    <Image 
      width={40} 
      height={40} 
      alt={"Profile Picture"} 
      src={"/icon/engineer.png"} 
      className={style.img}
    />
  )}
  </div>
)}
    {isOpen &&<div className={style.proflist}>
      <li onClick={()=>{router.push("/client/accueil/profile");setIsOpen(false)}}><Image src={"/icon/account.png"} alt="icon"width={20} height={20} /><h3> Mon profile</h3></li> 
         <hr />
         
        <li onClick={()=>{setIsOpen(false); 
          signout()}}> <Image src={"/icon/logout.png"}alt="icon" width={20} height={20}/> <h3>deconected</h3></li>
</div>}
        </div>
    );
}