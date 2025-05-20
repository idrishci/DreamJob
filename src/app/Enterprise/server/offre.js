import axios from "axios";
const api_url="http://localhost:8800/api/offres";
// const api_url2="http://localhost:8800/api/offres/search";

 export async function getoffres(){
 try{
const res=await axios.get("http://localhost:8800/api/offres");
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
   export async function getperson(id){
    try{
        
   const res=await axios.get(`http://localhost:8800/api/offres/person/${id}`);
   console.log("result =" + res.data);
   return res.data
       }catch(err){
   
           console.log(err);
           return [];
       }
   }
    export async function getcan(id){
    try{
        
   const res=await axios.get(`http://localhost:8800/api/offres/cand/${id}`);
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
  export async function postOffre(id, postOffre) {
    try {
      const res = await axios.post(`http://localhost:8800/api/offre/creeoffre/${id}`, postOffre);  // تعديل المسار هنا
      console.log(postOffre);
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  export async function deletoffre(id) {
    try {
      const res = await axios.delete(`http://localhost:8800/api/offre/deletoffre/${id}`);  // تعديل المسار هنا
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }