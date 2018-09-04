const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require('ms');
const fs = require('fs');
const prefix = '!'
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` LizxCommunit`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
client.on('message', msg => {
  if (msg.content === 'خرا') {
    msg.reply('من اناج حيدر');
  }
});
client.on('message', msg => {
  if (msg.content === 'كلب') {
    msg.reply('ابن الخرا');
  }
});
client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('انيج حسين');
  }
});









client.login(process.env.BOT_TOKEN);
