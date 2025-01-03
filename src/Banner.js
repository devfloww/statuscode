// importing dependencies
import figlet from "figlet"
import chalk from "chalk"

// tags
import { warning } from "./helper_functions/Tags.js"


// the figety thingy -)
const httpInfoBanner = figlet.textSync("httpinfo", {
  font: "ANSI Shadow",
  horizontalLayout: "narrow",
  verticalLayout: "narrow",
  width: 100,
  whitespaceBreak: true,
})
// some info abou the author
const aboutAuthorInfo = `
- Author: ${chalk.bold.blue("devfloww")}
- Github: ${chalk.underline.blue("/devfloww")}
- Twitter: ${chalk.underline.blue("@devfloww")}
`

// info on hoe to use the tool
const howToUseInfo = 
`${warning} - Usage:
- help: ${chalk.green("httpinfo")} [-h | --help]
- lookup: ${chalk.green("httpinfo")} [-c | --code] ${chalk.blue("<code>")} [-l | --long]
`

export const showBanner = () => {
  
  return `${chalk.underline.magenta(httpInfoBanner)}
  ${aboutAuthorInfo}
  ${howToUseInfo}
  `
  }

