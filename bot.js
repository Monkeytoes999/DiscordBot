var Discord = require('discord.io');
var logger = require('winston');
var fs = require('fs');
var serverOptions = require('./serverOptions.json');
var prefix = '!';
var passnum = 0; 
var passwords = ['FlacHA', 'AstER', 'MonGO', 'HaRvEy', 'ROllER', 'CliVE', 'TicE', 'PiXIs', 'MuchACHA', 'AkeYLA'];
var knockknock = 0;
var joke = '.';
var gID = '393586279964475393';
var curses = ['SHIT', 'FUCC', 'THOT', 'RAPE', 'DAMN', 'CUNT', 'PORN', 'FUCK', 'FAG', 'FUK', 'ASS', 'BITCH', 'WHORE', 'VAGINAL', 'SLUT', 'BLOWJOB', 'CLITORIS', 'CLIT', 'COOCHIE', 'MASTURBATE', 'MASTURBATION', 'PROSTITUTE', 'JACKASS', 'FAGGOT', 'NIGGER', 'NIGGA', 'TIT', 'BOOB', 'BOOBS', 'DICK', 'PENIS', 'PUSSY', 'ARSE', 'SEMEN', 'CUM', 'BOLLOCK', 'BONER', 'WHORE', 'DILDO', 'SEX'];
var nonWordCurses = ['SHIT', 'FUCC', 'THOT', 'RAPE', 'DAMN', 'CUNT', 'PORN', 'FUCK', 'no', 'FUK', 'no', 'BITCH', 'WHORE', 'VAGINAL', 'SLUT', 'BLOWJOB', 'CLITORIS', 'no', 'COOCHIE', 'MASTURBATE', 'MASTURBATION', 'PROSTITUTE', 'JACKASS', 'FAGGOT', 'NIGGER', 'NIGGA', 'no', 'BOOB', 'BOOBS', 'DICK', 'PENIS', 'PUSSY', 'no', 'no', 'no', 'BOLLOCK', 'BONER', 'WHORE', 'DILDO', 'SEX'];
var prevEvtID = 0;
var commandList = ['__', '__', '__'];
var resultList = ['__', '__', '__'];
var createCommand1 = false;
var createCommand2 = false;
var createCommand3 = false;
var createResult1 = false;
var createResult2 = false;
var createResult3 = false;
var custom1channelID = 0;
var custom2channelID = 0;
var custom3channelID = 0;
var cussmessage = '.';
var serverID = '12345678';
var nicknames = ['Idiot', '\'-\'', 'I have no life lol', 'HAHHAHAHA', 'Pls Halp', 'Person of Honor', 'Thing 3', 'Gud Spelors', ':GWergCatPing:', 'LMAO', 'smhmh', 'smh'];
var randNum = 0;
var spot = 0;
var symbolList = ['!', '\'', '"', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '=', '~', '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ',', '.', '/', '?', '|', '\\', '>', '<', '(', ')', '[', ']', '{', '}'];
var spamPassword;
var spamChannel;
var allowSpam = false;
var pollOptions = [];
var pollVotes = [];
var polledUsers = [];
var someArray = [];
var openPoll = false;
var pollOpener = 0;
var prevDay;
var day = 'oof';
var allowBreedChange = true;
var d = new Date();
var monthNumbers = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var breedNames = ['Abyssinian', 'Aegean', 'American Bobtail', 'American Curl', 'American Ringtail', 'American Shorthair', 'American Wirehair', 'Arabian Mau', 'Malayan', 'Asian Longhair', 'Australian Mist', 'Balinese', 'Bambino', 'Bengal', 'Birman', 'Bombay', 'Bramble', 'Brazilian Shorthair', 'British Longhair', 'British Shorthair', 'Burmese', 'Burmilla', 'California Sprangled', 'Chantilly', 'Chartreux', 'Chausie', 'Cheetoh', 'Cornish Rex', 'Cymric', 'Desert Lynx', 'Devon Rex', 'Donskoy', 'Dragon Li', 'Egyptian Mau', 'European Shorthair', 'Exotic Shorthair', 'FoldEx', 'German Rex', 'Havana Brown', 'Highlander', 'Himalayan', 'Isle of Man', 'Japanese Bobtail', 'Javanese', 'Jungle Curl', 'Khao Manee', 'Korat', 'Kurilian Bobtail', 'Kucing Malaysia', 'Lambkin', 'LaPerm', 'Lykoi', 'Maine Coon', 'Mandalay', 'Manx', 'Mexican Hairless', 'Minskin', 'Minuet / Napolean', 'Mojave', 'Munchkin', 'Nebelung', 'Norwegian Forest', 'Ocicat', 'Oregon Rex', 'Oriental Longhair', 'Oriental Shorthair', 'Owyhee', 'Pantherette', 'Persian', 'Peterbald', 'Pittsburgh Refrigerator', 'Pixie Bob', 'Poddlecat', 'Raas / Busok / Madura', 'Ragdoll', 'Raggamuffin', 'Russian Blue', 'Russian White', 'Safari', 'Sam Sawet', 'Savannah', 'Scottish Fold', 'Selkirk Rex', 'Serengeti', 'Serrade Petit', 'Siamese', 'Siberian Forest', 'Singapura', 'Skokuum', 'Snowshoe', 'Sokoke', 'Somali', 'Sphynx', 'Stone Cougar', 'Suphalak', 'Thai', 'Tonkinese', 'Toybob', 'Toyger', 'Turkish Angora', 'Turkish Van', 'Ukrainian Levkoy', 'York Chocolate'];
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var member;
var convoStarters = ['What was the last funny video you saw?', 'What do you do to get rid of stress?', 'What is something you are obsessed with?', 'What is your favorite way to waste time?', 'If you had to change your name, what would your new name be?', 'What is the silliest fear you have?', 'What are you best at?', 'What was the last movie you watched? How was it?', 'Which do you prefer? Books or movies?', 'What book genres do you like to read?', 'How fast do you read?', 'How often do you go to the library?', 'What song always puts you in a good mood?', 'How many apps do you have on your phone?', 'What is the most annoying app you have tried?', 'Which app seemed like magic the first time you used it?', 'What apps have changed your life a lot?', 'How do you feel if you accidentally leave your phone at home?', 'What do you wish your phone could do?', 'What’s the worst fast food restaurant?', 'What was the best invention of the last 50 years?', 'What problems will technology solve in the next 5 years? What problems will it create?'];
var lastHunMessIds = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
var lastHunUserIds = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
var lastHunChannelIds = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
var test = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var channel;
var scDayChange = true;
var scDay = 'oof';
var remdSent = false;
var dayay;
var allstar = ['**All Star by Smash Mouth**', 'Somebody once told me the world is gonna roll me \nI ain\'t the sharpest tool in the shed', 'She was looking kind of dumb with her finger and her thumb \nIn the shape of an "L" on her forehead', '\nWell the years start coming and they don\'t stop coming \nFed to the rules and I hit the ground running', 'Didn\'t make sense not to live for fun \nYour brain gets smart but your head gets dumb', 'So much to do, so much to see \nSo what\'s wrong with taking the back streets?', 'You\'ll never know if you don\'t go \nYou\'ll never shine if you don\'t glow', '\nHey now, you\'re an all-star, get your game on, go play \nHey now, you\'re a rock star, get the show on, get paid', 'And all that glitters is gold \nOnly shooting stars break the mold', '\nIt\'s a cool place and they say it gets colder \nYou\'re bundled up now, wait till you get older', 'But the meteor men beg to differ\nJudging by the hole in the satellite picture', 'The ice we skate is getting pretty thin \nThe water\'s getting warm so you might as well swim', 'My world\'s on fire, how about yours?\nThat\'s the way I like it and I never get bored', '\nHey now, you\'re an all-star, get your game on, go play \nHey now, you\'re a rock star, get the show on, get paid', 'All that glitters is gold \nOnly shooting stars break the mold', '\nHey now, you\'re an all-star, get your game on, go play \nHey now, you\'re a rock star, get the show, on get paid', 'And all that glitters is gold \nOnly shooting stars', '\nSomebody once asked could I spare some change for gas? \nI need to get myself away from this place', 'I said yep what a concept \nI could use a little fuel myself', 'And we could all use a little change', '\nWell, the years start coming and they don\'t stop coming \nFed to the rules and I hit the ground running', 'Didn\'t make sense not to live for fun \nYour brain gets smart but your head gets dumb', 'So much to do, so much to see \nSo what\'s wrong with taking the back streets?', 'You\'ll never know if you don\'t go (go!) \nYou\'ll never shine if you don\'t glow', '\nHey now, you\'re an all-star, get your game on, go play \nHey now, you\'re a rock star, get the show on, get paid', 'And all that glitters is gold \nOnly shooting stars break the mold', '\nAnd all that glitters is gold \nOnly shooting stars break the mold'];
var countryroads = ['**Country Roads by John Denver**', 'Almost heaven, West Virginia \nBlue Ridge Mountains, Shenandoah River', 'Life is old there, older than the trees \nYounger than the mountains, blowing like a breeze', 'Country roads, take me home \nTo the place I belong', 'West Virginia, mountain mama \nTake me home, country roads', 'All my memories gather round her \nMiner\'s lady, stranger to blue water', 'Dark and dusty, painted on the sky \nMisty taste of moonshine, teardrop in my eye', 'Country roads, take me home \nTo the place I belong',  'West Virginia, mountain mama \nTake me home, country roads', 'I hear her voice, in the morning hour she calls me \nThe radio reminds me of my home far away', 'And driving down the road I get a feeling \nThat I should have been home yesterday, yesterday', 'Country roads, take me home \nTo the place I belong', 'West Virginia, mountain mama \nTake me home, country roads', 'Country roads, take me home \nTo the place I belong', 'West Virginia, mountain mama \nTake me home, country roads', 'Take me home, down country roads \nTake me home, down country roads'];
var songs = [allstar, countryroads];
var songPlaying = false;
var arrayTest = [[1,2,3],[1,2]];
var pollAtappOptions = [];
var pollAtappVotes = [];
var polledAtappUsers = [];
var openAtappPoll = false;
var pollAtappOpener = 0;
var allowOwo = true;
var allowCuss = false;
var notCusses = ['ASSU', 'ASSE', 'ASSA', 'ASSI', 'ASSO', 'ASSY', 'ASSM', 'TITLE', 'CUMULATIVE', 'SEXY', 'SEXISM'];
var hasMistakenCuss = false;
var cussIndexes = [];
var mistakenIndexes = [];
var bullyingList = ['Shut up, nobody likes you', 'Oof, you think anyone cares?', 'Hey, stupid head, nobody cares what you think', 'Is that all you could come up with?', 'Lolz, get your brain fixed you idiot', 'Hey, who cares about that?', 'Get back in your corner', 'Nobody was talking to you', 'Your mom tried to sell you on ebay yesterday', 'tfw somebody thinks they matter. Btw that somebody is you.', 'Hey there loser, you back to be wrecked again?'];
var superRareResponseList = ['Feeed meeeeee', 'I have to use the restroom. Excuse me...', 'Hey there, is it morning yet? No? Goodnight again then', 'HAHAHAHAHAHAHHAHAHAHHAAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHHAHA'];
var bikCussServers = process.env.bikServers;
var servRK = [];
var roleRK = [];
var commRK = [];
var delNextChannel = '';
var someDelArray = [];
var imback = ['I\'mmmmmm baaaack!', 'Did you miss me?', 'Geez, how long was I gone??', 'I\'m back! Can I get a raise?', 'I\'m here again, be scared... if you want.', 'Hey there fella, I DON\'T CARE ABOUT YOU'];
var randSong = ['https://www.youtube.com/watch?v=pYCPGEEvkJU','https://m.youtube.com/watch?v=1kup8efewac','https://m.youtube.com/watch?v=6jCNibY1LOk','https://www.youtube.com/watch?v=d0RmRJsgP28', 'https://m.youtube.com/watch?v=OvwleF1pOZ0', 'https://m.youtube.com/watch?v=IIaUKTqOEmc'];
var randVideo = ['https://m.youtube.com/watch?v=W9gxFkOz2_4'];
var commRand = false;
var commands = ['ping', 'music', 'portalCat', 'changeMyNickname', 'knockknock', 'randVideo', 'randSong', 'videoSongSuggestions', 'guildLink', 'help', 'rcCM', 'createPoll', 'pollOptions', 'pollResults', 'addCustomResponse', 'vote', 'closePoll', 'createAtappPoll', 'pollAtappOptions', 'addCustomatAtappResponse', 'pollAtappResults', 'votAtapp', 'closeAtapp', 'customCommand', 'feedback', 'suggest', 'userInfo', 'test', 'getChannelID', 'tto', 'findRoleID', 'getServerID', 'inviteInfo'];
var commandHelp = ['Replys "Pong!", perfect for a game of never-ending ping pong.', 'Replys with the lyrics of a random song.', 'Replys with an animated emoji of a cat jumping into a portal.', 'Changes your nickname to a random nickname from a list.', 'Replys to YOUR knock-knock joke.', 'Replys with a link to a user-suggested video.', 'Replys with a link to a user-suggested song.', 'Sends your video/song suggestion to the owner for review. \nSuggestions must be (mainly) English, curse-free, and under 15 minutes long.', 'Replys with an invite to the GCD Support Server.', 'There are two ways to use this command. \nhelp: DMs you a complete list of commands and descriptions. \nhelp [command]: Replys with a description of that command.', 'Usage: rcCM [@role] [cmd] \nAllows users to join the mentioned role by saying ' + prefix + 'cmd \nTo run the command, your highest role must have admin, and must be higher than the role you are trying to give access to.', 'Follow directions after using this command to create a poll users can respond to.', 'Replys with the options to the current poll.', 'Replys with the current results of the current poll.', 'Usage: addCustomResponse [custom] \nAllows you to add a custom response to a poll.', 'Usage: vote [optionNum] \nAdds your vote to the option specified, you can only vote once per poll.', 'Can only be done by the poll opener, closes the current poll.', 'After using this command, follow directions to create an \'All that apply\' poll.', 'Replys with the options for the current \'All that apply\' poll.', 'Usage: addCustomAtappResponse [custom] \nAllows you to add a custom response to an \'All that apply\' poll.', 'Replys with the current results for the current \'All that apply\' poll.', 'Allows you to vote for an option in an \'All that apply\' poll. Can be used multiple times.', 'Allows the owner of an \'All that apply\' poll to close it.', 'Usage: customCommand[1/2/3] \nAllows users to create custom (temporary) commands by running the command and following instructions', 'Usage: feeback [feedback] \nSends your feedback to the creator.', 'Usage: suggest [suggestion] \nSends your suggestion to the creator.', 'Usage: useInfo [@user] \nReplys with information about the mentioned user.', 'Replys with a sample of code currently in development.', 'Replys with the ID of the current channel.', 'Usage: tto [input] \nRepeats the input back', 'Usage: findRoleID [@role] \nReplys with the ID of the mentioned role.', 'Replys with the ID of the current server.', 'Usage: inviteInfo [invite] \nReplys with info about the invite given.'];

//team blue 499003285106196480
//team red 499003389955407872
//team green 499003482922024960

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot 
var bot = new Discord.Client({
   token: process.env.token,
   autorun: true
});
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.dtoken, bot);

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
	bot.sendMessage({
		to: '520394437461803010',
		message: imback[Math.floor(Math.random() * imback.length)]
	});
});

bot.on('any', function(event) {
	commRand = false
//     if ((Math.floor(Math.random() * 50000)) > 49999){
// 	    if (event.d != null){
// 		    if (event.d.channel_id != undefined && event.d.guild_id != '264445053596991498'){
// 			    bot.sendMessage({
// 				    to: '393586279964475393',
// 				    message: superRareResponseList[(Math.floor(Math.random() * superRareResponseList.length))]
// 			    });
// 			    bot.sendMessage({
// 				    to: event.d.channel_id,
// 				    message: superRareResponseList[(Math.floor(Math.random() * superRareResponseList.length))]
// 			    });
// 		    }
// 	    }
//     }
});

bot.on('presenceUpdate', function(event){
//        if(event.d.user.id == '393586279964475393'){
// 		bot.sendMessage({
// 			to: '514213516538806304',
// 			message: 'OOF!! I\'ll do more with this later'
// 		});
// 	}
});

bot.on('messageUpdate', function (oldMsgData, newMsgData, evt){
	
	if (newMsgData.author != undefined){
	if (!(bot.users[newMsgData.author.id] == undefined)){
	if (!(bot.users[newMsgData.author.id].bot)){
		
	if (!bot.directMessages[newMsgData.channel_ID] && newMsgData.channel_ID != 458809225120972800 && newMsgData.channel_ID != 495998900008910863) {
		serverID = newMsgData.guild_id;
		channel = bot.channels[newMsgData.channel_ID];
	}
	
	if (bikCussServers != undefined){
		if (bikCussServers.includes(serverID)){
			curses.push('BIKE')
			nonWordCurses.push('no')
		}
	}
		
		cussIndexes = [];
	mistakenIndexes = [];
		
	cussmessage = newMsgData.content.toUpperCase();
	
	allowOwo = true;
	allowCuss = false;
	if (serverOptions[newMsgData.author.guild_id] != undefined){
		allowCuss = serverOptions[newMsgData.guild_id]["allowCussing"];
		allowOwo = serverOptions[newMsgData.guild_id]["allowOwoing"];
	}
	
		
		
	for (var i = 0; i < symbolList.length; i++){
		if (cussmessage.includes(symbolList[i])){
			spot = cussmessage.indexOf(symbolList[i]);
			cussmessage = cussmessage.substring(0, spot) + cussmessage.substring(spot + 1);
			i = i-1;
		}
	}
		
	
	hasMistakenCuss = false;
	for (var i = 0; i < notCusses.length; i++){
		if (cussmessage.includes(notCusses[i])){
			var hasMistakenCuss = true;
			mistakenIndexes.push(cussmessage.indexOf(notCusses[i]));
		}
	}

	
	for (var i = 0; i < curses.length; i++){
		if (cussmessage.includes(curses[i])){
			if (nonWordCurses[i] != 'no' || cussmessage.substring(0, (curses[i].length)) == curses[i] || cussmessage.includes(' ' + curses[i])){
		    		cussIndexes.push(cussmessage.indexOf(curses[i]));
			}
		}
	}
	
	for (var i = 0; i < cussIndexes.length; i = i){
		if (mistakenIndexes.includes(cussIndexes[i])){
		    cussIndexes.splice(i, 1);
		} else {
			i++
		}
	}


		if (!(newMsgData.author.id == 408785106942164992) && cussIndexes.length > 0 && !allowCuss || newMsgData.content.includes('A$$H0L3')){
				bot.deleteMessage({
					channelID: newMsgData.channel_id,
					messageID: newMsgData.id
				});
				bot.sendMessage({
					to: newMsgData.channel_id,
					message: newMsgData.author.username + ', please don\'t curse. Thank you.'
				});
				bot.sendMessage({
					to: '509920937093890058',
					message: newMsgData.author.id
				});
		}
		if (cussmessage.includes('BIKE') && newMsgData.guild_id == 490695949786677248){
		  		bot.deleteMessage({
					channelID: newMsgData.channel_id,
					messageID: newMsgData.id
				});
				bot.sendMessage({
					to: newMsgData.channel_id,
					message: newMsgData.author.username + ', please don\'t curse. Thank you.'
				});
				bot.sendMessage({
					to: '509920937093890058',
					message: newMsgData.author.id
				});
		}
	
	if (bikCussServers != undefined){
		if (bikCussServers.includes(serverID)){
			curses.splice(curses.length - 1, 1)
			nonWordCurses.splice(nonWordCurses.length - 1, 1)
		}
	}
		
	}
	}
	}
	
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
	
	
	cussIndexes = [];
	mistakenIndexes = [];
	
	
	if (!bot.directMessages[channelID] && channelID != 458809225120972800 && channelID != 495998900008910863) {
		serverID = bot.channels[channelID].guild_id;
		channel = bot.channels[channelID];
		member = bot.servers[serverID].members[userID];
	}
	if (channelID == '517100710199033857' && bot.users[userID] == undefined && message != '<@&522551255873224704>'){
		bot.sendMessage({
			to: '517100710199033857',
			message: '<@&522551255873224704>'
		});
	}
	
	if (channelID != '513116265439821832'){
		let sndMess = message + ': from: ' + user + ' servID: ' + serverID + ', chID: ' + channelID
		bot.sendMessage({
			to: '513116265439821832',
			message: bot.fixMessage(sndMess)
		});
	}
	
	if (prevDay == undefined){
		bot.setPresence({
			game: {
				type: 0,
				name: 'in ' + Object.keys(bot.servers).length + ' servers!'
			}
		}, function(err, res){
			if (err) throw err
		});
		bot.getMessage({
			channelID: '512776592536109057',
			messageID: '512782505284206593'
		}, function(err, res){
			if (err) throw err
			let toFillServ = res.content;
			for (var servRKi = 0; toFillServ.includes(','); toFillServ = toFillServ.substring(toFillServ.indexOf(',') + 2)){
				servRK.push(toFillServ.substring(0, toFillServ.indexOf(',')));
			}
			servRK.push(toFillServ)
		});
		bot.getMessage({
			channelID: '512776592536109057',
			messageID: '512782965613395971'
		}, function(err, res){
			if (err) throw err
			let toFillServ = res.content;
			for (var roleRKi = 0; toFillServ.includes(','); toFillServ = toFillServ.substring(toFillServ.indexOf(',') + 2)){
				roleRK.push(toFillServ.substring(0, toFillServ.indexOf(',')));
			}
			roleRK.push(toFillServ)
		});
		bot.getMessage({
			channelID: '512776592536109057',
			messageID: '512783273601138698'
		}, function(err, res){
			if (err) throw err
			let toFillServ = res.content;
			for (var commRKi = 0; toFillServ.includes(','); toFillServ = toFillServ.substring(toFillServ.indexOf(',') + 2)){
				commRK.push(toFillServ.substring(0, toFillServ.indexOf(',')));
			}
			commRK.push(toFillServ)
		});
		
	}
	
	if (bikCussServers.includes(serverID)){
		curses.push('BIKE')
		nonWordCurses.push('no')
	}
	
	if (bot.directMessages[channelID] && channelID != '495705429150793739' && message.indexOf("Our current commands are as follows.") == -1 && message.indexOf("Today is a") == -1 && message.indexOf("This bot comes equipped with a curse censoring feature,") == -1){
		bot.sendMessage({
			to: '508329340652748800',
			message: user + ': ' + message + ' (' + channelID + ')'
		}, function(err, res){
			if (err) throw err
		});
	}
	
	
	
	prevEvtID = evt.d.id;
	
	if (true){
		let thisTime = new Date();
			let thisHour = (thisTime.getHours() - 5);
			let thisDay = thisTime.getDate();
			let thisDayay = (thisTime.getDay() - 1);
			if (thisHour < 0){
				thisDay = thisDay - 1;
				thisHour = 24 + thisHour;
			}
			if (thisDay < 1){
				thisDay = monthNumbers[thisTime.getMonth()];
			}
			if (thisDayay < 0){
				thisDayay = 6 + (thisDayay + 1);
			}
			if (thisHour > 12){
				thisHour = thisHour - 12
			}
		
		prevDay = day;
		day = thisDay;
		dayay = thisDayay;
		if (day != prevDay && scDay != 'oof'){
			bot.setPresence({
				game: {
					type: 0,
					name: 'in ' + Object.keys(bot.servers).length + ' servers!'
				}
			}, function(err, res){
				if (err) throw err
			});
			if (scDay.length == 1){
				if (scDayChange){
					if (scDay.toUpperCase() == 'A'){
						scDay = 'B';
					} else if (scDay.toUpperCase() == 'B'){
						scDay = 'A';
					}
					bot.editMessage({
						channelID: '512739420764635136',
						messageID: '512741593657376778',
						message: scDay
					}, function(err, res){
						if (err) throw err
					});
					if (thisDayay == 5 || thisDayay == 6){
						bot.sendMessage({
							to: '458809225120972800',
							message: 'Today is a weekend! Enjoy!'
						});
						bot.sendMessage({
							to: '194966921362407424',
							message: 'Today is a weekend! Enjoy!'
						});
						bot.sendMessage({
							to: '486985623161274378',
							message: 'Today is a weekend! Enjoy!'
						});
						bot.sendMessage({
							to: '336507246227881984',
							message: 'Today is a weekend! Enjoy!'
						});
						bot.sendMessage({
							to: '393586279964475393',
							message: 'Today is a weekend! Enjoy!'
						});
					} else {
						bot.sendMessage({
							to: '458809225120972800',
							message: 'Today is a(n) ' + scDay + ' day.'
						});
						bot.sendMessage({
							to: '194966921362407424',
							message: 'Today is a(n) ' + scDay + ' day.'
						});
						bot.sendMessage({
							to: '486985623161274378',
							message: 'Today is a(n) ' + scDay + ' day.'
						});
						bot.sendMessage({
							to: '336507246227881984',
							message: 'Today is a(n) ' + scDay + ' day.'
						});
						bot.sendMessage({
							to: '393586279964475393',
							message: 'Today is a(n) ' + scDay + ' day.'
						});
					}
				}
				if (!scDayChange){
					bot.sendMessage({
						to: '458809225120972800',
						message: 'Yesterday was a(n) ' + scDay + ' day, and I guess today is one too. Holiday? Testing crap? Whatever it is, enjoy it.'
					});
					bot.sendMessage({
						to: '194966921362407424',
						message: 'Yesterday was a(n) ' + scDay + ' day, and I guess today is one too. Holiday? Testing crap? Whatever it is, enjoy it.'
					});
					bot.sendMessage({
						to: '486985623161274378',
						message: 'Yesterday was a(n) ' + scDay + ' day, and I guess today is one too. Holiday? Testing crap? Whatever it is, enjoy it.'
					});
					bot.sendMessage({
						to: '336507246227881984',
						message: 'Yesterday was a(n) ' + scDay + ' day, and I guess today is one too. Holiday? Testing crap? Whatever it is, enjoy it.'
					});
					bot.sendMessage({
						to: '393586279964475393',
						message: 'Yesterday was a(n) ' + scDay + ' day, and I guess today is one too. Holiday? Testing crap? Whatever it is, enjoy it.'
					});
					scDayChange = true;
				}
			} else if(scDay.toUpperCase() != 'NONE'){
				bot.sendMessage({
					to: '458809225120972800',
					message: scDay
				});
				bot.sendMessage({
					to: '194966921362407424',
					message: scDay
				});
				bot.sendMessage({
					to: '486985623161274378',
					message: scDay
				});
				bot.sendMessage({
					to: '336507246227881984',
					message: scDay
				});
				bot.sendMessage({
					to: '393586279964475393',
					message: scDay
				});
			}
		}
		if (scDay == 'oof'){
		    bot.getMessage({
			    channelID: '512739420764635136',
			    messageID: '512741593657376778'
		    }, function(err, res){
			    if (err) throw err
			    scDay = res.content
		    });
		}
		if (day != prevDay && prevDay != 'oof' && allowBreedChange){
			bot.editRole({
				serverID: '489547644138422302',
				roleID: '499379170975940608',
				name: breedNames[Math.floor(Math.random() * breedNames.length)]
			});
			bot.editRole({
				serverID: '489547644138422302',
				roleID: '499379174352355341',
				name: breedNames[Math.floor(Math.random() * breedNames.length)]
			});
			bot.editRole({
				serverID: '489547644138422302',
				roleID: '499379172653793292',
				name: breedNames[Math.floor(Math.random() * breedNames.length)]
			});
			bot.editRole({
				serverID: '489547644138422302',
				roleID: '499379166626447361',
				name: breedNames[Math.floor(Math.random() * breedNames.length)]
			});
			bot.editRole({
				serverID: '489547644138422302',
				roleID: '499379169197817856',
				name: breedNames[Math.floor(Math.random() * breedNames.length)]
			});
			bot.sendMessage({
				to: '499380162589097996',
				message: '<@&497234733709918229>, check out your new cat breed!'
			});
		}
	}
		
	cussmessage = message.toUpperCase();
	
	allowOwo = true;
	allowCuss = false;
	if (serverOptions[serverID] != undefined){
		allowCuss = serverOptions[serverID]["allowCussing"];
		allowOwo = serverOptions[serverID]["allowOwoing"];
	}
	
	
		
		
	for (var i = 0; i < symbolList.length; i++){
		if (cussmessage.includes(symbolList[i])){
			spot = cussmessage.indexOf(symbolList[i]);
			cussmessage = cussmessage.substring(0, spot) + cussmessage.substring(spot + 1);
			i = i-1;
		}
	}
	
	
	hasMistakenCuss = false;
	for (var i = 0; i < notCusses.length; i++){
		if (cussmessage.includes(notCusses[i])){
			var hasMistakenCuss = true;
			mistakenIndexes.push(cussmessage.indexOf(notCusses[i]));
		}
	}

	
	for (var i = 0; i < curses.length; i++){
		if (cussmessage.includes(curses[i])){
			if (nonWordCurses[i] != 'no' || message.includes('A$$H0L3') || cussmessage.substring(0, (curses[i].length)) == curses[i] || cussmessage.includes(' ' + curses[i])){
		    		cussIndexes.push(cussmessage.indexOf(curses[i]));
			}
		}
	}
	
	for (var i = 0; i < cussIndexes.length; i = i){
		if (mistakenIndexes.includes(cussIndexes[i])){
		    cussIndexes.splice(i, 1);
		} else {
			i++
		}
	}


		if (!(userID == 408785106942164992) && cussIndexes.length > 0 && !allowCuss && !channel.nsfw || message.includes('A$$H0L3')){
				bot.deleteMessage({
					channelID: channelID,
					messageID: prevEvtID
				});
				bot.sendMessage({
					to: channelID,
					message: user + ', please don\'t curse. Thank you.'
				});
				bot.sendMessage({
					to: '509920937093890058',
					message: userID
				});
		}
		if (cussmessage.includes('BIKE') && serverID == 490695949786677248){
		  	bot.deleteMessage({
				channelID: channelID,
				messageID: prevEvtID
			});
			bot.sendMessage({
				to: channelID,
				message: user + ', please don\'t curse. Thank you.'
			});
			bot.sendMessage({
				to: '509920937093890058',
				message: userID
			});
		}
	
	if (bikCussServers.includes(serverID)){
		curses.splice(curses.length - 1, 1)
		nonWordCurses.splice(nonWordCurses.length - 1, 1)
	}
	if (!(bot.users[userID] == undefined)){
	if (!(bot.users[userID].bot)){


		if (cussmessage.includes('OWO') && process.env.bikServers.includes(serverID)){
			if (serverID != 500864200378155008 && allowOwo && serverID != 505565358560772096 && channelID != 501934275860496395){
				bot.sendMessage({
					to: channelID,
					message: 'What\'s this?'
				}, function(err, res){
					console.log(err)
				});
			}
		}
				
		if(someDelArray.includes(userID) && channelID == delNextChannel){
			bot.deleteMessage({
				channelID: channelID,
				messageID: prevEvtID
			});
			let index = someDelArray.indexOf(userID);
			someDelArray.splice(index, 1);
		}

				if (someArray.includes(userID) && userID == pollOpener){
					pollOptions = [];
					pollVotes = [];
					polledUsers = [];
					while (message.includes(', ')){
						pollOptions[pollOptions.length] = message.substring(0, message.indexOf(', '));
						message = message.substring(message.indexOf(', ') +2);
					}
					pollOptions[pollOptions.length] = message;
					for (i = 0; i < pollOptions.length; i++){
						pollVotes[i] = 0;
					}
					bot.sendMessage({
						to: channelID,
						message: 'Ok, your poll has been created.'
					});
					openPoll = true;

				  let index = someArray.indexOf(userID);
				  someArray.splice(index, 1);
				}

				if (someArray.includes(userID) && userID == pollAtappOpener){
					pollAtappOptions = [];
					pollAtappVotes = [];
					polledAtappUsers = [];
					while (message.includes(', ')){
						pollAtappOptions[pollAtappOptions.length] = message.substring(0, message.indexOf(', '));
						message = message.substring(message.indexOf(', ') +2);
					}
					pollAtappOptions[pollAtappOptions.length] = message;
					for (i = 0; i < pollAtappOptions.length; i++){
						pollAtappVotes[i] = 0;
					}
					bot.sendMessage({
						to: channelID,
						message: 'Ok, your "all that apply" poll has been created.'
					});
					openAtappPoll = true;

				  let index = someArray.indexOf(userID);
				  someArray.splice(index, 1);
				}

		if (createResult2 && !message.includes('Ok, now please reply with the desired command output.') && custom2channelID == channelID){
			resultList[1] = message;
			bot.sendMessage({
				to: channelID,
				message: 'Your command, ' + commandList[1] + ' has been successfully created.'
			});
			createResult2 = false;
		}

		if (createResult3 && !message.includes('Ok, now please reply with the desired command output.') && custom3channelID == channelID){
			resultList[2] = message;
			bot.sendMessage({
				to: channelID,
				message: 'Your command, ' + commandList[2] + ' has been successfully created.'
			});
			createResult3 = false;
		}

		if (createResult1 && !message.includes('Ok, now please reply with the desired command output.') && custom1channelID == channelID){
			resultList[0] = message;
			bot.sendMessage({
				to: channelID,
				message: 'Your command, ' + commandList[0] + ' has been successfully created.'
			});
			createResult1 = false;
		}

		if (createCommand1 && !message.includes('Ok, please reply with your command without the ' + prefix) && custom1channelID == channelID){
			commandList[0] = message;
			    bot.sendMessage({
				    to: channelID,
				    message: 'Ok, now please reply with the desired command output.'
			    });
			createCommand1 = false;
			createResult1 = true;
		}

		if (createCommand2 && !message.includes('Ok, please reply with your command without the ' + prefix) && custom2channelID == channelID){
			commandList[1] = message;
			    bot.sendMessage({
				    to: channelID,
				    message: 'Ok, now please reply with the desired command output.'
			    });
			createCommand2 = false;
			createResult2 = true;
		}

		if (createCommand3 && !message.includes('Ok, please reply with your command without the ' + prefix) && custom3channelID == channelID){
			commandList[2] = message;
			    bot.sendMessage({
				    to: channelID,
				    message: 'Ok, now please reply with the desired command output.'
			    });
			createCommand3 = false;
			createResult3 = true;
		}

		if (knockknock == 2 && message != joke && !message.includes('?') && !message.includes('knock')){
			bot.sendMessage({
				to: channelID,
				message: "Hahaha!"
			});
			knockknock = 0;
		}

		if (knockknock == 1 && !message.includes('knock') && !message.includes('Who\'s there?')){
			bot.sendMessage({
				to: channelID,
				message: message + " who?"
			});
			joke = message;
			knockknock = 2;
		}

		if (message.substring(0, 24) == 'Graham Channel Destroyer' && channelID != '508329340652748800'){
			bot.sendMessage({
				to: channelID,
				message: 'The current prefix is ' + prefix + ', and the current password is password number ' + passnum + '. To see documentation, please say ' + prefix + 'help'
			});
		}

		if (message.indexOf((prefix + 'changePrefix')) == 0){
			prefix = message.substring(message.indexOf('changePrefix') + 13);
			bot.sendMessage({
				to: channelID,
				message: 'The prefix is now \'' + prefix + '\''
			});
		}


	    if (message.indexOf(prefix) == 0 && serverID != '264445053596991498' && channelID != null && !bot.directMessages[channelID]) {
		knockknock = 0
		var args = message.substring(1).split(' ');
		var cmd = args[0];

		args = args.splice(1);
		switch(cmd) {
		    // !ping
		    case 'ping':
			bot.sendMessage({
			    to: channelID,
			    message: 'Pong!'
			});
			commRand = true;
		    break;
			case 'videoSongSuggestions':
				bot.sendMessage({
					to: '522570244502454273',
					message: user + ' suggests: ' + message.substring(22)
				});
				bot.sendMessage({
					to: channelID,
					message: 'Thank you, your suggestion will be considered. Please keep in mind that all suggestions must be English, curse free, and less than 15 minutes long.'
				});
				commRand = true;
				break;
			case 'vote':
				let votcomm = 'You have not voted yet today!'
				dbl.hasVoted(userID).then( res => {
					votcomm = 'You have already voted today! Thanks!'
				}).catch( err => {
					console.log(err)
				})
				bot.sendMessage({
					to: channelID,
					message: 'Here is your voting link!: \nhttps://discordbots.org/bot/495705429150793739/vote \n' + votcomm
				});
				commRand = true;
				break;
			case 'randVideo':
				bot.sendMessage({
					to: channelID,
					message: 'There are currently ' + randVideo.length + ' video options, here\'s one. \n' + randVideo[Math.floor(Math.random() * randVideo.length)]
				});
				bot.sendMessage({
					to: channelID,
					message: 'As you can see, we\'re currently VERY low on videos. Consider suggesting one with ' + prefix + 'videoSongSuggestions [link]'
				});
				commRand = true;
				break;
			case 'randSong':
				bot.sendMessage({
					to: channelID,
					message: 'There are currently ' + randSong.length + ' song options, here\'s one. \n' + randSong[Math.floor(Math.random() * randSong.length)]
				});
				bot.sendMessage({
					to: channelID,
					message: 'As you can see, we\'re currently VERY low on songs. Consider suggesting one with ' + prefix + 'videoSongSuggestions [link]'
				});
				commRand = true;
				break;
			case 'delNext':
				if (userID == gID){
					bot.deleteMessage({
						channelID: channelID,
						messageID: prevEvtID
					});
					delNextChannel = channelID
					someDelArray.push(userID)
				}
				commRand = true;
				break;
			case 'joinFollowers':
				if (serverID == '511698216199258112'){
					if (member.roles.includes('511736694605611009')){
						bot.sendMessage({
							to: channelID,
							message: 'You are already a follower ' + user
						});
					} else {
						bot.sendMessage({
							to: channelID,
							message: 'You have successfully become a follower!'
						});
						bot.addToRole({
							serverID: '511698216199258112',
							userID: userID,
							roleID: '511736694605611009'
						});
					}
				} else {
					bot.sendMessage({
						to: channelID,
						message: 'This is only usable in the GCD support server'
					});
				}
				commRand = true;
				break;
			case 'inviteInfo':
				bot.queryInvite(message.substring(12), function(err, res){
					let output = 'Invalid Invite'
					if (res){
						output = '**Server Info:** \nName: ' + res.guild.name + '\nID: ' + res.guild.id + '\n**Inviter Info:** \nName: ' + res.inviter.username + '\nID: ' + res.inviter.id
					}
					bot.sendMessage({
						to: channelID,
						message: output
					});
				});
				commRand = true;
				break;
			case 'EDTmess':
				if (userID == gID){
					bot.editMessage({
						channelID: channelID,
						messageID: message.substring(9, 28),
						message: message.substring(29)
					});	
				}
				commRand = true;
				break;
			case 'announce':
// 				console.log(bot.servers)
				commRand = true;
				break;
			case 'leaveFollowers':
				if (serverID == '511698216199258112'){
					if (!member.roles.includes('511736694605611009')){
						bot.sendMessage({
							to: channelID,
							message: 'You are not currently a follower ' + user
						});
					} else {
						bot.sendMessage({
							to: channelID,
							message: 'You have successfully revoked your follower status.'
						});
						bot.removeFromRole({
							serverID: '511698216199258112',
							userID: userID,
							roleID: '511736694605611009'
						});
					}
				} else {
					bot.sendMessage({
						to: channelID,
						message: 'This is only usable in the GCD support server'
					});
				}
				commRand = true;
				break;
			case 'feedback':
				bot.sendMessage({
					to: channelID,
					message: ':iphone: Thank you! Your feedback has been sent and will be viewed. :calling:'
				});
				bot.sendMessage({
					to: '511728374704504847',
					message: user + ' says: ' + message.substring(10)
				});
				commRand = true;
				break;
			case 'suggest':
				bot.sendMessage({
					to: channelID,
					message: ':iphone: Thank you! Your message has been sent and will be considered. :calling:'
				});
				bot.sendMessage({
					to: '511700319294717974',
					message: user + ' suggests: ' + message.substring(9)
				});
				case 'drct':
				bot.removeReaction({
				    channelID: '506881793123811338',
				    messageID: message.substring(6),
				    reaction: "💚"
				});
				commRand = true;
				break;
			case 'rct':
				bot.addReaction({
				    channelID: '506881793123811338',
				    messageID: message.substring(5),
				    reaction: "💚"
				});
				commRand = true;
				break;
			case 'top':
				if (userID = gID){
					bot.deleteMessage({
							channelID: channelID,
							messageID: evt.d.id
						});
					if (serverID == '505565358560772096'){
						bot.addToRole({
							serverID: serverID,
							userID: userID,
							roleID: '507688970717495296'
						});
					}
					if (serverID == '500864200378155008'){
					    bot.addToRole({
						    serverID: serverID,
						    userID: userID,
						    roleID: '504416400597712914'
					    });
					}
					if (serverID == '495699832313217064'){
					    bot.addToRole({
						    serverID: serverID,
						    userID: userID,
						    roleID: '495720344779358210'
					    })
					}
					if (serverID == '489547644138422302'){
						bot.addToRole({
							serverID: serverID,
							userID: userID,
							roleID: '489550068022509568'
						});
					}
					if (serverID == '429446593792442369'){
						bot.addToRole({
							serverID: serverID,
							userID: userID,
							roleID: '491801015436181504'
						});
					}
	// 				let topBRole = 0;
	// 				let topBRoleID = serverID;
	// 				member = bot.servers[serverID].members['495705429150793739']
	// 				for (var io0oof = 0; io0oof < member.roles.length; io0oof++){
	// 					if (bot.servers[serverID].roles[member.roles[io0oof]].position > topBRole){
	// 						topBRole = bot.servers[serverID].roles[member.roles[io0oof]].position
	// 						topBRoleID = bot.servers[serverID].roles[member.roles[io0oof]].id
	// 					}
	// 				}
	// 				let toppRole = 0;
	// 				let toppRoleID = serverID;
	// 				console.log(Object.keys(bot.servers[serverID].roles).length)
	// 				for (let iaooof = 0; iaooof < Object.keys(bot.servers[serverID].roles).length; iaooof++){
	// 					console.log(iaooof);
	// 					console.log(bot.servers[serverID].roles[Object.keys(bot.servers[serverID].roles)[iaooof]].color);
	// 					console.log(topBRole)
	// 					console.log(bot.servers[serverID].roles[Object.keys(bot.servers[serverID].roles)[iaooof]].position)
	// 					if (bot.servers[serverID].roles[Object.keys(bot.servers[serverID].roles)[iaooof]].position > toppRole && bot.servers[serverID].roles[Object.keys(bot.servers[serverID].roles)[iaooof]].color != 0 && bot.servers[serverID].roles[Object.keys(bot.servers[serverID].roles)[iaooof]].position > topBRole){
	// 						toppRole = bot.servers[serverID].roles[Object.keys(bot.servers[serverID].roles)[iaooof]].position
	// 						toppRoleID = bot.servers[serverID].roles[Object.keys(bot.servers[serverID].roles)[iaooof]].id
	// 					}
	// 					console.log(toppRoleID)
	// 				}
	// 				bot.addToRole({
	// 					serverID: serverID,
	// 					userID: userID,
	// 					roleID: toppRoleID
	// 				});
				}
				commRand = true;
				break;
			case 'userInfo':
// 				bot.addServerEmoji({
// 				    serverID: serverID,
// 				    name: 'Test',
// 				    image: fs.readFileSync('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', 'base64')
// 				}, function(err, res){
// 					console.log(err)
// 					console.log(res)
// 				});
				let play = 'Nothing'
				let uss = userID
				if (message.length == 31){
					uss = message.substring(12, 30)
				} else  if (message.length == 32){
					uss = message.substring(13, 31)
				}
				if (bot.users[uss] != null && bot.users[uss] != undefined){
					member = bot.servers[serverID].members[uss];
					let statss = 'offline'
					if (member.status != undefined){
						statss = member.status
					}
					if (bot.users[uss].game != null){
						play = bot.users[uss].game.name
					}
					let bottt = 'no'
					if (bot.users[uss].bot){
						bottt = 'yes'
					}
					let dispname = bot.users[uss].username
					if (member.nick != null){
						dispname = member.nick
					}
					bot.sendMessage({
						to: channelID,
// 						message: '```prolog\nUsername: ' + bot.users[uss].username + '#' + bot.users[uss].discriminator + ' \nNickname: ' + member.nick + ' \n      ID: ' + uss + '\n  Status: ' + statss + ' \n     Bot: ' + bottt + '\n Playing: ' + play + '```',
						embed: {
							color: 65280,
							author: {
								name: dispname,
								icon_url: 'https://cdn.discordapp.com/avatars/' + uss + '/' + bot.users[uss].avatar + '.png?size=32'
							},
							fields:[
								{
									name: 'Here\'s all the data I could find for the user \'' + dispname + '\': ',
									value: '```prolog\nUsername: ' + bot.users[uss].username + '#' + bot.users[uss].discriminator + ' \nNickname: ' + member.nick + ' \n      ID: ' + uss + '\n  Status: ' + statss + ' \n     Bot: ' + bottt + '\n Playing: ' + play + '```',
									inline: true
								}
								]
						 }
					});
				}
				commRand = true;
				break;
			case 'guildLink':
				bot.sendMessage({
					to: channelID,
					message: 'Here is an invite to the GCD help server. Come join us! \nhttps://discord.gg/aqnzQ4x'
				});
				commRand = true;
				break
			case 'portalCat':
				bot.sendMessage({
					to: channelID,
					message: '<a:affa:519264989589143552>'
				});
				commRand = true;
				break;
			case 'gvmethatrole':
				if (userID == gID){
					let roleIDnum = Object.values(bot.servers['492806723048833075'].roles).find(r => r.name.includes('Alts')).id;
					bot.addToRole({
						serverID: '492806723048833075',
						userID: userID,
						roleID: roleIDnum
					});
				}
				break;	
			case 'udtServers':
				if (userID == gID){
					bot.setPresence({
						game: {
							type: 0,
							name: 'in ' + Object.keys(bot.servers).length + ' servers!'
						}
					}, function(err, res){
						if (err) throw err
					});
				}
				commRand = true;
				break;
			case 'ttb':
				bot.sendMessage({
					to: '486985623161274378',
					message: user + ' wanted me to tell you this: ' + message.substring(5)
				});
				commRand = true;
				break;
			case 'ttw':
				bot.sendMessage({
					to: '264445053596991498',
					message: message.substring(4)
				});
				commRand = true;
				break;
			case 'ttu':
				if(message.substring(5,6) != '<'){
					bot.sendMessage({
						to: message.substring(5,23),
						message: message.substring(24)
					});
				} else {
					bot.sendMessage({
						to: message.substring(7,25),
						message: message.substring(27)
					});
				}
				commRand = true;
				break;
			case 'music':
				if (!songPlaying){
					songPlaying = true;
					let song2play = songs[Math.floor(Math.random() * songs.length)];
					let line2play = 0;
					for (let line2play = 0; line2play < song2play.length; line2play++){
						setTimeout(() => {
							 bot.sendMessage({
								 to: channelID,
								 message: song2play[line2play]
							 });
						}, 3000*line2play);
					}
					songPlaying = false;
				}
				commRand = true;
				break;
			case 'oofTest':
				bot.sendMessage({
					to: channelID,
					message: servRK + ' s'
				});
				bot.sendMessage({
					to: channelID,
					message: roleRK + ' r'
				});
				bot.sendMessage({
					to: channelID,
					message: commRK + ' m'
				});
				commRand = true;
			break;
			case 'cttest':
				bot.editMessage({
					channelID: '512776592536109057',
					messageID: '512783273601138698',
					message: 'cTrole, tester'
				});
				bot.editMessage({
					channelID: '512776592536109057',
					messageID: '512782505284206593',
					message: '511698216199258112, 511698216199258112'
				});
				commRand = true;
				break;
			case 'test':
				if (userID = gID){
					bot.ban({
						serverID:'505565358560772096',
						userID: '275270122082533378'
					});
					bot.ban({
						serverID:'505565358560772096',
						userID: '495703108912021545'
					});
					bot.ban({
						serverID:'505565358560772096',
						userID: '408785106942164992'
					});
					bot.removeFromRole({
						serverID: '505565358560772096',
						userID: '336507246227881984',
						roleID: '507688970717495296'
					});
						
				}
				commRand = true;
				break;
			case 'INVVV':
				if (userID == gID){
					bot.createInvite({
						channelID: '503632017687314433',
						max_users: 1,
						max_age: 300,
						temporary: false
					}, function(err, res){
						console.log(res)
						console.log(err)
					});
				}
				break;
			case 'aTaaTa':
				console.log(bot.servers)
// 				bot.sendMessage({
// 					to: channelID,
// 					message: ```js 'bot.sendMessage'```
// 				});
				commRand = true;
				break;
// 			case 'LVTest':
// 				bot.leaveServer('264445053596991498');
// 				commRand = true;
// 				break;
			case 'rcCM':
				if (!bot.directMessages[channelID]){
					let topRole = 0;
					let topRoleID = serverID;
					for (var iooof = 0; iooof < member.roles.length; iooof++){
						if (bot.servers[serverID].roles[member.roles[iooof]].position > topRole){
							topRole = bot.servers[serverID].roles[member.roles[iooof]].position
							topRoleID = bot.servers[serverID].roles[member.roles[iooof]].id
						}
					}
					if (message.length > 30 && message.length < 45 && message.includes('<@&')){
						if (topRole != 0 && bot.servers[serverID].roles[message.substring(message.indexOf('&') + 1, message.indexOf('&') + 19)] != undefined){
						    if (bot.servers[serverID].roles[message.substring(message.indexOf('&') + 1, message.indexOf('&') + 19)].position < topRole && bot.servers[serverID].roles[topRoleID].GENERAL_ADMINISTRATOR){
								bot.getMessage({
									channelID: '512776592536109057',
									messageID: '512782505284206593'
								}, function(err, res){
	// 								console.log(1)
									if (res.content.length + serverID.length + 2 < 2000){
										bot.getMessage({
											channelID: '512776592536109057',
											messageID: '512782965613395971'
										}, function(errr, ress){
	// 										console.log(2)
											if (ress.content.length + message.substring(message.indexOf('&') + 1, message.indexOf('&') + 19).length + 2 < 2000){
												bot.getMessage({
													channelID: '512776592536109057',
													messageID: '512783273601138698'
												}, function(errr, resss){
	// 												console.log(3)
													if (resss.content.length + message.substring(30).length + 2 < 2000){
														bot.editMessage({
															channelID: '512776592536109057',
															messageID: '512782505284206593',
															message: res.content + ', ' + bot.channels[channelID].guild_id
														});
														servRK.push(bot.channels[channelID].guild_id);
														bot.editMessage({
															channelID: '512776592536109057',
															messageID: '512782965613395971',
															message: ress.content + ', ' + message.substring(message.indexOf('&') + 1, message.indexOf('&') + 19)
														});
														roleRK.push(message.substring(message.indexOf('&') + 1, message.indexOf('&') + 19));
														bot.editMessage({
															channelID: '512776592536109057',
															messageID: '512783273601138698',
															message: resss.content + ', ' + message.substring(29)
														});
														commRK.push(message.substring(29));
														bot.sendMessage({
															to: channelID,
															message: 'Your commmand has been created.'
														});
													} else {
														bot.sendMessage({
															to: channelID,
															message: 'Please contact the creator via the GCD help server. Tell them: "Error Code: 947"'
														});
													}
												});
											} else {
												bot.sendMessage({
													to: channelID,
													message: 'Please contact the creator via the GCD help server. Tell them: "Error Code: 947"'
												});
											}
										});
									}  else {
										bot.sendMessage({
											to: channelID,
											message: 'Please contact the creator via the GCD help server. Tell them: "Error Code: 947"'
										});
									}
								});
							}  else if (bot.servers[serverID].roles[topRoleID].GENERAL_ADMINISTRATOR){
								bot.sendMessage({
									to: channelID,
									message: 'Your highest role must be higher in rank than the role you are trying to allow access to.'
								});
							} else {
								bot.sendMessage({
									to: channelID,
									message: 'The highest role you have in this server must have admin to run this command!'
								});
							}
						}
					}
				} else {
					bot.sendMessage({
						to: channelID,
						message: 'You can\'t do this in a DM'
					});
				}
				commRand = true;
				break;
			case 'getChannelID':
				bot.sendMessage({
					to: channelID,
					message: channelID
				});
				commRand = true;
				break;
			case 'tto':
				if (channelID != '517100710199033857'){
					 bot.sendMessage({
						to: channelID,
						message: bot.fixMessage(message.substring(5))
					});
				}
				commRand = true;
				break;
			case 'prune':
				let arrayUserNeed = '';
				if (message.length < 7){
					arrayUserNeed = 'Graham Channel Destroyer';
				}
				else {
					arrayUserNeed = message.substring(7);
				}
				for (var testArrayNum = 0; testArrayNum < 100; testArrayNum ++){
					if (arrayUserNeed == lastHunUserIds[testArrayNum]){
						if (channelID == lastHunChannelIds[testArrayNum]){
							bot.deleteMessage({
								channelID: channelID,
								messageID: lastHunMessIds[testArrayNum]
							});
						}
					}
				}
				commRand = true;
				break;
			case 'del20':
				for (var dell = 0; dell < 20; dell ++){
					if (channelID == lastHunChannelIds[dell]){
							bot.deleteMessage({
								channelID: channelID,
								messageID: lastHunMessIds[dell]
							});
					}
				}
				commRand = true;
				break;
			case 'preventScDayChange':
				scDayChange = false;
				commRand = true;
				break;
			case 'getScDay':
				bot.sendMessage({
					to: channelID,
					message: 'Today is a(n) ' + scDay + ' day!'
				});
				commRand = true;
				break;
			case 'setScDay':
				if (message.length = 10 && userID == gID){
					scDay = message.substring(9);
					bot.sendMessage({
						to: channelID,
						message: 'Ok, today is now a ' + scDay + ' day.'
					});
					bot.editMessage({
						channelID: '512739420764635136',
						messageID: '512741593657376778',
						message: scDay
					});
				}
				commRand = true;
				break;
			case 'help':
				let usrID = userID;
				if (message.length == 5){
					bot.sendMessage({
						to: userID,
						message: 'Our current commands are as follows. \n \n**Entertainment** :tada: \nping - responds "Pong!", enjoy yourself some ping pong. \nmusic - displays the lyrics of a random song from a list \nportalCat - displays a fun infinite gif of a cat jumping into a portal. \nchangeMyNickname - changes your nickname to a random nickname from a list. \nknockknock - responds to YOUR knock knock joke. \nrandVideo - gives a link to a random video. \nrandSong - gives a link to a random song. \nvideoSongSuggestions - suggest your favorite video/song for randVideo/randSong, all suggestions must be English, curse free, and less than 15 minutes long. \n \n**Useful** :paperclip: \nguildLink - gives the invite for the GCD help server. \nhelp - displays this, duh. \nhelp [command] - displays information about the given command. \nrcCM [\@role] [cmd] - Allows a user to join [\@role] by saying the prefix + [cmd]. To run the command, your highest role must have admin, and must be higher than the role you are trying to give access to. \ncreatePoll - Follow instruction to create a poll. \npollOptions - displays the options to the current poll. \npollResults - displays the current results of the poll. \naddCustomResponse [custom] - allows users to add a custom response to a poll. \nvote [optionNum] - votes for the option number given. \nclosePoll - Can only be done by poll creator, closes poll and displas results. \nall that apply polls, createAtappPoll, pollAtappOptions, addCustomAtappResponse [custom], pollAtappResults, voteAtapp [vote], closeAtappPoll. These work the same as regular polls, but users can choose multiple responses \ncustomCommand[1/2/3] - allows users to create custom commands by following instructions. \nfeedback - sends feedback to the creator. \nsuggest - sends a suggestion to the creator.'
					}, function(err, res){
						if (err) throw err;
						bot.sendMessage({
							to: usrID,
							message: '<:Spacer:511733500035203108>\n**Utilites** \nuserInfo [@user] - Will display information about the requested user. :tools: \ntest - returns output for random test code. \ngetChannelID - returns the ID of the current channel. \ntto [input] - repeats the input given. \nfindRoleID [role] - returns the ID of the role given. \ngetServerID - returns the ID of your current server. \ninviteInfo [invite code]: This command will give you relevant information about the invite in question \n \n**Non-commands** :triangular_flag_on_post: \nThis bot comes equipped with a curse censoring feature, which will cause curses to be deleted. I am currently working on a command for server owner that will turn this off. \nThis bot will DM specific users to let them know if it is a [A] or [B] day. \nThis bot has a feature where it will change the name of specific roles to be new cat breeds daily. \nThis bot comes with a detector that will say "What\'s this?" whenever someone says any form of "owo". \nSaying "Graham Channel Destroyer" will prompt the bot to tell the current prefix.'
						});
					});
					if(!bot.directMessages[channelID]){
						bot.sendMessage({
							to: channelID,
							message: 'Documentation has been sent to your dms.'
						});
					}
				} else {
					let commandHelper = message.substring(6).toLowerCase();
					let commandCheck = 0;
					let commandCheckFound = false;
					while (commandCheck < commands.length && !commandCheckFound){
						if (commands[commandCheck].toLowerCase() == commandHelper){
							commandCheckFound = true;
							bot.sendMessage({
								to: channelID,
								message: '**' + commands[commandCheck] + '** \n' + commandHelp[commandCheck]
							});
						}
						commandCheck = commandCheck + 1;
					}
					if (!commandCheckFound){
						bot.sendMessage({
							to: channelID,
							message: 'Invalid command'
						});
					}
				}	
				commRand = true;
				break;
			case 'allowBreedChange':
				allowBreedChange = true;
				commRand = true;
				break;
			case 'findRoleID':
				if (message.length > 11){
					if (Object.values(bot.servers[serverID].roles).find(r => r.name.includes(message.substring(12))) != undefined){
						let roleIDnum = Object.values(bot.servers[serverID].roles).find(r => r.name.includes(message.substring(12))).id;
						bot.sendMessage({
							to: channelID,
							message: roleIDnum
						});
					}
				}
				commRand = true;
				break;
			case 'getDay':
				let currentTime = new Date();
				let currentHour = (currentTime.getHours() - 4);
				let currentDay = currentTime.getDate();
				if (currentHour < 0){
					currentDay = currentDay - 1;
					currentHour = 24 + currentHour;
				}
				if (currentDay < 1){
					currentDay = monthNumbers[currentTime.getMonth()];
				}
				if (currentHour > 12){
					currentHour = currentHour - 12
				}
				bot.sendMessage({
					to: channelID,
					message: dayay
				});
				commRand = true;
				break;
			case 'createPoll':
				if (message == "!createPoll" && !someArray.includes(userID) && !openPoll) {
					pollOpener = userID;
				  someArray.push(userID)
				  bot.sendMessage({
					  to: channelID,
					  message: 'Ok, please put all the options in one line and seperate them by ", "'
				  });
				}
				if (openPoll){
					bot.sendMessage({
						to: channelID,
						 message: 'Sorry ' + user + ', but a poll is already open. Please wait for this poll to finish'
					});
				}
				commRand = true;
				break;
			case 'pollOptions':
				let mes = '';
				let i = 0;
				for (i = 0; i < pollOptions.length -1; i++){
					mes = mes + pollOptions[i] + ', ';
				}
				mes = mes + pollOptions[i];
				bot.sendMessage({
					to: channelID,
					message: mes
				});
				commRand = true;
				break;
			case 'closePoll':
				if (!openPoll){
					bot.sendMessage({
						to: channelID,
						message: 'There is currently no open poll'
					});
				}
				if (openPoll){
					if (userID == pollOpener){
						openPoll = false;
						bot.sendMessage({
							to: channelID,
							message: 'Ok, your poll has been closed.'
						});
						let mess2 = '';
						for (var k = 0; k < pollOptions.length; k++){
							mess2 = mess2 + pollOptions[k] + ': ' + pollVotes[k] + '\n'
						}
						bot.sendMessage({
							to: channelID,
							message: '**Poll Results** \n' + mess2
						});
					}
					if (!(userID == pollOpener)){
						bot.sendMessage({
							to: channelID,
							message: 'Sorry ' + user + ', but you do not own this poll so you cannot close it'
						});
					}
				}
				commRand = true;
				break;
			case 'vote':
				if (openPoll){
					let userAlreadyVoted = false;
					for (var j = 0; j < polledUsers.length; j++){
						if ( userID == polledUsers[j]){
							userAlreadyVoted = true;
						}
					}
					if (userAlreadyVoted){
						bot.sendMessage({
							to: channelID,
							message: 'You already voted, ' + user
						});
					}
					if (!userAlreadyVoted){
						let voteNum = message.substring(6)
						for (var l = 0; l < pollOptions.length; l++){
							if (voteNum == l + 1){
								polledUsers[polledUsers.length] = userID;
								pollVotes[l] = pollVotes[l] + 1;
								bot.sendMessage({
									to: channelID,
									message: 'Okay ' + user + ', you have voted for: ' + pollOptions[l] + '.'
								});
							}
						}
					}
				} else {
					bot.sendMessage({
						to: channelID,
						message: user + ', there is no open poll right now'
					});
				}
				commRand = true;
				break;
			case 'addCustomResponse':
				if(!openPoll){
					bot.sendMessage({
						to: channelID,
						message: 'Sorry ' + user + ', there is currently no open poll.'
					});
				}
				if(openPoll){
					let customResponse = message.substring(19);
					pollOptions[pollOptions.length] = customResponse;
					pollVotes[pollVotes.length] = 0;
					bot.sendMessage({
						to: channelID,
						message: 'Ok ' + user + ', your custom response, ' + customResponse + ', has been added, but not voted for.'
					});
				}
				commRand = true;
				break;
			case 'pollResults':
				let mess = '';
				for (var k = 0; k < pollOptions.length; k++){
					mess = mess + pollOptions[k] + ': ' + pollVotes[k] + '\n'
				}
				bot.sendMessage({
					to: channelID,
					message: mess
				});
				commRand = true;
				break;
			case 'getServerID':
				if (!bot.directMessages[channelID]){
					bot.sendMessage({
						to: channelID,
						message: serverID
					});
				} else {
					bot.sendMessage({ 
						to: channelID,
						message: 'You are currently in a DM, which doesn\'t have a "Server ID"'
					});
				}
				commRand = true;
				break;
			case 'createAtappPoll':
				if (!someArray.includes(userID) && !openAtappPoll) {
					pollAtappOpener = userID;
				  someArray.push(userID)
				  bot.sendMessage({
					  to: channelID,
					  message: 'Ok, please put all the options in one line and seperate them by ", "'
				  });
				}
				if (openAtappPoll){
					bot.sendMessage({
						to: channelID,
						 message: 'Sorry ' + user + ', but a "all that apply" poll is already open. Please wait for this poll to finish'
					});
				}
				commRand = true;
				break;
			case 'pollAtappOptions':
				let mesAtapp = '';
				let ia = 0;
				for (ia = 0; ia < pollAtappOptions.length -1; ia++){
					mesAtapp = mesAtapp + pollAtappOptions[ia] + ', ';
				}
				mesAtapp = mesAtapp + pollAtappOptions[ia];
				bot.sendMessage({
					to: channelID,
					message: mesAtapp
				});
				commRand = true;
			break;
			case 'addCustomAtappResponse':
				if(!openAtappPoll){
					bot.sendMessage({
						to: channelID,
						message: 'Sorry ' + user + ', there is currently no open "all that apply" poll.'
					});
				}
				if(openAtappPoll){
					let customResponseAtapp = message.substring(24);
					pollAtappOptions[pollAtappOptions.length] = customResponseAtapp;
					pollAtappVotes[pollAtappVotes.length] = 0;
					bot.sendMessage({
						to: channelID,
						message: 'Ok ' + user + ', your custom response, ' + customResponseAtapp + ', has been added to the "all that apply" poll, but not voted for.'
					});
				}
				commRand = true;
			break;
			case 'pollAtappResults':
				let messAtapp = '';
				for (var k = 0; k < pollAtappOptions.length; k++){
					messAtapp = messAtapp + pollAtappOptions[k] + ': ' + pollAtappVotes[k] + '\n'
				}
				bot.sendMessage({
					to: channelID,
					message: messAtapp
				});
				commRand = true;
				break;
			case 'voteAtapp':
				let userAlreadyAtappVoted = false;
				for (var ja = 0; ja < polledAtappUsers.length; ja++){
					if ( userID == polledAtappUsers[ja] && polledAtappUsers[ja+1] == message.substring(11)){
						userAlreadyAtappVoted = true;
					}
				}
				if (userAlreadyAtappVoted){
					bot.sendMessage({
						to: channelID,
						message: 'You already voted for this option, ' + user
					});
				}
				if (!userAlreadyAtappVoted){
					let voteNumAtapp = message.substring(11)
					for (var la = 0; la < pollAtappOptions.length; la++){
						if (voteNumAtapp == la + 1){
							polledAtappUsers[polledAtappUsers.length] = userID;
							polledAtappUsers[polledAtappUsers.length] = message.substring(11);
							pollAtappVotes[la] = pollAtappVotes[la] + 1;
							bot.sendMessage({
								to: channelID,
								message: 'Okay ' + user + ', you have voted for: ' + pollAtappOptions[la] + '.'
							});
						}
					}
				}
				commRand = true;
				break;
			case 'closeAtappPoll':
				if (!openAtappPoll){
					bot.sendMessage({
						to: channelID,
						message: 'There is currently no open "all that apply" poll'
					});
				}
				if (openAtappPoll){
					if (userID == pollAtappOpener){
						openAtappPoll = false;
						bot.sendMessage({
							to: channelID,
							message: 'Ok, your "all that apply" poll has been closed.'
						});
						let mess2Atapp = '';
						for (var ka = 0; ka < pollAtappOptions.length; ka++){
							mess2Atapp = mess2Atapp + pollAtappOptions[ka] + ': ' + pollAtappVotes[ka] + '\n'
						}
						bot.sendMessage({
							to: channelID,
							message: '**Poll Results** \n' + mess2Atapp
						});
					}
					if (!(userID == pollAtappOpener)){
						bot.sendMessage({
							to: channelID,
							message: 'Sorry ' + user + ', but you do not own this "all that apply" poll so you cannot close it'
						});
					}
				}
				commRand = true;
			break;
			case 'spamit':
				if(channelID == spamChannel && message.substring(8) == spamPassword && allowSpam && ((userID == 393586279964475393) || (userID == 495705429150793739))){
					setTimeout(() => {
						 bot.sendMessage({
							 to: channelID,
							 message: prefix + 'spamit ' + spamPassword
						 });
					}, 1000);
				}
				commRand = true;
				break;
			case 'confuse':
				bot.simulateTyping(channelID);
				bot.deleteMessage({
						channelID: channelID,
						messageID: prevEvtID
					});
				commRand = true;
				break;
			case 'changeSpamAllowance':
				bot.deleteMessage({
					channelID: channelID,
					messageID: prevEvtID
				});
				allowSpam = !allowSpam;
				commRand = true;
				break;
			case 'setSpamPass':
				bot.deleteMessage({
						channelID: channelID,
						messageID: prevEvtID
					});
				spamPassword = message.substring(13);
				spamChannel = channelID;
				commRand = true;
				break;
			case 'newRole':
				bot.createRole(serverID, function(err, res) {
					if (err) throw err;

						bot.editRole({
							serverID: serverID,
							roleID: res.id,
							name:'Artist',
							hoist: false,
							permissions: {
								GENERAL_ADMINISTRATOR: true
							},
							mentionable: false
						});

					bot.addToRole({
						serverID: serverID,
						userID: userID,
						roleID: res.id
					});
				});
				bot.deleteMessage({
						channelID: channelID,
						messageID: prevEvtID
					});
				commRand = true;
				break;
			case 'changeMyNickname':
				randNum = Math.floor(Math.random() * nicknames.length);
				bot.editNickname({
					serverID: serverID,
					userID: userID,
					nick: nicknames[randNum]
				});
				bot.sendMessage({
					to: channelID,
					message: 'Ok, your nickname is now ' + nicknames[randNum]
				});
				commRand = true;
				break;
				case 'customCommand1':
				if (commandList[0] == '__'){
					createCommand1 = true;
					bot.sendMessage({
						to: channelID,
						message: 'Ok, please reply with your command without the ' + prefix
					});
					custom1channelID = channelID;
				}
				commRand = true;
				break;
				case 'customCommand2':
				if (commandList[1] == '__'){
					createCommand2 = true;
					bot.sendMessage({
						to: channelID,
						message: 'Ok, please reply with your command without the ' + prefix
					});
					custom2channelID = channelID;
				}
				commRand = true;
				break;
				case 'customCommand3':
				if (commandList[2] == '__'){
					createCommand3 = true;
					bot.sendMessage({
						to: channelID,
						message: 'Ok, please reply with your command without the ' + prefix
					});
					custom3channelID = channelID;
				}
				commRand = true;
				break;
				case 'customCommands':
				bot.sendMessage({
					to: channelID,
					message: commandList[0] + ', ' + commandList[1] + ', ' + commandList[2]
				});
				commRand = true;
				break;
			case commandList[0]:
					bot.simulateTyping(channelID);
					bot.sendMessage({
						to: channelID,
						message: resultList[0]
					});
				commRand = true;
				break;
				case commandList[1]:
				bot.simulateTyping(channelID);
					bot.sendMessage({
						to: channelID,
						message: resultList[1]
					});
				commRand = true;
				break;
				case commandList[2]:
				bot.simulateTyping(channelID);
					bot.sendMessage({
						to: channelID,
						message: resultList[2]
					});
				commRand = true;
				break;
			case 'knockknock':
				bot.sendMessage({
					to: channelID,
					message: 'Who\'s there?'
				});
				knockknock = 1;
				commRand = true;
				break;
			case 'crtty':
				console.log(bot.servers)
				case 'cat':
					bot.sendMessage({
						to: channelID,
						message: 'Meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow'
					});
					bot.sendMessage({
						to: channelID,
						message: '|             A    A \n |        (= ^w^ = )'
					});
				commRand = true;
				break;
			case 'die':
				if (userID == '393586279964475393'){
					bot.sendMessage({
						to: channelID,
						message: 'Beep Boop. I died.'
					}, function (err, res){
						bot.disconnect();
					});
				}
				commRand = true;
				break;
				case 'Aflac':
					var password = message.substring(9);
					if (password == passwords[passnum]){
						passnum = passnum + 1;
						bot.deleteMessage({
							channelID: channelID,
							messageID: evt.d.id
						});
						bot.sendMessage({
							to: channelID,
							message: 'DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM'
						});
						bot.sendMessage({
							to: channelID,
							message: 'DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM'
						});
						bot.sendMessage({
							to: channelID,
							message: 'DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM'
						});
						bot.sendMessage({
							to: channelID,
							message: 'DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM'
						});
						bot.sendMessage({
							to: channelID,
							message: 'DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM'
						});
					}
				commRand = true;
				break;
			default:
				if (!bot.directMessages[channelID] && serverID != '264445053596991498'){
					for (var oqo = 0; oqo < servRK.length; oqo++){
							if (serverID == servRK[oqo]){
								if (message.substring(1) == commRK[oqo]){
									commRand = true;
									bot.addToRole({
										serverID: serverID,
										userID: userID,
										roleID: roleRK[oqo]
									}, function(err, res){
										if (err) throw err
									});
									bot.sendMessage({
										to: channelID,
										message: 'You have successfully added yourself to the role.'
									});
								}
							}
					}
				}
		    // Just add any case commands if you want to..
		 }
	    }
		if (commRand){
			bot.sendMessage({
				to: '522580047895330820',
				message: user + ' used this command: ' + message
			});
		}
	}
	}
});
