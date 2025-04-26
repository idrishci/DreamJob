import express from "express";
import cors from "cors";
import offreroutes from "./routes/offreroutes.js";
import enterpriseroutes from "./routes/enterpriseroutes.js";
import searchroutes from "./routes/searchroutes.js";
import upload from "./uploaded/upload.js";
import uploadenter from "./uploaded/uploadenter.js"
import offresidroutes from "./routes/offresidroutes.js"
import postiduser from "./routes/userroutes.js";
import connection from "./config/db.js";
import userroutes from "./routes/userroutes.js";

import updateEnterprise from "./routes/updateenetrroutes.js"




const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use(cors()); 

app.listen(8800,()=>{
    console.log("server is running on port 8800")
  }
)


app.use("/api/users",userroutes);

// const offresRoutes = require('./routes/offresidroutes.js');
// app.use("/api/users/updateclient",userroutes);
app.use("/api/users", upload.fields([
  { name: "cv", maxCount: 1 },
  { name: "photo", maxCount: 1 },
]),userroutes);


app.use("/api/offres/search",searchroutes);
app.use("/api/enterprise",enterpriseroutes);
app.use("/api/getenterprise",enterpriseroutes);
app.use("/api/offres",offreroutes);
app.use("/api/offres/:id",offreroutes);
app.use("/api/offre",offresidroutes);

app.use("/api/update-enter", updateEnterprise);
app.use("/api/offresid/:id",offresidroutes);


app.get("/",(req,res)=>{
  res.json("hello this the beckend");
})



