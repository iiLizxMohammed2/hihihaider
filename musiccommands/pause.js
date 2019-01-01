exports.run = async (client, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);
    if (!fetched) return message.channel.send(':warning: No songs are in the queue!');
    if (message.member.voiceChannelID !== message.guild.me.voiceChannelID) return message.channel.send('sorry . You are not in the same channel. Enter the same channel to make the order successful');
    if (fetched.dispatcher.paused) return message.channel.send('\`This Music is already paused.\`');
    fetched.dispatcher.pause();
    message.channel.send(`\`Music has been successfully paused\` ${fetched.queue[0].songTitle}`);
}