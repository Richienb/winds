"use strict"

const platform = require("os").platform()

module.exports = (() => {
    if (platform === "win32" || platform === "cygwin") return require("./lib/windows")
    if (platform === "darwin") return require("./lib/macos")
    if (platform === "linux") return require("./lib/linux")
    throw new Error(`${platform} is not supported!`)
})()
