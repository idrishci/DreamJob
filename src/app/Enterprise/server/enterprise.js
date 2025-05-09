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
      for (let pair of updateenterprise.entries()) {
        console.log("userinfo",`${pair[0]}:`, pair[1]);}
      const res = await axios.put(`http://localhost:8800/api/update-enter/update/${id}`, updateenterprise,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });  // تعديل المسار هنا
     
      // console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }