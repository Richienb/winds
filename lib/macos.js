const execa = require("execa")

module.exports = async () => {
    const { stdout: res } = await execa("osascript", ["-e", "tell application\"System Events\" to get name of (processes where background only is false)"])
    return res.split(", ")
}
