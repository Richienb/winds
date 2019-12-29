"use strict"

const platform = require("os").platform()

module.exports = () => {
    if (platform === "win32") {
        return require("./lib/windows")()
    } else if (platform === "darwin") {
        return require("./lib/macos")()
    }
}
