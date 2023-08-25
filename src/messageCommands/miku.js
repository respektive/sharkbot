const booru = require("./booru")

module.exports = {
    name: "miku",
    aliases: [],
    execute(message, args, argsString) {
        booru.execute(message, args.concat(['hatsune_miku']), argsString)
    }
}