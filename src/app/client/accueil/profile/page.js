
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
import Favoris from "./favoris"
export default function Page(){
    const router=useRouter();
    const [iduser,setiduser]=useState(null);
    const [role,setRole]=useState(null);
        const [selectedItem, setSelectedItem] = useState({type:'profile'});
        const  rendercomponent = (type)=> {
        setSelectedItem({type});
       }

   const [isConnected,setConnected]=useState('connected');
   const [loading,setLoading]=useState(true);
    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, async(user) => {
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
        {(isConnected=="connected" && role==="client")?(
            <>
        <div className={style.page}>
        <div className={Style_nav.nav}>
            <ul>
        <li onClick={()=>rendercomponent('profile') } style={{ color: selectedItem.type === 'profile' ? 'var(--buttoncolor)' : 'black' }}>Mon profile</li>
        <li onClick={()=>rendercomponent('edit')} style={{ color: selectedItem.type === 'edit' ? 'var(--buttoncolor)' : 'black' }}>Modification</li>
        <li onClick={()=>rendercomponent('demende')}style={{ color: selectedItem.type === 'demende' ? 'var(--buttoncolor)' : 'black' }}> Demende demploi</li>
        <li onClick={()=>rendercomponent('fav')}style={{ color: selectedItem.type === 'fav' ? 'var(--buttoncolor)' : 'black' }}>Favoris</li>

            </ul> 
             </div>
               {selectedItem.type ==='profile' && <Profile id={iduser}/> }
               {selectedItem.type ==='edit' && <Edit  id={iduser}/> }
               {selectedItem.type ==='demende' && <Demende id={iduser} /> }
               {selectedItem.type ==='fav' && <Favoris id={iduser} /> }

        </div> 
        </>):(<>
           { router.push("/auth/signin")}
        </>)
        } 
</> );

}