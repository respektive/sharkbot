const booru = require("./booru")

module.exports = {
    name: "miko",
    aliases: [],
    execute(message, args, argsString) {
        booru.execute(message, args.concat(['yotsuya_miko']), argsString)
    }
}