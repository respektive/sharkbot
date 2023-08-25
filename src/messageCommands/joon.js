const booru = require("./booru")

module.exports = {
    name: "joon",
    aliases: [],
    execute(message, args, argsString) {
        booru.execute(message, args.concat(["yorigami_jo'on"]), argsString)
    }
}