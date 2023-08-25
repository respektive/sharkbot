const booru = require("./booru")

module.exports = {
    name: "petra",
    aliases: [],
    execute(message, args, argsString) {
        booru.execute(message, args.concat(['petra_gurin']), argsString)
    }
}