const l = console.log
const stdout = process.stdout
const stdin = process.stdin
const stderr = process.stderr
const rdl = require("readline")

class MultiSel {
    start() {
        stdin.setRawMode(true)
        stdin.resume()
        stdin.setEncoding('utf-8')
        this.hideCursor()
        stdin.on("data", this.pn(this))

    }
    pn() {}

}


module.exports = MultiSel