module.exports = {
    name: "kiss",
    aliases: [],
    execute(message, args, argsString) {
        if(!args.length) {
            message.channel.send('😘🦈');
          } else {
            message.channel.send('😘' + argsString);
          }
    }
}