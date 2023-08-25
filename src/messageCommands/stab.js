module.exports = {
    name: "stab",
    aliases: [],
    execute(message, args, argsString) {
        if (!args.length) {
            message.channel.send('🦈<:zeldamurder:678646835094487051>');
        } else {
            message.channel.send(argsString + '<:zeldamurder:678646835094487051>');
        }
    }
}