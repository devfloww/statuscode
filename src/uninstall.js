// function that removes/uninstalls the application
import fs from "fs"
import path from "path"
import { fileURLToPath } from 'url'
import { dirname } from 'path'

// Get the directory name equivalent to __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const Remove = () => {
    const parentDir = path.resolve(__dirname, '../')
    const wildcard = 'statuscode*'

    try {Remove = () => {
        const parentDir = path.resolve(__dirname, '../..')
        const wildcard = 'statuscode*'
        console.log(parentDir, wildcard)
        try {
            const files = fs.readdirSync(parentDir)
            const pattern = new RegExp(`^${wildcard.replace(/\*/g, '.*')}$`)
    
            files.forEach(file => {
                if (pattern.test(file)) {
                    const fullPath = path.join(parentDir, file)
                    if (fs.statSync(fullPath).isDirectory()) {
                        fs.rmSync(fullPath, { recursive: true, force: true })
                        console.log(`Removed directory: ${fullPath}`)
                    }
                }
            })
        } catch (error) {
            console.log(`Error encountered: ${error}`)
        }
    }
        const files = fs.readdirSync(parentDir)
        const pattern = new RegExp(`^${wildcard.replace(/\*/g, '.*')}$`)

        files.forEach(file => {
            if (pattern.test(file)) {
                const fullPath = path.join(parentDir, file)
                if (fs.statSync(fullPath).isDirectory()) {
                    fs.rmSync(fullPath, { recursive: true, force: true })
                    console.log(`Uninstall Successful!\nRemoved the directory: ${fullPath}`)
                }
            }
        })
    } catch (error) {
        console.log(`Error encountered: ${error}`)
    }
}

Remove()