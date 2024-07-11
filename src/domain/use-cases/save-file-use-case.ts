import fs from "node:fs"

export interface SaveFileUseCase {
    execute: (options: Options) => boolean
}

export interface Options {
    fileContent: string
    fileName: string,
    destinationFile?: string
}


export class SaveFile implements SaveFileUseCase {
    constructor() { }

    execute({ fileContent, fileName, destinationFile="outputs" }: Options) {

        fs.mkdir(`./${destinationFile}`, { recursive: true }, (err) => {
            if (err) return false

            fs.writeFile(`./${destinationFile}/${fileName}.txt`, fileContent, (err) => {
                if (err) return false
            })
        })
        return true
    }

}