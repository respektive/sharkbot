const booru = require("./booru")

module.exports = {
    name: "momo2",
    aliases: [],
    execute(message, args, argsString) {
        booru.execute(message, args.concat(['momo_velia_deviluke']), argsString)
    }
}