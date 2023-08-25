const booru = require("./booru")

module.exports = {
    name: "konata",
    aliases: [],
    execute(message, args, argsString) {
        booru.execute(message, args.concat(['izumi_konata']), argsString)
    }
}