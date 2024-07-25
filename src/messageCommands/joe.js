const booru = require("./booru")

module.exports = {
    name: "joe",
    aliases: [],
    execute(message, args, argsString) {
        booru.execute(message, args.concat(["ellen_joe"]), argsString)
    }
}