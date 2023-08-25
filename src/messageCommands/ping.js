module.exports = {
    name: "ping",
    aliases: [],
    execute(message, args, argsString) {
        message.channel.send("Pong!")
    }
}