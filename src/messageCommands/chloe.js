const booru = require("./booru")

module.exports = {
    name: "chloe",
    aliases: [],
    execute(message, args, argsString) {
        booru.execute(message, args.concat(['sakamata_chloe']), argsString)
    }
}