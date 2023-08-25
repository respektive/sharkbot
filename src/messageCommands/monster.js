const booru = require("./booru")

module.exports = {
    name: "monster",
    aliases: [],
    execute(message, args, argsString) {
        booru.execute(message, args.concat(['monster_energy']), argsString)
    }
}