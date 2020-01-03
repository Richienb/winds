const execa = require("execa")
const commandExists = require("command-exists")

module.exports = async () => {
    if (!(await commandExists("wmctrl"))) throw new ReferenceError("Please install wmctrl first! sudo apt install wmctrl")
    const { stdout: res } = await execa.command("wmctrl -l | awk '{$3=\"\"; $2=\"\"; $1=\"\"; print $0}'")
    return res.split("\n")
}
