const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.argv.length == 2 ? process.env.token : "";
const moment = require("moment");
require("moment-duration-format");
const welcomeChannelName = "🌈ㅣ어서오세요";
const byeChannelName = "💧ㅣ안녕히가세요";
const welcomeChannelComment = "**사랑이 싹트는 곳에 오신것을 환영합니다아~!**";
const byeChannelComment = "**다음에 또만나요오오ㅜㅜㅜㅜ**";

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: '/help 로 도움말을 볼 수 있습니다.' }, status: 'online' })
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "귀한분"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == 'ping') {
    return message.reply('pong');
  }

  if(message.content.startsWith('/추첨')) {
    message.channel.send('추첨중..')
    var te = message.content.substring(3)
    var text2 = message.content.split(' ');
    var rper = Math.floor(Math.random()*2);

    if (te < 3){
      message.channel.send("/추첨 변수1 변수2 으로 입력해주세요.")
      return;
    }
    if (rper == 0) {
      message.channel.send(" 추첨 결과는"+text2[1]+"입니다.")
    }

    if(rper == 1) {
      message.channel.send(" 추첨 결과는"+text2[2]+"입니다.")
    }
  }

  if(message.content.startsWith('/마리상태')) {
    var rper = Math.floor(Math.random()*4);

    if (rper == 0) {
      let embed = new Discord.RichEmbed()
      embed.setColor('#fcfca7')
      embed.setAuthor('세상에서 제일 아름다움')
      message.channel.send(embed);
    }

    if(rper == 1) {
      let embed = new Discord.RichEmbed()
      embed.setColor('#c4b0ff')
      embed.setAuthor('이쁘고 귀엽고 사랑스러움')
      message.channel.send(embed);
    }

    if(rper == 2) {
      let embed = new Discord.RichEmbed()
      embed.setColor('#ffc2e6')
      embed.setAuthor('용주랑 데이트중')
      message.channel.send(embed);
    }

    if(rper == 3) {
      let embed = new Discord.RichEmbed()
      embed.setColor('#ffa545')
      embed.setAuthor('옵치 하고싶어 하는 중')
      message.channel.send(embed);
    }
  }

  if(message.content.startsWith('/으네상태')) {
    var rper = Math.floor(Math.random()*5);

    if(rper == 0) {
      let embed = new Discord.RichEmbed()
      embed.setColor('#bb00ff')
      embed.setAuthor('취함(자러가.. -성이름)')
      message.channel.send(embed);
    }

    if(rper == 1) {
      let embed = new Discord.RichEmbed()
      embed.setColor('#ff0000')
      embed.setAuthor('화남화남(대피하세여 여러분)')
      message.channel.send(embed);
    }

    if(rper == 2) {
      let embed = new Discord.RichEmbed()
      embed.setColor('#dc7aff')
      embed.setAuthor('승우랑 데이트중')
      message.channel.send(embed);
    }

    if(rper == 3) {
      let embed = new Discord.RichEmbed()
      embed.setColor('#b3b3b3')
      embed.setAuthor('졸림(암튼 졸림 아니더라도 졸림)')
      message.channel.send(embed);
    }

    if(rper == 4) {
      let embed = new Discord.RichEmbed()
      embed.setColor('#ffffff')
      embed.setAuthor('안졸림(안졸릴걸..? 암튼  안졸림)')
      message.channel.send(embed);
    }
  }

  if(message.content.startsWith('/미르상태')) {
    var rper = Math.floor(Math.random()*3);

    if(rper == 0) {
      let embed = new Discord.RichEmbed()
      embed.setColor('#ffeb0a')
      embed.setAuthor('야구하는중 ')
      message.channel.send(embed);
    }

    if(rper == 1) {
      let embed = new Discord.RichEmbed()
      embed.setColor('#ffeb0a')
      embed.setAuthor('쉬는중')
      message.channel.send(embed);
    }

    if(rper == 2) {
      let embed = new Discord.RichEmbed()
      embed.setColor('#ffeb0a')
      embed.setAuthor('게임하는증')
      message.channel.send(embed);
    }
  }

  if(message.content == '/st') {
    let embed = new Discord.RichEmbed()
    let img = 'https://cdn.discordapp.com/attachments/669935495182286882/757136269376618566/-.png';
    var duration = moment.duration(client.uptime).format(" D [일], H [시간], m [분], s [초]");
    embed.setColor('#186de6')
    embed.setAuthor('마리봇 서버정보', img)
    embed.addField('RAM 사용량',    `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true);
    embed.addField('구동 시간', `${duration}`, true);
    embed.addField('사용자 수',         `${client.users.size.toLocaleString()}`, true);
    embed.addField('봇이 있는 서버',       `${client.guilds.size.toLocaleString()}`, true);
    // embed.addField('channel',      `${client.channels.size.toLocaleString()}`, true);
    embed.addField('자바 버전',   `v${Discord.version}`, true);
    embed.addField('노드 버전',         `${process.version}`, true);
    embed.setFooter(`MG42`)
    
    let arr = client.guilds.array();
    let list = '';
    list = `\`\`\`css\n`;
    
    for(let i=0;i<arr.length;i++) {
      // list += `${arr[i].name} - ${arr[i].id}\n`
      list += `${arr[i].name}\n`
    }
    list += `\`\`\`\n`
    embed.addField('list:',        `${list}`);

    embed.setTimestamp()
    message.channel.send(embed);
  }

  if(message.content == '/test') {
    let img = 'https://cdn.discordapp.com/attachments/669935495182286882/757136269376618566/-.png';
    let embed = new Discord.RichEmbed()
      .setTitle('타이틀')
      .setURL('http://www.naver.com')
      .setAuthor('설명', img, 'http://www.naver.com')
      .setThumbnail(img)
      .addBlankField()
      .addField('Inline field title', 'Some value here')
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here1\nSome value here2\nSome value here3\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('부가설명', img)

    message.channel.send(embed)
  } else if(message.content == '/help') {
    let helpImg = 'https://cdn.discordapp.com/attachments/669935495182286882/757136269376618566/-.png';
    let commandList = [
      {name: '/help', desc: '도움말'},
      {name: '/st', desc: '봇 상태 보기'},
      {name: 'ping', desc: '현재 핑 상태'},
      {name: '/전체공지', desc: 'dm으로 전체 공지 보내기'},
      {name: '/전체공지2', desc: 'dm으로 전체 embed 형식으로 공지 보내기'},
      {name: '/청소', desc: '텍스트 지움'},
      {name: '/초대코드', desc: '해당 채널의 초대 코드 표기'},
      {name: '/초대코드2', desc: '봇이 들어가있는 모든 채널의 초대 코드 표기'},
      {name: '/추첨', desc: '2가지 선택지중 하나를 골라줍니다.'},
      {name: '/마리상태', desc: '마리의 상태는?'},
      {name: '/으네상태', desc: '으네의 상태는?'},
      {name: '/미르상태', desc: '미르의 상태는?'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('마리봇 도움말', helpImg)
      .setColor('#186de6')
      .setFooter(`MG42`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  } else if(message.content == '/초대코드2') {
    client.guilds.array().forEach(x => {
      x.channels.find(x => x.type == 'text').createInvite({maxAge: 0}) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
        .then(invite => {
          message.channel.send(invite.url)
        })
        .catch((err) => {
          if(err.code == 50013) {
            message.channel.send('**'+x.channels.find(x => x.type == 'text').guild.name+'** 채널 권한이 없어 초대코드 발행 실패')
          }
        })
    });
  } else if(message.content == '/초대코드') {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    }
    message.guild.channels.get(message.channel.id).createInvite({maxAge: 0}) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
      .then(invite => {
        message.channel.send(invite.url)
      })
      .catch((err) => {
        if(err.code == 50013) {
          message.channel.send('**'+message.guild.channels.get(message.channel.id).guild.name+'** 채널 권한이 없어 초대코드 발행 실패')
        }
      })
  } else if(message.content.startsWith('/전체공지2')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('/전체공지2'.length);
      let embed = new Discord.RichEmbed()
        .setAuthor('마리봇 공지')
        .setColor('#186de6')
        .setFooter(`MG42`)
        .setTimestamp()
  
      embed.addField('공지: ', contents);
  
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(embed)
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  } else if(message.content.startsWith('/전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('/전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  } else if(message.content.startsWith('/청소')) {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    }
    
    if(message.channel.type != 'dm' && checkPermission(message)) return

    var clearLine = message.content.slice('/청소 '.length);
    var isNum = !isNaN(clearLine)

    if(isNum && (clearLine <= 0 || 100 < clearLine)) {
      message.channel.send("1부터 100까지의 숫자만 입력해주세요.")
      return;
    } else if(!isNum) { // c @나긋해 3
      if(message.content.split('<@').length == 2) {
        if(isNaN(message.content.split(' ')[2])) return;

        var user = message.content.split(' ')[1].split('<@!')[1].split('>')[0];
        var count = parseInt(message.content.split(' ')[2])+1;
        let _cnt = 0;

        message.channel.fetchMessages().then(collected => {
          collected.every(msg => {
            if(msg.author.id == user) {
              msg.delete();
              ++_cnt;
            }
            return !(_cnt == count);
          });
        });
      }
    } else {
      message.channel.bulkDelete(parseInt(clearLine)+1)
        .then(() => {
          AutoMsgDelete(message, `<@${message.author.id}> ` + parseInt(clearLine) + "개의 메시지를 삭제했습니다. (이 메세지는 잠시 후에 사라집니다.)");
        })
        .catch(console.error)
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}

async function AutoMsgDelete(message, str, delay = 3000) {
  let msg = await message.channel.send(str);

  setTimeout(() => {
    msg.delete();
  }, delay);
}


client.login(token);