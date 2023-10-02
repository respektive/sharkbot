const { derpi } = require("../helpers/booru")

module.exports = {
    name: "derpibooru",
    aliases: ["d", "dp", "derpi"],
    async execute(message, args) {
        const { embed, errorMessage } = await derpi(args)

        if(errorMessage) {
            message.channel.send(errorMessage)
            return
        }

        message.channel.send({embeds: [embed]})
    }
}
