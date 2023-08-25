const booru = require("./booru")

module.exports = {
    name: "satania",
    aliases: [],
    execute(message, args, argsString) {
        booru.execute(message, args.concat(['kurumizawa_satanichia_mcdowell']), argsString)
    }
}