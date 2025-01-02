// Function to check the app name from package.json
import fs from "fs"
import path from "path"
import { fileURLToPath } from 'url'
import { dirname } from 'path'

// Get the directory name equivalent to __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

function getAppName() {
  const packageJsonPath = path.resolve(__dirname, '../../package.json') 

  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
    
    // Return the name from package.json
    if (packageJson.name) {
      return packageJson.name
    } else {
      console.error('Error: "name" field is missing in package.json.')
      return null
    }
  } catch (error) {
    console.error('Error reading package.json:', error.message)
    return null
  }
}

export {
    getAppName
}
