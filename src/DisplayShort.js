// function to display the information in a short format

// Importing dependencies
import chalk from "chalk"
// importing tags
import { success, failure } from "./helper_functions/Tags.js"

export const DisplayShort = ( code_data ) => {
  // checking whether what we go was data or error
  if(code_data.error) {
    const error_message = 
    `${failure}: An Error was encountered!\nmsg: ${chalk.bold.bgRed(code_data.message)} `

    console.log(error_message)
  } else {
    // get the data from the code_data object
    const { code, Description } = code_data
    const success_message =
     `${success}: ${chalk.bold.underline(code)} - ${chalk.bold.bgGreen(` ${Description} `)}`

    console.log(success_message)
  }
}  