import express, { Application } from "express"
// import mongoose from "mongoose"


const app:  Application = express()
const port: string = (process.env.Port!)



app.use(express.json())

const server = app.listen(port,()=>{
  console.log("Server is on Baby");

})

process.on("unhandledRejection",(reason:any)=>{
  console.log("server is shutting down due to unhandledRejection",reason)
  server.close(()=>{
    process.exit(1)
  })
})