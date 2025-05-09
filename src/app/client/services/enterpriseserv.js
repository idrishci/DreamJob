import axios from "axios";
const api_url="http://localhost:8800/api/enterprise";
export async function getenterprise(){
    try{
    const res=await axios.get(api_url);
    
    console.log(res.data);
    return res.data;
}catch(err){
        console.log(err);
        return [];
    }
}
export async function getenterprisesearch(updatedFilters){
    try{
        const res=await axios.get("http://localhost:8800/api/enterprise/search/enterprise",{params:updatedFilters});
        console.log(res.data);
        return res.data;
    }catch(err){
        console.log(err);
        return [];
    }
}
