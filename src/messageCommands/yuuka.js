const booru = require("./booru")

module.exports = {
    name: "yuuka",
    aliases: [],
    execute(message, args, argsString) {
        booru.execute(message, args.concat(['kazami_yuuka']), argsString)
    }
}