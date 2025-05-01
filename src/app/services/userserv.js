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
        role:role}
    
 });

 return res.data;
}catch(err){
    console.log(err);
    return [];}

}

export async function postthepost(data){
    try{
 const res=await axios.post("http://localhost:8800/api/users/post",data);
}catch(err){
    console.log(err);
    return [];}
}

export async function getthepost(uid){
    try{
        console.log("id 1uid",uid);
 const res=await axios.get("http://localhost:8800/api/users/getpost",{
    params:{
        uid:uid,
    }
    
 });
 return res.data;
}catch(err){
    console.log(err);
    return [];}
}

export async function setenterprise( updateenterprise) {
    try { 
      for (let pair of updateenterprise.entries()) {
        console.log("userinfo",`${pair[0]}:`, pair[1]);}
      const res = await axios.post(`http://localhost:8800/api/update-enter/add`, updateenterprise,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });  // تعديل المسار هنا
     
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  export async function setcandidat(infocandidat) {
    try { 
      for (let pair of infocandidat.entries()) {
        console.log("userinfo",`${pair[0]}:`, pair[1]);}
      const res = await axios.post(`http://localhost:8800/api/addusers/adduser`, infocandidat,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });  // تعديل المسار هنا
     
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }