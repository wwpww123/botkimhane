const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "joinout";
const byeChannelName = "joinout";
const diceChannelName = "testing";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";


client.on('ready', () => {
  console.log('켰다.');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  var a = new Array();

  if(message.content == 'p') {
    message.reply('pong addtest20');
  }
  if(message.content == '-') {
    var b = Math.floor(Math.random() * 100)+1;
    message.reply(`'의 번호는 : '${b}`);
    a.push(b);
  }  
  if(message.content == 'y') {
    
    const diceChannel = guild.channels.find(channel => channel.name == diceChannelName);

    diceChannel.send(a);
    
  }
});

client.login(token);