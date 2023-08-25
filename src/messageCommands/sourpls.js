module.exports = {
    name: "sourpls",
    aliases: [],
    execute(message, args, argsString) {
        if (!args.length) {
            message.channel.send('<a:SourPls:393611140178903041>');
        } else {
            message.channel.send(`<a:SourPls:393611140178903041> ${argsString} <a:SourPls:393611140178903041>`)
        }
    }
}