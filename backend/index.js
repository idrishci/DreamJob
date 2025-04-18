import express from "express";
import cors from "cors";
import offreroutes from "./routes/offreroutes.js";
import enterpriseroutes from "./routes/enterpriseroutes.js";
import searchroutes from "./routes/searchroutes.js";
import postiduser from "./routes/userroutes.js";
import connection from "./config/db.js";
import userroutes from "./routes/userroutes.js";

// const cookieParser = require('cookie-parser');
// app.use(cookieParser());
const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use(cors()); 

app.listen(8801,()=>{
    console.log("server is running on port 8800")
  }
)

app.use("/api/users",userroutes);
app.use("/api/offres/search",searchroutes);
app.use("/api/enterprise",enterpriseroutes);
app.use("/api/offres",offreroutes);
app.use("/api/offres/:id",offreroutes);
app.get("/",(req,res)=>{
  res.json("hello this the beckend");
})
app.get("/test1",(req,res)=>{
  const query="SELECT * FROM test2";
  connection.query(query,(err,data)=>{
    if(err){return console.log(err);}
    return res.json(data);
    
  })
})
app.post("/test",(req,res)=>{
  const query ="INSRT INTO test2 ('nam','password')VALUES(?,?)";
  const VALUES =['idris','hci'];
  connection.query(query,VALUES,(err,data)=>{
    if(err){return console.log(err);}
    return res.json(data);
})})
app.post("/test2", (req, res) => {
  console.log("Received data:", req.body); // Log data from the request

  // Sending response back to the client
  res.json({
      message: "Data received successfully!",
      receivedData: req.body
  });
});
// 
// const app = express();
// app.use(cors());
// app.use(express.json());

// // Route de test
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// // Route pour récupérer tous les utilisateurs
// app.get("/api/users", (req, res) => {
//   connection.query("SELECT * FROM users", (err, results) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//     } else {
//       res.json(results);
//     }
//   });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
