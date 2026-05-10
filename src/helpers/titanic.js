const { DatabaseSync } = require("node:sqlite");
const { MessageEmbed } = require("discord.js");

const db = new DatabaseSync("titanic.db");

async function initDatabase() {
    await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            discord_id TEXT PRIMARY KEY,
            titanic_id TEXT NOT NULL
        )
    `);
}

async function setDiscordID(discord_id, titanic_id) {
    const insert = db.prepare(
        "INSERT INTO users (discord_id, titanic_id) VALUES (?, ?) ON CONFLICT(discord_id) DO UPDATE SET titanic_id=excluded.titanic_id",
    );
    await insert.run(discord_id, titanic_id);
}

async function getUserID(discord_id) {
    const select = db.prepare("SELECT titanic_id FROM users WHERE discord_id = ?");
    const row = await select.get(discord_id);
    return row ? row.titanic_id : null;
}

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
                url: `https://titanic.sh/u/${data.id}`,
            })
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

initDatabase();

module.exports = {
    getUser,
    setDiscordID,
    getUserID,
};
