module.exports = {
    name: "lick",
    aliases: [],
    execute(message, args, argsString) {
        if (!args.length) {
            message.channel.send('<a:lick:544806017066860544>🦈<a:lickright:548230448598482974>');
        } else {
            message.channel.send('<a:lick:544806017066860544>' + argsString + '<a:lickright:548230448598482974>');
        }
    }
}