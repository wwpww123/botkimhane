const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "joinout";
const byeChannelName = "joinout";
const diceChannelName = "testing";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";
var a = new Array();

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
  

  if(message.content == 'p') {
    message.reply('pong addtest38');
  }
  if(message.content == '-') {
    var b = Math.floor(Math.random() * 100)+1;
    message.reply(` 번호 : ${b} 기억 잘해라잉 정렬 안된다`);
    a.push(`${b}`);
  }  
  if(message.content == '=') {
    
    let result = a.sort((u,k) => k-u);
    for(var i = 0; i < result.length; i++){
      message.channel.send(`${i+1}등 번호는 ${a[i]} 입니다`)
    }
    
  }
  if(message.content == 'r') {
    a = new Array();
    message.channel.send('리셋함');
  }
  if(message.content == '명령어'){
    message.channel.send(' -는 숫자뽑기 \n r은 리셋 \n = 는 정렬 \n 중복검사 안됌 누구꺼 번호인지 멘션안됌 ^^');   
   
  }

  if(message.content == 'k'){
    var b = Math.floor(Math.random() * 100)+1;
    message.reply(` 번호 : ${b} 기억 잘해라잉 정렬 안된다`);
    k = message.author.id;
    a.push(`${b} < <!@${k}> > `)
    
  }
  if(message.content == '/'){
    var b = Math.floor(Math.random() * 100)+1;
    message.reply(` 번호 : ${b} 기억 잘해라잉 정렬 안된다`);
    k = message.author.id;
    message.channel.send(k);
    format
    
  }
  if(message.content == '묵찌빠'){
    var mjf = Math.floor(Math.random() * 2)+1;
    if( mjf = 1){
      message.reply(` 찌찌찌찌찌찌찌뽕~`);
      
    }
    if(mjf = 2){
      message.reply(` 빠빠빠빠빠빠삐삐빠삐코`);
    }
    if(mjf = 3){
      message.reply(`무무무무도토리묵묵`);
    }

  }
});

client.login(token);