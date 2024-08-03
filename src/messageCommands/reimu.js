const booru = require("./booru");

module.exports = {
    name: "reimu",
    aliases: [],
    execute(message, args, argsString) {
        booru.execute(message, args.concat(["hakurei_reimu"]), argsString);
    },
};
