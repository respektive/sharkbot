const booru = require("./booru")

module.exports = {
    name: "rin2",
    aliases: [],
    execute(message, args, argsString) {
        booru.execute(message, args.concat(['kagamine_rin', 'kagamine_len']), argsString)
    }
}