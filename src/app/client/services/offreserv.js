import axios from "axios";
const api_url="http://localhost:8800/api/offres";
const api_url2="http://localhost:8800/api/offres/search";

 export async function getoffres(){
 try{
const res=await axios.get(api_url);
console.log(res.data);
return res.data;
    }catch(err){

        console.log(err);
        return [];
    }
}
export async function getoffresentrerp(id){
    try{
   const res=await axios.get(`http://localhost:8800/api/offres/${id}`);
   console.log(res.data);
   return res.data
       }catch(err){
   
           console.log(err);
           return [];
       }
   }
   export async function getoffresearch(filters){
    try{
     console.log(filters.contrat);
       const res=await axios.get("http://localhost:8800/api/offres/search/",{params:filters});
          console.log("data",res.data);
           return res.data;
    }catch(err){

    }
   }
//    export async function getoffresearch2(text){
//     try{
//      console.log(filters.contrat);
//        const res=await axios.get("http://localhost:8800/api/offres/search/",{params:text});
//           console.log("data",res.data);
//            return res.data;
//     }catch(err){

//     }
//    }
// export default getoffresentrerp;