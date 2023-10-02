const { gelbooru } = require("../helpers/booru")

module.exports = {
    name: "booru",
    aliases: ["b", "gb", "gelbooru"],
    async execute(message, args) {
        if (args.includes('rating:e') || args.includes('rating:q') || args.includes('rating:questionable') || args.includes('rating:explicit')) {
            message.channel.send('no');
        } else {
            const { embed, errorMessage } = await gelbooru(message.channel, args)

            if(errorMessage) {
                message.channel.send(errorMessage)
                return
            }

            message.channel.send({embeds: [embed]})
        }
    }
}