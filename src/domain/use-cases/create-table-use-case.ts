
export interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => String
}

export interface CreateTableOptions {
    base: number,
    limit?: number
}

export class CreateTable implements CreateTableUseCase {
    constructor() {

    }

    execute({ base, limit = 10 }: CreateTableOptions) {
        let content = ""
        content += "=".repeat(15)
        content += `\ntabla del ${base}\n`
        content += "=".repeat(15)
        content += "\n"
        
        for (let i = 1; i <= limit; i++) {

            content += `${base}x${i}=${base * i}\n`
        }
        return content
    }

}