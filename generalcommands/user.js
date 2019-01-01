const Discord = require('discord.js')
exports.run = async (client, message, args, ops) => {
  
    message.guild.fetchInvites().then(invs => {
let member = client.guilds.get(message.guild.id).members.get(message.author.id);
let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
var moment = require('moment');
let user = message.mentions.users.first();
var men = message.mentions.users.first();
var heg;
if(men) {
heg = men
} else {
heg = message.author
}
var mentionned = message.mentions.members.first();
var h;
if(mentionned) {
h = mentionned
} else {
h = message.member
}
moment.locale('ar-TN');
var id = new  Discord.MessageEmbed()

.setThumbnail(message.author.avatarURL)
                    .setColor('#000000')
                    .setColor('#36393e')
.addField(':The date of your entry into Discord',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(':The date of your entry into Discord-Server', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)
.addField(`:Number of invitations`, `**${inviteCount}**`)
.setTimestamp()
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.send(id);
})


}