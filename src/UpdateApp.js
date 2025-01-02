// Function to update the app

// Imporitng dependecies
import { exec } from "child_process"

// Imporing files and functions
import { getAppName } from "./helper_functions/getAppName.js"
import {
    success,
    process,
    failure
} from "./helper_functions/Tags.js"

// Globals 
const app_name = getAppName()

// Function to update the app to the latest version on npm
function UpdateApp() {
  console.log(`${process} Checking if a new version is available ...`)

  // Check if the app is outdated
  exec(`npm outdated -g ${app_name}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`${failure} Error checking outdated status: ${error.message}`)
      return;
    }

    if (stderr) {
      console.error(`stderr: ${stderr}`)
      return
    }

    // If stdout is empty, it means the package is up-to-date
    if (stdout === '') {
      console.log(`${success} Your app is up to date.`)
    } else {
      console.log(`${process} Update available. Updating your app ...`)

      // Run npm update to upgrade the app to the latest version
      exec(`npm install -g ${app_name}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`${failure} Error updating the app:\n\tAre you connected to the internet?`)
          return
        }

        if (stderr) {
          console.error(`${failure} Error updating the app:\n\tAre you connected to the internet?`)
          return
        }

        console.log(`${success} App successfully updated!`)
      })
    }
  })
}

export {
  UpdateApp
}