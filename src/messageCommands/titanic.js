const { getUser } = require("../helpers/titanic");

module.exports = {
    name: "titanic",
    aliases: [],
    async execute(message, args) {
        if (args.length === 0 || isNaN(args[0])) {
            message.channel.send("Please provide a valid user ID.");
            return;
        }

        const userId = args[0];
        const { embed, errorMessage } = await getUser(userId);

        if (errorMessage) {
            message.channel.send(errorMessage);
        } else {
            message.channel.send({ embeds: [embed] });
        }
    },
};
