import axios from "axios";
export async function getcandidat(){
    try{
   const res=await axios.get("http://localhost:8800/api/users/candidat");
   console.log(res.data);
   return res.data
       }catch(err){
   
           console.log(err);
           return [];
       }
   }
   export async function getcandidatsearch(filters){
       try{
          const res=await axios.get("http://localhost:8800/api/offres/search/candidat",{params:filters});
             console.log("data",res.data);
              return res.data;
       }catch(err){
   
       }
      }
      export async function addfav(id){
        try{
           const res=await axios.post("http://localhost:8800/api/users/addfav",{params:id});
              console.log("data",res.data);
               return res.data;
        }catch(err){
    
        }
       }
       export async function getfavorit(id){
        try{
           const res=await axios.get(`http://localhost:8800/api/users/getfav/${id}`);
              console.log("data",res.data);
               return res.data;
        }catch(err){
    
        }
       }
    //    export async function delet(id){
    //     try{
    //        const res=await axios.get("http://localhost:8800/api/offres/fav/candidat",{params:filters});
    //           console.log("data",res.data);
    //            return res.data;
    //     }catch(err){
    
    //     }
    //    }