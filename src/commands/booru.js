const { SlashCommandBuilder } = require("@discordjs/builders")
const { gelbooru } = require("../helpers/booru")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("booru")
    .setDescription("Search for images using gelbooru!")
    .addStringOption((option) => option.setName("tags").setDescription("Tags separated by spaces.")),
    async execute(interaction) {
        let tags = interaction.options.getString("tags")
        let tagsArray = []

        if(tags) 
            tagsArray = tagsArray.concat(tags.split(" "))

        const { embed, errorMessage } = await gelbooru(interaction.channel, tagsArray)

        if(errorMessage) {
            interaction.reply(errorMessage)
            return
        }

        interaction.reply({
            embeds: [embed]
        })
    }
}