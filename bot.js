const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const ownerID = '427454716927279105';
const shorten = require('isgd');
const search = require('yt-search')
const active = new Map();
const moment = require('moment')
const ytdl = require('ytdl-core');
const prefix = "!";
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`By : IxMohammed#9906`,"http://twitch.tv/S-F")
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


  client.on('message', async message => {
  if (message.content.slice(prefix.length).split( ' ' )) {
  }
  if (message.author.bot) return;
   let args = message.content.slice(prefix.length).split( ' ' );
   let cmd = args.shift().toLowerCase();
   if (!message.content.startsWith(prefix)) return;
   try {
       
     let command = message.content.toLowerCase().split(' ')[0];
        delete require.cache[require.resolve(`./musiccommands/${cmd}.js`)];
        let commandFile = require(`./musiccommands/${cmd}.js`);
     let ops = {
     ownerID: ownerID,
     active: active
     };
        commandFile.run(client, message, args, ops, active);
   } catch (e) {

   }
  })
  
  
    client.on('message', async message => {
  if (message.content.slice(prefix.length).split( ' ' )) {
  }
  if (message.author.bot) return;
   let args = message.content.slice(prefix.length).split( ' ' );
   let cmd = args.shift().toLowerCase();
   if (!message.content.startsWith(prefix)) return;
   try {
       
     let command = message.content.toLowerCase().split(' ')[0];
        delete require.cache[require.resolve(`./generalcommands/${cmd}.js`)];
        let commandFile = require(`./generalcommands/${cmd}.js`);
     let ops = {
     ownerID: ownerID,
     active: active
     };
        commandFile.run(client, message, args, ops, active);
   } catch (e) {

   }
  })
  
  
      client.on('message', async message => {
  if (message.content.slice(prefix.length).split( ' ' )) {
  }
  if (message.author.bot) return;
   let args = message.content.slice(prefix.length).split( ' ' );
   let cmd = args.shift().toLowerCase();
   if (!message.content.startsWith(prefix)) return;
   try {
       
     let command = message.content.toLowerCase().split(' ')[0];
        delete require.cache[require.resolve(`./funcommands/${cmd}.js`)];
        let commandFile = require(`./funcommands/${cmd}.js`);
     let ops = {
     ownerID: ownerID,
     active: active
     };
        commandFile.run(client, message, args, ops, active);
   } catch (e) {

   }
  })
client.login(process.env.BOT_TOKEN);
