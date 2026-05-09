const { MessageEmbed } = require("discord.js");

async function getUser(user_id) {
    const url = `https://api.titanic.sh/users/${user_id}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        let play_time = `${Math.floor(Number(data.stats[0].playtime) / 3600)}h`;
        play_time += ` ${Math.floor((Number(data.stats[0].playtime) % 3600) / 60)}m`;

        const embed = new MessageEmbed()
            .setColor("#ffd6f3")
            .setAuthor({
                name: `${data.name} – ${data.stats[0].pp}pp (#${data.rankings[0].performance.global}) (${data.country}#${data.rankings[0].performance.country})`,
                iconURL: `https://osu.titanic.sh/a/${data.id}`,
            })
            .setURL(`https://titanic.sh/u/${data.id}`)
            .setThumbnail(`https://osu.titanic.sh/a/${data.id}`)
            .addFields(
                {
                    name: "Ranked Score",
                    value: `${data.stats[0].rscore.toLocaleString()} (#${data.rankings[0].rscore.global})`,
                    inline: true,
                },
                {
                    name: "Total Score",
                    value: `${data.stats[0].tscore.toLocaleString()} (#${data.rankings[0].tscore.global})`,
                    inline: true,
                },
                { name: "Play Count", value: `${data.stats[0].playcount.toLocaleString()}`, inline: true },
                { name: "Play Time", value: `${play_time}`, inline: true },
                {
                    name: "Clears",
                    value: `${data.rankings[0].clears.value.toLocaleString()} (#${data.rankings[0].clears.global})`,
                    inline: true,
                },
                { name: "Accuracy", value: `${(data.stats[0].acc * 100).toFixed(2)}%`, inline: true },
            )
            .setFooter({
                text: `Joined: ${new Date(data.created_at).toLocaleDateString("en-GB", { weekday: undefined, year: "numeric", month: "long", day: "numeric" })} | Last active: ${new Date(data.latest_activity).toLocaleDateString("en-GB", { weekday: undefined, year: "numeric", month: "long", day: "numeric" })}`,
            });

        return { embed };
    } catch (error) {
        console.error("Error fetching user data:", error);
        return { errorMessage: "Failed to fetch user data." };
    }
}

module.exports = {
    getUser,
};
