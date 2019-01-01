const Discord = require('discord.js')
exports.run = async (cleint, message, args, ops) => {
    let o = `${message.guild.members.filter(m=>m.presence.status == 'online').size}`
    let i = `${message.guild.members.filter(m=>m.presence.status == 'idle').size}`
    let d = `${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`
    let of = `${message.guild.members.filter(m=>m.presence.status == 'offline').size}`
    let all = `${message.guild.memberCount}`
    let bots = message.guild.members.filter(m=>m.user.bot);
    let embed = new Discord.MessageEmbed()
    .setTitle(message.guild.name)
    .setThumbnail(message.author.avatarURL)
    .addField('Member count:', `**• Total Online members** \`${o}\`\n **• Total DND members** \`${d}\`\n **• Total Idle members** \`${i}\`\n **• Total Offline members**\`${of}\`\n **• Total bots** \`${bots}\`\n **• Total Members** \`${all}\`\n`)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.avatarURL);

    message.channel.send(embed)
}