const booru = require("./booru")

module.exports = {
    name: "gabriel",
    aliases: [],
    execute(message, args, argsString) {
        booru.execute(message, args.concat(['gabriel_tenma_white']), argsString)
    }
}