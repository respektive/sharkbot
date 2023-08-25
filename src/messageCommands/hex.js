const { colorEmbed } = require("../helpers/colorEmbed")

module.exports = {
    name: "hex",
    aliases: ["color", "colour"],
    async execute(message, args, argsString) {
        let color;
        if (!args.length) {
            color = "#"+(Math.random()*0xFFFFFF<<0).toString(16)
        } else {
            color = args[0]
        }

        const { embed, file, errorMessage } = colorEmbed(color)

        if(errorMessage) {
            message.channel.send(errorMessage)
            return
        }

        message.channel.send({
            embeds: [embed],
            files: [file]
        })
    }
}