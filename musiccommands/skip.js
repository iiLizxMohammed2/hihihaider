exports.run = async (client, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);
    if (!fetched) return message.channel.send(':warning: No songs are in the queue!');
    if (message.member.voiceChannelID !== message.guild.me.voiceChannelID) return message.channel.send('sorry . You are not in the same channel. Enter the same channel to make the order successful');
    let userCount = message.member.voiceChannel.members.size;
    let required = Math.ceil(userCount/2);
    if (!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips =[];
    if (fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`\`Sorry, you are already voted to skip!\` ${fetched.queue[0].voteSkips.length}/\`[${required}]\`\`[required]\``);
    fetched.queue[0].voteSkips.push(message.member.id);
    ops.active.set(message.guild.id, fetched);
    if (fetched.queue[0].voteSkips.length >= required) {
        message.channel.send(`Successfully skipped `);
        return fetched.dispatcher.emit('finish');
    }
    message.channel.send(`\`Successfully voted to skip! ${fetched.queue[0].voteSkips.length}/${required}\`required\``)
}