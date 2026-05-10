const { getUser, getUserID } = require("../helpers/titanic");

module.exports = {
    name: "titanic",
    aliases: [],
    async execute(message, args) {
        let userId;
        if (args.length === 0) {
            try {
                userId = await getUserID(message.author.id);
            } catch (error) {
                console.error("Error fetching titanic user id:", error);
                message.channel.send("Failed to fetch titanic user id. Please set it using `titanic-set <user_id>`.");
                return;
            }
        } else if (isNaN(args[0]) && args[0].startsWith("<@") && args[0].endsWith(">")) {
            const discordId = args[0].slice(2, -1);
            try {
                userId = await getUserID(discordId);
                if (!userId) {
                    message.channel.send("The mentioned user has not set their titanic id.");
                    return;
                }
            } catch (error) {
                console.error("Error fetching titanic user id:", error);
                message.channel.send("Failed to fetch titanic user id.");
                return;
            }
        } else {
            userId = args[0];
        }

        if (!userId) {
            message.channel.send("Please provide a valid user id or mention a user.");
            return;
        }

        const { embed, errorMessage } = await getUser(userId);

        if (errorMessage) {
            message.channel.send(errorMessage);
        } else {
            message.channel.send({ embeds: [embed] });
        }
    },
};
