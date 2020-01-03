const execa = require("execa")

module.exports = async () => {
    const { stdout: res, stderr: error } = await execa("osascript", ["-e", "tell application\"System Events\" to get name of (processes where background only is false)"])
    if (error) throw new Error(error)
    return res.split(", ")
}
