
import { argv } from "./config/plugins/yarg.plugin";
import { ServerApp } from "./presentation/server-app";

// console.log(argv);

(async ()=>{
    await main()
})()


async function main(){
    const {b:base,l:limit,s:show,d:destination,n:name}=await argv

    ServerApp.runServer({base,limit,show,name,destination});
     
}
