"use strict"

const platform = require("os").platform()

module.exports = (() => {
    if (platform === "win32") {
        return require("./lib/windows")
    } else if (platform === "darwin") {
        return require("./lib/macos")
    } else if (platform === "linux" || platform === "cygwin") {
        return require("./lib/linux")
    } else {
        throw new Error(`${platform} is not supported!`)
    }
})()
