const booru = require("./booru")

module.exports = {
    name: "shion",
    aliases: [],
    execute(message, args, argsString) {
        booru.execute(message, args.concat(['yorigami_shion']), argsString)
    }
}