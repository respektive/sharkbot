const sharks = require('../sharks');

module.exports = {
    name: "shark",
    aliases: [],
    execute(message, args, argsString) {
        if (!args.length) {
            message.channel.send(sharks[Math.floor(Math.random() * sharks.length)].url);
        } else {
            let results = sharks.filter(a => a.tags.includes(args[0]));
            if (results.length == 0) {
                // no shark found ;-;
                message.channel.send(sharks[Math.floor(Math.random() * sharks.length)].url + ' no shark found ;-;');
                return;
            }
            message.channel.send(results[Math.floor(Math.random() * results.length)].url);
        }
    }
}