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
    message.reply('pong addtest26');
  }
  if(message.content == '-') {
    var b = Math.floor(Math.random() * 100)+1;
    message.reply(` 번호 : ${b} 기억 잘해라잉 정렬 안된다`);
    a.push(b);
  }  
  if(message.content == '=') {
    message.channel.send(a);
    
  }
  if(message.content == 'r') {
    a = new Array();
    message.channel.send('리셋함');
  }
});

client.login(token);