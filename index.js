const express = require("express")
const app = express()


require('dotenv').config()
PORT = process.env.PORT||4000 
 app.use(express.json())
 const cors = require("cors");
app.use(cors({
    origin: "http://localhost:3000", // Make sure this matches your frontend origin
}));

require("./config/databse").connect()
const user = require("./routes/user")
app.use("/api/v1" , user) ;

app.listen(PORT ,  ()=>{
    console.log("APP IS RUNNING")
})

