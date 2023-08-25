const { SlashCommandBuilder } = require("@discordjs/builders")
const convert = require('@bstoots/convert-units')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("convert")
    .setDescription("Convert between units!")
    .addStringOption((option) => option.setName("value").setDescription("The value you want to convert.").setRequired(true))
    .addStringOption((option) => option.setName("from").setDescription("The unit you want to convert from.").setRequired(true))
    .addStringOption((option) => option.setName("to").setDescription("The unit you want to convert to.")),
    async execute(interaction) {
        let result

        const value = interaction.options.getString("value")
        const from = interaction.options.getString("from")

        try {
            if(interaction.options.getString("to")) {
                const to = interaction.options.getString("to")
                result = convert(value).from(from).to(to).toString() + to
            } else {
                res = convert(value).from(from).toBest()
                result = `${res.val}${res.unit}`
            }
        } catch(e) {
            interaction.reply(e.message)
            return
        }
        interaction.reply(result)
    }
}