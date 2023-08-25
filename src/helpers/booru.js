require("dotenv").config()
const fs = require('fs');
const Booru = require('booru');
const blacklist = new Set(JSON.parse(fs.readFileSync('./blacklist').toString()));
const { MessageEmbed } = require('discord.js')
const gb = Booru.forSite('gb', { api_key: process.env.GELBOORU_API_KEY, user_id: process.env.GELBOORU_USER_ID })

async function gelbooru(channel, tags) {
    if(!channel.nsfw)
        tags.push("-rating:explicit", "-rating:questionable")
    let tagString = tags.join(', ')
    let tagArray = tags.concat(Array.from(blacklist).map(i=>'-'+i))

    const posts = await gb.search(tagArray, {limit: 1, random: true})
    console.log(gb.getSearchUrl({tags: tagArray, limit: 1}))

    if(posts.length == 0)
        return { errorMessage: `No posts found for tags ${tagString}` }
    
    const post = posts[0]
    let postUrl = post.postView

    if(tags.length > 0)
        postUrl += '&tags=' + tags.join('+')

    const embed = new MessageEmbed()
    .setColor("#337ab7")
    .setTitle(post.id)
    .setURL(postUrl)
    .setImage(post.fileUrl)
    .setFooter({
        text: `Size: ${post.width}x${post.height} | Posted: ${post.createdAt.toISOString().split('.')[0].replace("T", " ")}`
    })

    return { embed }
}

module.exports = {
    gelbooru
}