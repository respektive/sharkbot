const booru = require("./booru")

module.exports = {
    name: "megu",
    aliases: ["megumin"],
    execute(message, args, argsString) {
        booru.execute(message, args.concat(['megumin']), argsString)
    }
}