const booru = require("./booru")

module.exports = {
    name: "gura",
    aliases: [],
    execute(message, args, argsString) {
        booru.execute(message, args.concat(['gawr_gura']), argsString)
    }
}