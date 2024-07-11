import { CreateTable } from "../domain/use-cases/create-table-use-case"
import { SaveFile } from "../domain/use-cases/save-file-use-case";

interface Options {
    base: number,
    limit: number,
    show: boolean
    destination:string,
    name:string
}

export class ServerApp {

    static runServer({base,limit,show,name,destination}: Options) {
        
        const content = new CreateTable().execute({base,limit})

        const isSuccesFile = new SaveFile().execute({ fileContent: content, fileName: name, destinationFile:destination })

        if (show) console.log(content);

        isSuccesFile?console.log("save file"):console.log("fil not created")
        
    }
}