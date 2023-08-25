const booru = require("./booru")

module.exports = {
    name: "aqua",
    aliases: [],
    execute(message, args, argsString) {
        booru.execute(message, args.concat(['minato_aqua']), argsString)
    }
}