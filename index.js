#!/usr/bin/env node
// HTTP status code Lookup tool
// developed by @devfloww

// Importing dependencies
import yargs from "yargs"
import { hideBin } from "yargs/helpers"

// Importing dependent files
import { showBanner } from "./src/Banner.js"
import { LoadDataShort, LoadDataLong } from "./src/LoadData.js"
import { DisplayShort } from "./src/DisplayShort.js"
import { DisplayLong } from "./src/DisplayLong.js"
import { Remove } from "./src/uninstall.js"
import { UpdateApp } from "./src/UpdateApp.js"

// Importing helper functions
import { sanitize_status_code_h } from "./src/helper_functions/sanitize_status_code.js"
import { checkInternetConnection } from "./src/helper_functions/checkInternetConnection_h.js"
import { failure } from "./src/helper_functions/Tags.js"

// Collect input params from the user and  creating the options
const parser = yargs(hideBin(process.argv))
  .option("help", {
    alias: "h",
    type: "boolean",
    description: "Show help menu",
  })
  .option("code", {
    alias: "c",
    type: "number",
    describe: "HTTP status code to lookup",
  })
  .option("long", {
    alias: "l",
    type: "boolean",
    describe: "Provide a Long description of the staus code",
  })
  .option("remove", {
    alias: "r",
    type: "boolean",
    describe: "Remove the tool from the computer",
  })
  .option("update", {
    alias: "u",
    type: "boolean",
    describe: "Update the tool to the latest version",
  })

// parsing the arguments
const args = parser.parse()

// Check to see if user wants to Uninstall the app
if (args.remove || args.r) {
  // Remove the application 
  Remove()
}

// Check if user wants to update application
if (args.update || args.u) {
  // Update to the latest version available on npm repo
  checkInternetConnection(isConnected => {
    if (isConnected) {
      UpdateApp()
    } else {
      console.log(`${failure} No internet connection. Please check your connection and try again.`)
    }
  })
}

// Check to see if no arguments were supplied
if (!(args.code || args.help || args.remove || args.update || args.long || args.short)) {
  // show banner and request to update the local cache
  console.log(`\n${showBanner()}`)

  // TODO: implement the updateLocalCache function and usi it
}

// check if status code was  supplied by user
if (args.code || args.c) {
  const sanitized_code = sanitize_status_code_h(args.code)
  // check if the long flag is enabled
  if (args.long && args.l) {
    // display the long version
    const code_data = LoadDataLong(sanitized_code)
    DisplayLong(code_data)
  } else {
    // else just display the short version
    const code_data = LoadDataShort(sanitized_code)
    DisplayShort(code_data)
  }
}