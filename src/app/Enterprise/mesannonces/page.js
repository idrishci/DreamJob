"use client"
import style from "./page.module.css"
import Post from "./post/post_ac"
import PostAtt from "./post/post_att"
import PostR from "./post/post_r"
import { onAuthStateChanged } from 'firebase/auth';
import {getDoc }from"firebase/firestore";
import{ db,doc,auth} from "@/app/auth/firebase";
import { useState ,useEffect} from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [isConnected,setConnected]=useState('connected');
  const [loading,setLoading]=useState(true);
  const [iduser,setiduser]=useState(null);
  const router = useRouter();
  const [activeItem, setActiveItem] = useState("item1");
    const [role,setRole]=useState(null);
    const handleClick = (item) => {
      setActiveItem(item);
    };
   useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, async(user) => {
           if (user) {
               console.log("is steel connected");
               setConnected("connected");
               setiduser(user.uid);
               const userDocRef = doc(db, "users", user.uid);
               const documentt = await getDoc(userDocRef);
               const lerole = documentt.data().role;
               setRole(lerole);
           } else {
               setConnected("deconnected");
               router.replace("/auth/signin");
               alert("Vous n'avez pas l'accès");
           }
           setLoading(false);
       })
       return ()=>unsubscribe();
   },[]);

   if (loading) {
    return <div>Loading...</div>; // or a spinner/loading component
}
if (isConnected !== "connected") {
    return null; // prevent rendering anything while redirecting
}

  
    return (
 
        <>
         {(isConnected=="connected" && role==="enterprise")? (
            <div className={style.page}>
               <div className={style.nav}>
            <ul>
        <li onClick={() => handleClick('item1')}style={{ color: activeItem === 'item1' ? 'var(--buttoncolor)' : 'black' }}>Active</li>
        <li onClick={() => handleClick('item2')}style={{ color: activeItem === 'item2' ? 'var(--buttoncolor)' : 'black' }}>En cour de validation</li>
        <li onClick={() => handleClick('item3') }style={{ color: activeItem === 'item3' ? 'var(--buttoncolor)' : 'black' }}>Rejeter</li>
            </ul> 
             </div>
             <main>
             {activeItem === 'item1' && <Post id={iduser}/>}
        {activeItem === 'item2' && <PostAtt id={iduser}/>}
        {activeItem === 'item3' && <PostR id={iduser}/>}
              
             </main>
             
             {/* {selectedItem.type ==='enter' ? <Data />: <Edit /> } */}
        </div> ):(<>
           {  router.push("/")}
           { alert("Vous n'avez pas l'accès")}
        </>
       )}
        </> 
         
    
    );
  }