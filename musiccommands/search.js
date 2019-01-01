const search = require('yt-search')
const Discord = require('discord.js');
exports.run = (client, message, args, ops) => {
    search(args.join(' '), function(err, res){
        if (err) return message.channel.send('Sorry, someting went wrong.')
        let videos = res.videos.slice(0, 10);
        let resp = '';
        for (var i in videos) {
            resp += `\`[${parseInt(i)+1}]\` : [${videos[i].title}](https://www.youtube.com${videos[i].url})\n`;
        }
        resp += `\n\`choose a number between \`1-${videos.length}\``;
        
let { RichEmbed } = require('discord.js')
let embedsearch = new Discord.RichEmbed()
.setColor('#36393e')
.setTitle('Search Command.')
.setDescription(resp)
.setTimestamp()
.setFooter(message.author.tag, message.author.avatarURL)
message.channel.send(embedsearch)

        const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content >0;
        const collector = message.channel.createMessageCollector(filter);
        collector.videos = videos;
        collector.once('collect', function(m) {
            let commandFile = require(`./play.js`);
            commandFile.run(client, message, [this.videos[parseInt(m.content)-1].url], ops)
        });
    });
}