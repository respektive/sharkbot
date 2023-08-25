const booru = require("./booru")

module.exports = {
    name: "rin",
    aliases: [],
    execute(message, args, argsString) {
        booru.execute(message, args.concat(['shima_rin']), argsString)
    }
}