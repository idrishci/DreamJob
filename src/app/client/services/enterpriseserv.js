import axios from "axios";
const api_url="http://localhost:8800/api/enterprise";
const getenterprise=async()=>{
    try{
    const res=await axios.get(api_url);
    
    console.log(res.data);
    return res.data;
}catch(err){
        console.log(err);
        return [];
    }
}
export default getenterprise;