require("dotenv").config()

module.exports = {
    name: "openai",
    aliases: ["ai"],
    async execute(message, args, argsString) {
        if (!args.length) {
            message.channel.send("You need to input a prompt.");
        } else {   

            const { ChatGPTAPI } = await import("chatgpt")
            const openai = new ChatGPTAPI({ sessionToken: process.env.OPENAI_SESSION_KEY })
            await openai.ensureAuth()

            const response = await openai.sendMessage(argsString)

            message.channel.send(response.substring(0, 2000))
        }
    }
}