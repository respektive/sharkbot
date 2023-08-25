const SHARK_FACTS = require('../shark_facts');

module.exports = {
    name: "sharkfact",
    aliases: [],
    execute(message, args, argsString) {
        const fact = SHARK_FACTS[Math.floor(Math.random() * SHARK_FACTS.length)]
        const attachments = fact.photo_url ? [{
            attachment: fact.photo_url,
            name: 'shark.png'
        }] : []

        message.channel.send({
            files: attachments,
            content:`**${fact.title}**\n\`\`\`${fact.text}\`\`\``,
        })
    }
}