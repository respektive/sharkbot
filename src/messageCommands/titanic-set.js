const { setDiscordID } = require("../helpers/titanic");

module.exports = {
    name: "titanic-set",
    aliases: [],
    async execute(message, args) {
        if (args.length === 0 || isNaN(args[0])) {
            message.channel.send("Please provide a valid user ID.");
            return;
        }

        const userId = args[0];

        try {
            await setDiscordID(message.author.id, userId);
            message.channel.send("Titanic user id set to " + userId);
        } catch (error) {
            console.error("Error setting Titanic ID:", error);
            message.channel.send("Failed to set titanic user id.");
        }
    },
};
