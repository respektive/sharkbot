const booru = require("./booru")

module.exports = {
    name: "flandre",
    aliases: ["flan"],
    execute(message, args, argsString) {
        booru.execute(message, args.concat(['flandre_scarlet']), argsString)
    }
}