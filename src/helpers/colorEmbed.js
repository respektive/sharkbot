const { MessageAttachment, MessageEmbed } = require('discord.js')
const { createCanvas } = require('canvas')

function validHex(color) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
}

function colorEmbed(color) {

    if(!color.includes("#"))
        color = "#" + color

    if(color.length === 4) {
        color = color.substring(1);
        color = color.split('').map(function (hex) {
            return hex + hex;
        }).join('');
        color = "#" + color
    }

    while(color.length < 7) {
        color = color.substring(0, 1) + "0" + color.substring(1);
    }

    if(!validHex(color)) {
        return { errorMessage: "Invalid hex color code." }
    }

    const width = 512
    const height = 128

    const canvas = createCanvas(width, height)
    const context = canvas.getContext('2d')

    context.fillStyle = color
    context.fillRect(0, 0, width, height)

    const file = new MessageAttachment(canvas.toBuffer(),'color.png');

    const embed = new MessageEmbed()
    .setColor(color)
    .setTitle(color)
    .setImage('attachment://color.png')

    return {
        embed,
        file
    }
}

module.exports = {
    colorEmbed
}