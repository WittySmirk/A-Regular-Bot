/*
    *
    *Author: Wyatt Degenhart(Witty Smirk)
    *Last Modified 6.26.2019
    *
*/

const Discord = require('discord.js');

const bot = new Discord.Client();

const PREFIX = '';

var punchees = false;

var fortunes = [
    "Heck yeah!",
    "Sadly no dude.",
    "Quit posibly!",
    "Maybe dude."
];

var ohs = [
    "https://media1.tenor.com/images/1e8739e386f1fa9ae30cae85ee70f082/tenor.gif?itemid=5715486",
    "https://img.memecdn.com/regular-show-amp-quot-ohhh-amp-quot-gif_o_2364579.gif",
    "http://25.media.tumblr.com/e54872835259fa852f9708b2f967e986/tumblr_mjuiwzRboL1rn2utdo5_500.gif",
    "http://24.media.tumblr.com/tumblr_m8akmjc0AZ1ql15d5o1_1280.gif",
    "https://24.media.tumblr.com/tumblr_md3ol9K9I11rfgifto1_500.gif"
];

var doughnut = [
    "Ahhhhh(you spun out)",
    "Ahhhhh(you spun out)",
    "Ahhhhh(you spun out)",
    "Ahhhhh(you spun out)",
    "Rigby!!!(Rigby fell out)",
    "Mordecai!!!(Mordecai fell out)",
    "OHHHHH! Wait, dude...(they survived but you fell out)"
];

var puncheeoutcomes = [
    "I win! Stop talking!(Mordecai wins)",
    "What you win?",
    "Ha I won! Aw man.(Rigby wins)"
];

var milkchallengeoutcomes = [
    "Is he ok(You went to the milk zone)",
    "You finished the jug, but forgot to raise it over your head",
    "OHHHHHH!(You win)",
    "You finished the jug too slow",
    "You threw up and didn't finish the jug"
];

var prankthetreeoutcomes = [
    "Dude you did it.. Yeah lets moon them now!!!(You win)",
    "Aw man(You lost)",
    "At least we pranked them(nuteral win)",
    "Well it was fun while it lasted(You lost)",
    "Come on dude.. (Worst lost)"
];

bot.on('ready', () =>{
    console.log('The bot is running quite regularly.');
    bot.user.setActivity("video games!!", {type: 'Playing'});
});

bot.on('guildMemberAdd', function(member){

    const channel = member.guild.channels.find(channel => channel.name === "welcome-goodbye");
    if(!channel) return;

    channel.send(`Welcome to the server, ${member}!!!! Check out #rules for rules. hm hm hm`);
});

bot.on('guildMemberRemove', member=>{

    const channel = member.guild.channels.find(channel => channel.name === "welcome-goodbye");
    if(!channel) return;

    channel.send(`Bye ${member}..`);

});

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        //games
        case 'ping':
            message.channel.send('pong!');
        break;

        case '8ball':
            if (args[1]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.send('The ball is too murkey to read that');
        break;

        case 'punchees':
            message.reply("Ok type punch when you're ready!");

            var punchees = true;
        break;

        case 'punch':
            if(punchees = true){
                message.channel.send(puncheeoutcomes[Math.floor(Math.random() * puncheeoutcomes.length)]);
                var punchees = false;
            }else if (punchees = false) {
                message.channel.send("Hey what was that for!");
            }
        break;

        case 'rps':
            message.channel.send("What?! Don't you remember what happened in the pilot?");
        break;

        case 'doughnut':
            message.channel.send("Hm hm hm");
            message.channel.send(" ");
            message.channel.bulkDelete(1);
            message.channel.send(doughnut[Math.floor(Math.random() * doughnut.length)]);
        break;

        case 'milkchallenge':
            message.channel.send("Ok, but this is pretty gutsy, heres the jug...");
            message.channel.send("  ");
            message.channel.bulkDelete(1);
            message.channel.send(milkchallengeoutcomes[Math.floor(Math.random() * milkchallengeoutcomes.length)]);
        break;

        case 'prankthetree':
            message.channel.send("You think you can be the best pranker in the galaxy? All right..");
            message.channel.send("  ");
            message.channel.bulkDelete(1);
            message.channel.send(prankthetreeoutcomes[Math.floor(Math.random() * prankthetreeoutcomes.length)]);
        break;

        //utilites
        case 'help':
            message.reply("Check out the documentation of commands here: https://github.com/WittySmirk/A-Regular-Bot");
        break;

        case 'kick':

            const kuser = message.mentions.users.first();

            if(kuser){
                const kmember = message.guild.member(kuser);

                if(kmember){
                    kmember.kick('Ooooohhh! You just got kicked!').then(() =>{
                        message.reply(`${kuser.tag} Just Got Kicked!!!!`);
                    }).catch(err =>{
                        message.reply("Are you sure we can kick that member?");
                        console.log(err);
                    });
                } else{
                    message.reply("How are we gonna kick somebody that\'s not in the server?");
                }
            } else{
                message.reply("How are we gonna kick somebody that\'s not in the server?");
            }
        break;

        case 'ban':
            const buser = message.mentions.users.first();

            if(buser){
                const bmember = message.guild.member(buser);

                if(bmember){
                    bmember.ban({reason: "Someone used that mighty ban hammer on you!"}).then(() =>{
                        message.reply(`WE BANNNED ${buser.tag}!! OHHHHHHHHHH`);
                    });
                } else{
                    message.reply("How are we gonna use that ban hammer on somebody that\'s not in the server?");
                }
            } else{
                message.reply("How are we gonna use that ban hammer on somebody that\'s not in the server?");
            }
        break;
        case 'clear':
            if(!args[1]) return message.reply('Please define the ammount of messages to clear.')
            message.channel.bulkDelete(args[1]);
            message.channel.send('hm hm hm');
            message.channel.send('  ');
            message.channel.bulkDelete(1);
            message.channel.bulkDelete(1);
        break;

        //jokes and gifs
        case 'getroasted':
             message.channel.send(ohs[Math.floor(Math.random() * ohs.length)])
        break;

        case 'setupthechairs':
            message.reply('No way! Remember: https://media.giphy.com/media/7FcQfqFCWqLoA/giphy.gif');
        break;

        case 'freecake':
            message.channel.send("Aw.. Vanilla");
        break;

        case 'summertime':
            message.channel.send("https://media1.giphy.com/media/2ZHgtRJkg2Uko/giphy.gif");
        break;

        case 'bingo':
            message.channel.send("https://media1.giphy.com/media/UUNPgjorsaWHu/giphy.gif");
        break;

        case 'omg':
            message.channel.send("https://media3.giphy.com/media/vX0BIykwR863u/source.gif");
        break;

        //Basically a duplicate of the one above just for extra detection capabilities
        case 'OMG':
            message.channel.send("https://media3.giphy.com/media/vX0BIykwR863u/source.gif");
        break;

        case '😢':
            message.channel.send("http://images6.fanpop.com/image/photos/39300000/Regular-Show-gifs-regular-show-39375254-500-279.gif");
            message.channel.send("Heres a soda");
        break;

        case '😠':
            message.channel.send("https://media.giphy.com/media/Mo6rTfWWjwsaQ/giphy.gif");
            message.channel.send("Don't be a Rigby.. Hey!");
        break;

        case '🤣':
            message.channel.send("https://media1.tenor.com/images/1b0114493080ff354baf525dbdb6f26f/tenor.gif?itemid=9446829");
        break;

        case 'time':
            message.channel.send("https://i.ytimg.com/vi/jjOUEv0olOQ/maxresdefault.jpg");
        break;

        case 'challenge':
            message.channel.send("https://i.ytimg.com/vi/RS-XpdA146U/maxresdefault.jpg");
        break;

        //raps and vids
        case 'hummus':
            message.channel.send("https://www.youtube.com/watch?v=iUYS87ei-5E");
        break;

        case 'usa':
            message.channel.send("https://www.youtube.com/watch?v=U0w6YeeXUzE");
        break;

        case '2':
            message.channel.send("In the am or pm? https://www.youtube.com/watch?v=y894QNtX0VA&t=87s");
        break;

        //personal
        case 'profile':
            const pEmbed = new Discord.RichEmbed()
            .setTitle('User Information')
            .addField('User Name', message.author.username)
            .addField('Current Server', message.guild.name)
            .setColor(0x0099ff)
            .setThumbnail(message.author.avatarURL)
            .setFooter("We\'d say they\'re almost as good as hummus!");
            message.channel.send(pEmbed);
        break;
    }

});

bot.login(process.env.BOT_TOKEN);
