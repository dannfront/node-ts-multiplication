import fs from 'node:fs'
import { argv } from './config/plugins/yarg.plugin'; // Inicialización con valores predeterminados

(async () => {
    await argvConsole()
})()

async function argvConsole() {
    const {b:base,l:limit,s:show} = await argv

    let content = ""
    content += "=".repeat(15)
    content += `\ntabla del ${base}\n`
    content += "=".repeat(15)
    content += "\n"
    
    for (let i = 1; i <= limit; i++) {

        content += `${base}x${i}=${base * i}\n`

    }

    if(show) console.log(content);
    

    fs.mkdir('./outputs',{recursive:true}, (err) => {
        if (err) throw new Error("failded")

        fs.writeFile(`./outputs/tabla-${base}.txt`, content, (err) => {
            if (err) throw new Error("error")

            console.log("succes");
        })
    })


}



// let content = ""
// content += "=".repeat(15)
// content += "\ntabla del 5\n"
// content += "=".repeat(15)
// content += "\n"




// console.log(content);


// fs.mkdir('./outputs', (err) => {
//     // if (err) throw new Error("failded")

//     fs.writeFile('./outputs/tabla-5.txt', content, (err) => {
//         if (err) throw new Error("error")

//         console.log("succes");
//     })
// })

