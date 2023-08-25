const senzawa = require('../senzawa');

module.exports = {
    name: "senzawa",
    aliases: [],
    execute(message, args, argsString) {
        message.channel.send(senzawa[Math.floor(Math.random() * senzawa.length)]);
    }
}