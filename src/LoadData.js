// function that finds the file for the queried code and returns the read data as a js object

import fs from "fs"

export const LoadData = ( code ) => {
  const code_number = String(code)
    // 
    try {
        const data = fs.readFileSync( `./assets/local_cache/${code_number}-data-short.json`, "utf8" )
        const json = JSON.parse( data )
      // console.log(json)
      // return the the data
      return json
      
    } catch (error) {
    return {
      error: "File missing",
      message: "Update the local cache"
    }
    }
}
