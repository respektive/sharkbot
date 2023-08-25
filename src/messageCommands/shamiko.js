const booru = require("./booru")

module.exports = {
    name: "shamiko",
    aliases: [],
    execute(message, args, argsString) {
        booru.execute(message, args.concat(['yoshida_yuuko_(machikado_mazoku)']), argsString)
    }
}