import axios from "axios";

export async function getoffres(){
    try{
   const res=await axios.get("http://localhost:8800/api/offres/attent/attent");
   console.log(res.data);
   return res.data;
       }catch(err){
   
           console.log(err);
           return [];
       }
   }
   export async function getalloffres(){
    try{
   const res=await axios.get("http://localhost:8800/api/offres");
   console.log(res.data);
   return res.data;
       }catch(err){
   
           console.log(err);
           return [];
       }
   }
   export async function acceptoffre(id){
    try{
   const res=await axios.put(`http://localhost:8800/api/offres/accept/${id}`);
   console.log(res.data);
   return res.data;
       }catch(err){
   
           console.log(err);
           return [];
       }
   }
   export async function refuseoffre(id){
    try{
   const res=await axios.put(`http://localhost:8800/api/offres/refuse/${id}`);
   console.log(res.data);
   return res.data;
       }catch(err){
   
           console.log(err);
           return [];
       }
   }
   export async function getenterprise(){
    try{
   const res=await axios.get("http://localhost:8800/api/getenterprise");
   console.log(res.data);
   return res.data;
       }catch(err){
   
           console.log(err);
           return [];
       }
   }
   export async function getcandidat(){
    try{
   const res=await axios.get("http://localhost:8800/api/users/allcandidat");
   console.log(res.data);
   return res.data;
       }catch(err){
   
           console.log(err);
           return [];
       }
   }