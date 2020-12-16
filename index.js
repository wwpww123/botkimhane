const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "joinout";
const byeChannelName = "joinout";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";
var a = [];

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
  if(message.content == 'ping') {
    message.reply('pong 아모르파티');
  }
  if(message.content == '-') {
    var b = Math.floor(Math.random() * 100)+1;
    message.reply(b);
    a.push(b);
  }
});

client.login(token);