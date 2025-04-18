import axios from "axios";
const api_url="http://localhost:8800/api/users";
export function postiduser(uid,user){
    try{
 const res=axios.post(api_url,{
    uid:uid,
    user:user
 });
}catch(err){
    console.log(err);
    return [];}
}
export async function getinfouser(uid,role){
    try{
 const res=await axios.get(api_url,{
    params:{
        uid:uid,
        role:role
    }
    
 });
 console.log("this is ",res.data);
 return res.data;
}catch(err){
    console.log(err);
    return [];}

}