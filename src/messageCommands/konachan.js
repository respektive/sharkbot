const { konachan } = require("../helpers/booru")

module.exports = {
    name: "konachan",
    aliases: ["k", "kn", "kc"],
    async execute(message, args) {
        const { embed, errorMessage } = await konachan(args)

        if(errorMessage) {
            message.channel.send(errorMessage)
            return
        }

        message.channel.send({embeds: [embed]})
    }
}
