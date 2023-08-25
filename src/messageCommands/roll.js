function randomNumber(n) {
    return Math.floor((Math.random() * n) + 1).toString();
}

module.exports = {
    name: "roll",
    aliases: [],
    execute(message, args, argsString) {
        if (!args.length || isNaN(args[0])) {
            message.channel.send(randomNumber(100));
        } else {
            message.channel.send(randomNumber(args[0]));
        }
    }
}