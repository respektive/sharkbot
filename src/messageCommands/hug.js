module.exports = {
    name: "hug",
    aliases: [],
    execute(message, args, argsString) {
        if (!args.length) {
            message.channel.send('<:ghosthug2:684910887408107581>🦈<:ghosthug:684910887076757659>');
        } else {
            message.channel.send('<:ghosthug2:684910887408107581>' + argsString + '<:ghosthug:684910887076757659>');
        }
    }
}