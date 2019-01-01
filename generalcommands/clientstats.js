const Discord = require('discord.js')
exports.run = async (client, message, args, ops) => {
    if(message.author.bat) return;
    if(!message.channel.guild) return message.reply('This Command only for `Guilds`❌');
    let uptime = client.uptime;
     
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;
 
    while (notCompleted) {
 
        if (uptime >= 8.64e+7) {
 
            days++;
            uptime -= 8.64e+7;
 
        } else if (uptime >= 3.6e+6) {
 
            hours++;
            uptime -= 3.6e+6;
 
        } else if (uptime >= 60000) {
 
            minutes++;
            uptime -= 60000;
 
        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;
 
        }
 
        if (uptime < 1000)  notCompleted = false;
 
    }
    const os = require('os');
    const arch = os.arch()
    let stats = new Discord.MessageEmbed()
    .setTitle(`${client.user.tag} Statistics`)
    .addField("General Stats:", `**Uptime** : \`${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec\`\n **Memory Usage** : \`${(process.memoryUsage().rss / 1048576).toFixed()}MB\`\n **NodeJS-Version** : \` ${process.version}\`\n **Arch** : \`${arch}\`\n ** Plataform** : \`${os.platform}\`\n **Ping** : \`${message.createdTimestamp - message.createdTimestamp}\`\n`, true)
    .addField("Libraris:", `[Discord.js](https://discord.js.org/)`, true)
    .addField("Developers:", `**<@427454716927279105>**`, true)
    .addField("General Info:", `**Servers** : \`${client.guilds.size}\`\n **Channels** : \`${client.channels.size}\`\n **Users** : \`${client.users.size}\`\n`)
    .setTimestamp()
    .setThumbnail(message.guild.avatarURL)
    .setFooter(message.author.tag, message.author.avatarURL)
    message.channel.send(stats)
}