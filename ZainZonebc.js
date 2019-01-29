const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`I'm Ready ${client.user.tag}!`);
});

client.on('message',async message => {
   var prefix = "!!";
    if(message.content.startsWith(prefix + "bc")) {
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
      message.channel.send('🇧🇨| **ارسل الرسالة الان**').then(msg => {

      let awaitM = message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      })
      .then(collected => {
        collected.first().delete();
        thisMessage = collected.first().content;
        msg.edit('🇧🇨| **هل انت متأكد؟**');
        let awaitY = message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
          max: 1,
          time: 20000,
          errors: ['time']
        })
        .then(collected => {
          if(collected.first().content === 'لا') {
            msg.delete();
            message.delete();
            thisFalse = false;
          }
          if(collected.first().content === 'نعم') {
            if(thisFalse === false) return;
          message.guild.members.forEach(member => {
            msg.edit('🇧🇨| **جاري الارسال**');
            collected.first().delete();
            member.send(`${thisMessage}\n\n${member} ,\nتم الارسال من : ${message.guild.name}\n تم الارسال بواسطة : ${message.author.tag}`);
          });
          }
        });
      });
      });
    }
  });
 
var adminprefix = '!!'
const developers = ["397090819200516096","340209088770211840"]



bot.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setgame')) {
    bot.user.setGame(argresult);
      message.channel.send(`**Game Set : ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setwatch')) {
  bot.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**Watching : ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setlisten')) {
  bot.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**Listening : ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setstream')) {
    bot.user.setGame(argresult, "https://www.twitch.tv/medo149");
      message.channel.send(`Streaming is available now`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  bot.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  bot.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

client.login(process.env.BOT_TOKEN);
