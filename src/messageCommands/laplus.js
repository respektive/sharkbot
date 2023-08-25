const booru = require("./booru")

module.exports = {
    name: "laplus",
    aliases: [],
    execute(message, args, argsString) {
        booru.execute(message, args.concat(['la+_darknesss']), argsString)
    }
}