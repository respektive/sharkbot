require("dotenv").config()
const fs = require("fs")
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v9")
const commands = []
const commandFiles = fs.readdirSync("./src/commands").filter(file => file.endsWith(".js"))

commandFiles.forEach(commandFile => {
    const command = require(`./commands/${commandFile}`)
    commands.push(command.data.toJSON())
})

const restClient = new REST({version: "9"}).setToken(process.env.BOT_TOKEN);

(async () => {
    try {
      console.log('Started refreshing application (/) commands.');
  
      await restClient.put(
        Routes.applicationCommands(process.env.DISCORD_APPLICATION_ID),
        { body: commands },
      );
  
      console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
      console.error(error);
    }
  })();