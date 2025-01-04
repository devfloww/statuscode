// function that removes/uninstalls the application
import fs from "fs"
import path from "path"
import { exec } from "child_process"
import { fileURLToPath } from 'url'
import { dirname } from 'path'

// Get the directory name equivalent to __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const Remove =() => {
    const parentDir = path.resolve(__dirname, '../')
    const wildcard = 'httpinfo*'
    
    try {
        const files = fs.readdirSync(parentDir)
        const pattern = new RegExp(`^${wildcard.replace(/\*/g, '.*')}$`)

        // unlink the package
        exec('npm unlink -g httpinfo', (error, stdout, stderr) => {
            if (error) {
              console.error(`exec error: ${error}`)
              return
            }
            console.log(`Unlink successful: ${stdout}`)
          })

        // remove the folder from disk
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

export {
    Remove
}