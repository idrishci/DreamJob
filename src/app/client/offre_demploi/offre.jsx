
import Image from "next/image";
import style from "./offre.module.css";
import { useEffect, useState } from "react";
import {getoneoffresentrerp} from "../services/offreserv";
// import { off } from "node:process";
import { onAuthStateChanged } from 'firebase/auth';
import {getDoc }from"firebase/firestore";
import{ db,doc,auth} from "@/app/auth/firebase";
import { useRouter } from "next/navigation";
import { postpostuler,getpostuler,getfavorit,addfav,deletfav } from "../services/offreserv";
export default function offre({id}){
    const router = useRouter();
   const [offres,setOffres]=useState([]);
   const [iduser,setiduser]=useState('');
   const [isConnected,setConnected]=useState('connected');
   const [ispostuler,setispostuler]=useState(false);
   
  const [save,setsave]=useState([])
  /////////get id user
    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, async(user) => {
            if (user) {
                setConnected("connected");
                // console.log("user",user.uid);
                setiduser(user.uid);
                
            } else {
                setiduser('')
                setConnected("deconnected");
            }
        })
        return ()=>unsubscribe();
    },[]);

    /////////////////get offre of entreprise
 useEffect(()=>{
        const fetchdata=async()=>{  
            // setUid(uid);
            // console.log("hello "+id )
            const offre=await getoneoffresentrerp(id);
            setOffres(offre);      
        };
         
        fetchdata();
    },[id,iduser]);
useEffect(() => {
       
    }, []);
///////////////postuler
    const postuler=async()=>{
        if (!iduser) {
            router.replace("/auth/signin");
            return;
          }
        setispostuler(true);
        await postpostuler(id,iduser);
        
    }
    // gettt postuler
       useEffect(() => {
        if (iduser) {
            const fetchPostuler = async () => {
              const data = await getpostuler(id,iduser);
              console.log("this id hhhhhhhhhh: " + data);
              setispostuler(data.length>0? true :false);
            //   console.log("already postuler");
            };
            fetchPostuler();
          }
        }, [iduser]);
                   //////////////get favorit
                   useEffect(() => {
                    if (iduser) {
                      const fetchFavoris = async () => {
                        const data = await getfavorit(iduser);
                        console.log("this id user: " + iduser);
                        console.log(data);
                        setsave(data.map((dat) => dat.idoffre));
                      };
                      fetchFavoris();
                    }
                  }, [iduser]);
                  //////////////save ou unsave
              const toggleSave = async (idoffre) => {
                if (!iduser) {
                    router.replace("/auth/signin");
                    return;
                  }
                const ids={idoffre:idoffre,idcandidat:iduser}
                console.log(save);
                if (!save.includes(idoffre)) {
                  await addfav(ids); // تسجيل في قاعدة البيانات
                  setsave((prev) => [...prev, idoffre]);

                } else { 
                    await deletfav(ids);   
                  // هنا يمكنك إضافة خاصية حذف لو تريد
                  setsave((prev) => prev.filter(idoffre => idoffre !== idoffre));

                }
              };                  

    return(
        <>
        {offres.length>0?(
            offres.map((offre) => (  
               
        <div className={style.offre} key={offre.idoffre}>
            <div className={style.btn1}><Image 
                      src={save.includes(offre.idoffre)? "/icon/unsave.svg" :"/icon/save.svg"}
                      width={30}
                      height={30}
                      alt={"save"}
                      unoptimized
                      onClick={ () => toggleSave(offre.idoffre)}
                      />
            </div>
            <div className={style.first}>
               <h1>{offre.titre}  </h1>

            </div>
            <div className={style.second}>
                <label >
               
                    <Image width={20} height={20} src={"/icon/office-building.png"} alt="icon"/>
                    <span><h3>Lieu de travaille :</h3></span>
                    <h3> {offre.wilaya}</h3>
                </label>
                <label >
                    <Image width={20} height={20} src={"/icon/audience.png"} alt="icon"/>
                    <span><h3>Nombre de postes:</h3></span>
                    <h3>{offre.nombre_de_post} poste ouvert</h3>
                </label>
                <label >
                    <Image width={20} height={20} src={"/icon/graduation-cap (1).png"} alt="icon"/>
                    <span><h3>Niveau d'étude :</h3></span>
                    <h3>{offre.niveau_detude} </h3>
                </label>
                <label >
                    <Image width={20} height={20} src={"/icon/form.png"} alt="icon"/>
                    <span><h3>Type de contrat :</h3></span>
                    <h3>{offre.type_de_contrat} </h3>
                </label>
                <label >
                    <Image width={20} height={20} src={"/icon/engineering.png"} alt="icon"/>
                    <span><h3>Secteur d'activité :</h3></span>
                    <h3>{offre.secteur_dactivite} </h3>
                </label>
                <label >
                    <Image width={20} height={20} src={"/icon/engineer.png"} alt="/icon/engineer.png"/>
                    <span><h3>Fonction :</h3></span>
                    <h3>{offre.fonction}</h3>
                </label>
                <label >
                    <Image width={20} height={20} src={"/icon/verify.png"} alt="/icon/verify.png"/>
                    <span><h3>Expérience :</h3></span>
                    <h3>{offre.annees_dexper}</h3>
                </label>
                <label >
                    <Image width={20} height={20} src={"/icon/wallet.png"} alt="/icon/wallet.png"/>
                    <span><h3>Salary :</h3></span>
                    <h3>{offre.salaire} DA</h3>
                </label>
               

            </div>
            <hr />
            <div className={style.three}>
            <span><h3>Description:</h3></span>
            
            <p>             
            {offre.description_offre}
            </p>
            </div>
         
           { ispostuler?(
                <div className={style.btn}> <span><h3>vous postulez deja</h3></span></div>
            ):(
               
                <div className={style.btn}><button onClick={()=>postuler()}>postuler</button></div>
            )}
            
            
        </div>
        )

    ))
    :(
        <p>Loading offers...</p> // ✅ Display message while fetching
      )
      }
    </>
    );
}