const { SlashCommandBuilder } = require("@discordjs/builders")
const { colorEmbed } = require("../helpers/colorEmbed")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("hex")
    .setDescription("Generate random hex color code or show a specified color!")
    .addStringOption((option) => option.setName("colorcode").setDescription("The hex color code to show.")),
    async execute(interaction) {
        let color = interaction.options.getString("colorcode")

        if(!color)
            color = "#"+(Math.random()*0xFFFFFF<<0).toString(16)

        const { embed, file, errorMessage } = await colorEmbed(color)

        if(errorMessage) {
            interaction.reply(errorMessage)
            return
        }

        interaction.reply({
            embeds: [embed],
            files: [file]
        })
    }
}