import axios from "axios";
const api_url="http://localhost:8800/api/offres";
// const api_url2="http://localhost:8800/api/offres/search";

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
   export async function getoffrebyId(id){
    try{
        
   const res=await axios.get(`http://localhost:8800/api/offre/${id}`);
   console.log("result =" + res.data);
   return res.data
       }catch(err){
   
           console.log(err);
           return [];
       }
   }
   export async function updateOffre(id, updatedOffre) {
    try {
      const res = await axios.put(`http://localhost:8800/api/offre/updateoffre/${id}`, updatedOffre);  // تعديل المسار هنا
      console.log(updatedOffre);
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }