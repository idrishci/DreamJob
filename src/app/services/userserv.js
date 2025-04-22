import axios from "axios";
const api_url="http://localhost:8800/api/users";
export function postiduser(uid,email,user){
    try{
 const res=axios.post(api_url,{
    uid:uid,
    email:email,
    user:user
 });
}catch(err){
    console.log(err);
    return [];}
}

export function updateinfouser(formdata){
    try{
         for (let pair of formdata.entries()) {
        console.log("userinfooo",`${pair[0]}:`, pair[1]);
      }
        // console.log("the user info ",user);
 const res=axios.post("http://localhost:8800/api/users/updateclient",formdata
    // {
    //     headers: {
    //       "Content-Type": "multipart/form-data"
    //     }
    //   }
 );
}catch(err){
    console.log(err);
    return [];}
}
export async function  getinfouser(uid,role){
    try{
 const res=await axios.get(api_url,{
    params:{
        uid:uid,
        role:role


    }
    
 });

 return res.data;
}catch(err){
    console.log(err);
    return [];}

}

export function postthepost(data){
    try{
 const res=axios.post("http://localhost:8800/api/users/post",data);
}catch(err){
    console.log(err);
    return [];}
}

export function getthepost(uid){
    try{
 const res=axios.get("http://localhost:8800/api/users/getpost",{params:uid});
 return res.data;
}catch(err){
    console.log(err);
    return [];}
}