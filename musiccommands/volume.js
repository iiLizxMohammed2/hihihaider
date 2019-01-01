exports.run = async (client, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);
    if (!fetched) return message.channel.send({embed:{
        title: ':warning: Something went wrong!',
        description: ':warning: `No songs are in the queue!`'
    }});
    if (message.member.voiceChannelID !== message.guild.me.voiceChannelID) return message.channel.send({embed:{
        title: `:warning: Something went wrong!`,
        description: 'You are not in the same channel. Enter the same channel to make the order successful'
    }});
    if (isNaN(args[0]) || args[0] >200 || args[0] <0) return message.channel.send({embed:{
        title: ':warning: Something went wrong!',
        description: 'sorry . You should put a number between 200-0',
    }});
    if (!fetched.vol) fetched.vol = 100;
    var from = fetched.vol;
    var to = args[0];
    fetched.vol = args[0]
    fetched.dispatcher.setVolume(args[0]/100);
    message.channel.send({embed:{
        title: 'Volume Command.',
        description: `Volume changed from [\`${from}%\`] to [\`${to}%\`]`
    }});
};