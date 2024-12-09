// function to display the information in a long format

// importing dependent modules
import chalk from "chalk"

// importing the tags
import {failure, success} from "./helper_functions/Tags.js"

export const DisplayLong = ( code_data ) => {
    // checking whether what we got was data or error
    // console.log(code_data)
    if (code_data.err_code === -1) {
        // means that the code is out of range
        const error_message = 
        `${failure}: ${chalk.bold.underline(code_data.code)} is ${chalk.bgRed("OUT of RANGE")}`
        console.log(error_message)
    } else if (code_data.error) {
        const error_message = 
        `${failure}: An Error was encountered!\ncode: ${chalk.bold.underline(code_data.code)}\nmsg: ${chalk.bold.bgRed(code_data.message)} `

        console.log(error_message)
        return
    } else {
        // get the data from the code_data object
        const { code, name, description, specification, reference } = code_data
        const success_message =
        `${success}: ${chalk.bold.underline(code)} - ${chalk.bold.bgGreen(` ${name} `)}
        ${chalk.underline("description")}: ${chalk.bold(description)}
        ${chalk.underline("specification")}: ${chalk.bold(specification)}
        ${chalk.underline("link to MDN docs")}: ${chalk.underline.magenta(reference)}`

        console.log(success_message)
  }
}