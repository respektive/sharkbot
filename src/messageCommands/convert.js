const convert = require('@bstoots/convert-units')

module.exports = {
    name: "convert",
    aliases: ["conv"],
    async execute(message, args, argsString) {
        let result
        if(!args[1]) {
            message.channel.send("Usage: `!convert value from to`")
            return
        }

        const value = args[0]
        const from = args[1]

        try {
            if(args[2]) {
                const to = args[2]
                result = convert(value).from(from).to(to).toString() + to
            } else {
                res = convert(value).from(from).toBest()
                result = `${res.val}${res.unit}`
            }
        } catch(e) {
            message.channel.send(e.message)
            return
        }
        message.channel.send(result)
    }
}