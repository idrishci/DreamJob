import mysql from "mysql2";
// import dotenv from "dotenv";

// dotenv.config({ path: './backend/.env' });
// export async function qeury({qeury,values=[]}){
const connection=await mysql.createConnection({
host:'localhost' ,
user:'root',
password:'',
database:'offre',
// port:process.env.DB_PORT ,
});
connection.connect((err)=>{
    if (err) {
        console.error("Error connecting to database:", err.message);
    } else {
        console.log(" Database connected successfully");
    }
})
// }
export default connection;
