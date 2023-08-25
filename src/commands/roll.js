const { SlashCommandBuilder } = require("@discordjs/builders")

function randomNumber(n) {
    return Math.floor((Math.random() * n) + 1).toString();
}


module.exports = {
    data: new SlashCommandBuilder()
    .setName("roll")
    .setDescription("Roll a number between 0 and your specified number (default is 100)!")
    .addIntegerOption((option) => option.setName("number").setDescription("Maximum number.")),
    async execute(interaction) {
        const number = interaction.options.getInteger("number")
        if(!number) {
            interaction.reply(randomNumber(100))
        } else {
            interaction.reply(randomNumber(number))
        }
    }
}