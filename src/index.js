require("dotenv").config()
const fs = require('fs');
const levenshtein = require('js-levenshtein');
const { prefix } = require('../config.json');
const { Client, Collection, Intents, ClientUser } = require("discord.js")

const client = new Client({ allowedMentions: { parse: ['users', 'roles'], repliedUser: true }, intents: [Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES] })
client.commands = new Collection()
const messageCommands = new Collection()

const commandFiles = fs.readdirSync("./src/commands").filter(file => file.endsWith(".js"))
const messageCommandFiles = fs.readdirSync('./src/messageCommands').filter(file => file.endsWith('.js'))

commandFiles.forEach(commandFile => {
    const command = require(`./commands/${commandFile}`)
    client.commands.set(command.data.name, command)
})

messageCommandFiles.forEach(messageCommandFile => {
    const messageCommand = require(`./messageCommands/${messageCommandFile}`)
    messageCommands.set(messageCommand.name, messageCommand)
})

client.on("interactionCreate", async (interaction) => {
    if(!interaction.isCommand()) return

    const command = client.commands.get(interaction.commandName)

    if(command) {
        try {
            await command.execute(interaction)
        }
        catch(error) {
            console.error(error)

            if(interaction.deferred || interaction.replied) {
                interaction.editReply("Something went wrong...")
            } else {
                interaction.reply("Something went wrong...")
            }
        }
    }
})

client.on("messageCreate", async (message) => {
    if (!message.content.startsWith(prefix)
    || (message.author.bot && message.webhookID == null)) return;

    const args = message.content.slice(prefix.length).split(/ +/)
		.map(a => a.replace(/\\/g, ''));
    const commandName = args.shift().toLowerCase();
    const argsString = args.join(" ");
    let command = messageCommands.get(commandName) || messageCommands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (levenshtein("shark", commandName) < 3) {
        command = messageCommands.get("shark")
    }

    if(command) {
        try {
            await command.execute(message, args, argsString)
        } 
        catch (err) {
            console.error(err)
            message.channel.send("Something went wrong...")
        }    
    }
});

client.on("ready", () => {
    console.log(`Bot has started, with 
    ${client.users.cache.size} users, in 
    ${client.channels.cache.size} channels of 
    ${client.guilds.cache.size} guilds.`);
});

client.login(process.env.BOT_TOKEN);
