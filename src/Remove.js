// function that removes/uninstalls the application

import fs from "fs"
import path from "path"

export const Remove = () => {
    const app_folder_path = path.join(process.env.HOME, "statucode")

    // try removing it: and it should - i beg you (- w -')
    try {
        if (fs.existsSync(app_folder_path)) {
            fs.rmSync(app_folder_path, {
                recursive: true,
                force: true
            })

            return;
        }
    } catch (error) {
        console.log(`Some Error encountered: ${error}`)
    }
} 