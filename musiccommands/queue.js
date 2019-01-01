exports.run = async (client, message, args, ops, Discord) => {
    let fetched = ops.active.get(message.guild.id);
    if (!fetched) return message.channel.send({embed: {
        title: ':warning: Someting went wrong!',
        description: ':warning: No songs are in the queue!',
    }});
    let queue = fetched.queue;
    let NowPlaying = queue[0];
    let resp = {};
    for (var i =1; i < queue.length; i++) {
    resp += `:musical_note: [**Now Playing**] [\`${NowPlaying.songTitle}\`] By:\`${NowPlaying.requester}\`\n\n`;
    resp += `⏳[**Queue**] \`${i}\`- [\`${queue[i].songTitle}\`] - \`${queue[i].requester}\`\n`;
        
    }
    let { RichEmbed } = require('discord.js');
    message.channel.send(new RichEmbed().setDescription(resp));

};