const booru = require("./booru")

module.exports = {
    name: "momo",
    aliases: [],
    execute(message, args, argsString) {
        booru.execute(message, args.concat(['chiyoda_momo']), argsString)
    }
}