const { SlashCommandBuilder } = require("@discordjs/builders")
const { gelbooru, konachan, derpi } = require("../helpers/booru")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("booru")
    .setDescription("Search for images using gelbooru!")
    .addStringOption((option) => option.setName("tags").setDescription("Tags separated by spaces."))
    .addStringOption((option) => option.setName("booru").setDescription("Which booru to use.")
    .addChoices(
        { name: 'Gelbooru', value: 'gelbooru' },
        { name: 'Konachan', value: 'konachan' },
        { name: 'Derpibooru', value: 'derpibooru' },
    )),
    async execute(interaction) {
        let tags = interaction.options.getString("tags")
        let booru = interaction.options.getString("booru")
        let tagsArray = []

        if(tags) 
            tagsArray = tagsArray.concat(tags.split(" "))

        let result;
        if (booru === "gelbooru") {
            result = await gelbooru(interaction.channel, tagsArray)
        } else if (booru === "konachan") {
            result = await konachan(interaction.channel, tagsArray)
        } else if (booru === "derpibooru") {
            result = await derpi(tagsArray)
        } else {
            result = {errorMessage: "Booru not found."}
        }

        const errorMessage = result.errorMessage;
        const embed = result.embed;

        if(errorMessage) {
            interaction.reply(errorMessage)
            return
        }

        interaction.reply({
            embeds: [embed]
        })
    }
}