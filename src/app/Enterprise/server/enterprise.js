import axios from "axios";
const api_url="http://localhost:8800/api/enterprise";
export async function getEnterprise(id) {
    try{
    const res=await axios.get(`http://localhost:8800/api/getenterprise/${id}`);
    
    console.log(res.data);
    return res.data;
}catch(err){
        console.log(err);
        return [];
    }
}
export async function updateenterprise(id, updateenterprise) {
    try { 
        console.log("hello"+ updateenterprise);
      const res = await axios.put(`http://localhost:8800/api/update-enter/${id}`, updateenterprise);  // تعديل المسار هنا
     
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }