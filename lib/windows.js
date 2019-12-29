const execa = require("execa")
const csv = require("neat-csv")
const commandExists = require("command-exists")

module.exports = async () => {
    if (await commandExists("powershell")) {
        const { stdout: res } = await execa("powershell", ["-ExecutionPolicy", "Bypass", "Get-Process | Where-Object {$_.MainWindowTitle -ne \"\"} | Select-Object MainWindowTitle"])
        return res.split("\r\n").slice(3, -2).map((value) => value.trimRight())
    } else if (await commandExists("cmd")) {
        const { stdout: res } = await execa("tasklist", ["/v", "/fo", "csv"])
        const data = await csv(res)
        return data.filter((val) => val["Window Title"] !== "N/A" &&
            val["Status"] === "Running" &&
            val["Session Name"] === "Console" &&
            val["User Name"] !== "N/A")
    } else {
        throw new ReferenceError("Neither Powershell nor cmd was found on your system!")
    }
}
