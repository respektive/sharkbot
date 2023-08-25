const { Say } = require("../helpers/tts")

module.exports = {
    name: "tts",
    aliases: [],
    async execute(message, args, argsString) {
        if (!args.length) {
            message.channel.send("You need to input a message.");
        } else {   
            const URL = await Say(argsString)

            message.channel.send({
                files: [{
                    attachment: URL,
                    name: 'speech.mp3'
                }],
            });
        }
    }
}