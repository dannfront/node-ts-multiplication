import yargs from 'yargs/yargs'
import {hideBin} from 'yargs/helpers'

export const argv=yargs(hideBin(process.argv))
    .option("b",{
        alias:"base",
        type:"number",
        demandOption:true,
        describe:"Multuplication table base"
    })
    .option("l",{
        alias:"limit",
        type:"number",
        default:10,
        describe:"Multiplication table limit"
    })
    .option("s",{
        alias:"show",
        type:"boolean",
        default:false,
        describe:"Show multiplication table"
    })
    .option("n",{
        alias:"name",
        type:"string",
        default:"table-multiplication",
        describe:"File name"
    })
    .option("d",{
        alias:"destination",
        type:"string",
        default:"outputs",
        describe:"File destination"
    })
    .check((argv)=>{
        console.log(argv.b);
        
        if(argv.b<1) throw new Error ("the base must is a number")

        return true
    })
    .parseAsync()