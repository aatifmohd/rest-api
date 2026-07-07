import express from "express";
import movieRoute from "./routes/movieRoute.js"
const app = express()
const port = 5001


app.use("/movies",movieRoute)

app.listen(port,()=>{
 console.log(`running on ${port}`);
 
})