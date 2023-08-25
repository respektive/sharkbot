module.exports = {
    name: "boop",
    aliases: ["poke"],
    execute(message, args, argsString) {
        if (!args.length) {
            message.channel.send('👉🦈');
        } else {
            message.channel.send('👉' + argsString);
        }
    }
}