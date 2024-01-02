import config from "./Config/config";
import app from "./Config/express";



const server = app.listen(config.port,()=>{
  console.log("> [Server] Running on port: ",config.port)
})

export default server;