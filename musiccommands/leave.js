exports.run = (client, message, args, ops) => {
    if (!message.member.voiceChannel) return message.channel.send('Please connect to voice channel.');
    if (!message.guild.me.voiceChannel) return message.channel.send('_Sorry_ , the bot isn\'t  connected to the channel.');
    if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('_Sorry_ , you aren\'t connected to the same channle.');
    message.guild.me.voiceChannel.leave();
    message.channel.send('leaving Channle>>>>>')
}