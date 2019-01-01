const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args, ops,) => {

    if (!message.member.voiceChannel) return message.channel.send({embed: {
        author: {
            name: '\`Something went wrong\`',
        },
        description: '❌ \`You need to be in a voice channel first!\`',
    }});
    
    if (!args[0]) return message.channel.send({embed: {
        author: {
            name: '\`Something went wrong\`'
        },
        description : '❌\`Please input a URL following the command.\`'
    }});
    
    let validate = await ytdl.validateURL(args[0]);
    if (!validate) {
        let commandFile = require(`./search.js`);
        return commandFile.run(bot, message, args, ops);
    }

    let info = await ytdl.getInfo(args[0]);

    let data = ops.active.get(message.guild.id) || {};
    
    if (!data.connection) data.connection = await message.member.voiceChannel.join();
    if (!data.queue) data.queue = [];
    data.guildID = message.guild.id;

    data.queue.push({
        songTitle: info.title,
        requester: message.author.tag,
        url: args[0],
        announceChannel: message.channel.id
    });

    if (!data.dispatcher) playStream(bot, ops, data);
    else {// 
    let { RichEmbed } = require('discord.js')
        message.channel.send(new RichEmbed().setTitle('Added To queue').setDescription(`✅ **Added To Queue:** \`${info.title}\` | **Requested By:** \`${message.author.tag}\` `))

    }

    ops.active.set(message.guild.id, data);

}
async function playStream(bot, ops, data){
let { RichEmbed } = require('discord.js')
let embed = new RichEmbed()
.setTitle(`Now Playing`)
.setDescription(`[${data.queue[0].songTitle}](https://www.youtube.com${data.queue[0].url})`)
.setColor("RANDOM")
    bot.channels.get(data.queue[0].announceChannel).send(embed);


    data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, { filter: 'audioonly' }));
    data.dispatcher.guildID = data.guildID;

    data.dispatcher.once('end', function() {
        end(bot, ops, this);
    })
}
function end(bot, ops, dispatcher) {

    let fetched = ops.active.get(dispatcher.guildID);
    fetched.queue.shift();

    if (fetched.queue.length > 0) {

        ops.active.set(dispatcher.guildID, fetched);

        playStream(bot, ops, fetched);
    } else {
        ops.active.delete(dispatcher.guildID);

        let vc = bot.guilds.get(dispatcher.guildID).me.voiceChannel;
        if (vc) vc.leave();
    }
        
    

}
module.exports.help = {
    name: "play",
    aliases: [],
    description: "Play a specify song by its URL.",
    usage: "play <URL>"
}
