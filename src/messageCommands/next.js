const axios = require("axios");

async function getNext(i){
    try {
        const response = await axios.get('https://osu-rank-times.herokuapp.com/posts');
        if (response.status = 200) {
            let next = response.data[i];
            if (!next) {
                next = response.data.pop()
            }
            return 'https://osu.ppy.sh/beatmapsets/' + next.id +' '+ next.rank_time + 'UTC'
        }
        return 'api timed out or something idk.'
    } catch(e) {
        console.error(e);
        return 'api timed out or something idk.'
    }
}

module.exports = {
    name: "next",
    aliases: ["nextmap"],
    async execute(message, args, argsString) {
        try {
            let next_map
            if (!args.length || isNaN(args[0])) {
                next_map = await getNext(0)
            } else {
                next_map = await getNext(args[0]-1)
            }
            message.channel.send(next_map)
        } catch(e) {
            console.error(e)
            message.channel.send('great you broke it.')
        }
    }
}