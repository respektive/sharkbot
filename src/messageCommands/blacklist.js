const fs = require('fs');
let blacklist = new Set(JSON.parse(fs.readFileSync('./blacklist').toString()));

module.exports = {
    name: "blacklist",
    aliases: [],
    execute(message, args, argsString) {
		if (args[0] === 'add') {
			for (i of args.splice(1))
				blacklist.add(i);
			fs.writeFile('./blacklist', JSON.stringify(Array.from(blacklist)),()=>{});
			message.react('✅');
		} else if (args[0] === 'remove') {
			for (i of args.splice(1))
				blacklist.delete(i);
			fs.writeFile('./blacklist', JSON.stringify(Array.from(blacklist)),()=>{});
			message.react('✅');
	    } else {
	    	message.channel.send(`currently blacklisted tags:\n${Array.from(blacklist).join(', ')}\n` + 'type `blacklist add` or `blacklist remove` to add/remove tags');
	    }
    }
}