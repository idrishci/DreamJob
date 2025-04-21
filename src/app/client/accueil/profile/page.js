
'use client'
import style from "./profile.module.css"
import Profile from "./profil"
import Edit from "./edit"
import Demende from "./demende"
import Style_nav from "./nabar.module.css"
import { onAuthStateChanged } from 'firebase/auth';
import {getDoc }from"firebase/firestore";
import{ db,doc,auth} from "@/app/auth/firebase";
import { useState ,useEffect} from "react";
import{useRouter}from "next/navigation";
export default function Page(){
    const router=useRouter();
    const [iduser,setiduser]=useState(null);
        const [selectedItem, setSelectedItem] = useState({type:'profile'});
        const  rendercomponent = (type)=> {
        setSelectedItem({type});
       }

   const [isConnected,setConnected]=useState('connected');
   const [loading,setLoading]=useState(true);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async(user) => {
            if (user) {
                console.log("is steel connected");
                setConnected("connected");
                setiduser(user.uid);
            } else {
                setConnected("deconnected");
                alert("Vous n'avez pas l'accès");
                router.push("/auth/signin");
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
    return (<>
        {isConnected=="connected"&&<>
<div className={style.page}>
<div className={Style_nav.nav}>
            <ul>
        <li onClick={()=>rendercomponent('profile') }>Mon profile</li>
        <li onClick={()=>rendercomponent('edit')}>Edit</li>
        <li onClick={()=>rendercomponent('demende')}> Demende demploi</li>

            </ul> 
             </div>
               {selectedItem.type ==='profile' && <Profile/> }
               {selectedItem.type ==='edit' && <Edit  id={iduser}/> }
               {selectedItem.type ==='demende' && <Demende /> }

</div>  </>} </> );

}