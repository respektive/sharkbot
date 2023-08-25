require("dotenv").config()
const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("openai")
        .setDescription("Use the OpenAI ChatGPT API to generate text.")
        .addStringOption((option) => option.setName("prompt").setDescription("The prompt you want OpenAI to use as a starting point.").setRequired(true)),
    async execute(interaction) {
        const prompt = interaction.options.getString("prompt")
        await interaction.deferReply();

        try {
            const { ChatGPTAPI } = await import("chatgpt")
            const openai = new ChatGPTAPI({ sessionToken: process.env.OPENAI_SESSION_KEY })
            await openai.ensureAuth()

            const response = await openai.sendMessage(prompt)

            interaction.editReply(response.substring(0, 2000))
        } catch(e) {
            interaction.editReply(e.message)
            return
        }
        
    }
}