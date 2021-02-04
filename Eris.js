const Eris = require("eris");
var logger = require('winston');
var fs = require('fs');
var serverOptions = require('./serverOptions.json');
var ffmpeg = require('ffmpeg');
var nodemailer = require('nodemailer');
var prefix = 'gcd.';
var gID = '393586279964475393';
var cID = '336507246227881984';
var curses = ['SHIT', 'FUCC', 'DYKE', 'TRANNY', 'SCROTUM', 'THOT', 'RAPE', 'DAMN', 'CUNT', 'PORN', 'FUCK', 'FAG', 'FUK', 'ASS', 'BITCH', 'WHORE', 'VAGINAL', 'SLUT', 'BLOWJOB', 'CLITORIS', 'CLIT', 'COOCHIE', 'MASTURBATE', 'MASTURBATION', 'PROSTITUTE', 'JACKASS', 'FAGGOT', 'NIGGER', 'NIGGA', 'TIT', 'BOOB', 'BOOBS', 'DICK', 'PENIS', 'PUSSY', 'ARSE', 'SEMEN', 'CUM', 'BOLLOCK', 'BONER', 'WHORE', 'DILDO', 'SEX'];
var nonWordCurses = ['SHIT', 'FUCC', 'DYKE', 'TRANNY', 'SCROTUM', 'no', 'no', 'DAMN', 'no', 'PORN', 'FUCK', 'no', 'FUK', 'no', 'BITCH', 'WHORE', 'VAGINAL', 'SLUT', 'BLOWJOB', 'CLITORIS', 'no', 'COOCHIE', 'MASTURBATE', 'MASTURBATION', 'PROSTITUTE', 'JACKASS', 'FAGGOT', 'NIGGER', 'NIGGA', 'no', 'BOOB', 'BOOBS', 'DICK', 'PENIS', 'PUSSY', 'no', 'no', 'no', 'BOLLOCK', 'BONER', 'WHORE', 'DILDO', 'SEX'];
var prevEvtID = 0;
var cussmessage = '.';
var serverID = '12345678';
var randNum = 0;
var spot = 0;
var symbolList = ['\uFEFF','​','!', '\'', '"', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '=', '~', '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ',', '.', '/', '?', '|', '\\', '>', '<', '(', ')', '[', ']', '{', '}'];
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
var d = new Date();
var monthNumbers = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var member;
var channel;
var serverOwnerID;
var scDayChange = true;
var scDay = 'oof';
var remdSent = false;
var dayay;
var allowOwo = true;
var allowCuss = false;
var notCusses = ['ASSU', 'ASSE', 'ASSA', 'ASSI', 'ASSO', 'ASSY', 'ASSM', 'TITLE', 'CUMULATIVE', 'SEXY', 'SEXISM', 'TITAN','TITUS','DRAPE'];
var hasMistakenCuss = false;
var cussIndexes = [];
var mistakenIndexes = [];
var bikCussServers = ['500864200378155008', '505565358560772096', '495699832313217064', '489547644138422302', '429446593792442369', '490695949786677248', '502673768225832960', '505885160752021525','604626560384892929'];
var commRand = false;
var commands = ['ping', 'music', 'portalCat', 'changeMyNickname', 'knockknock', 'randVideo', 'randSong', 'videoSongSuggestions', 'guildLink', 'help', 'rcCM', 'createPoll', 'pollOptions', 'pollResults', 'addCustomResponse', 'vote', 'closePoll', 'createAtappPoll', 'pollAtappOptions', 'addCustomatAtappResponse', 'pollAtappResults', 'votAtapp', 'closeAtapp', 'customCommand', 'feedback', 'suggest', 'userInfo', 'test', 'getChannelID', 'tto', 'findRoleID', 'getServerID', 'inviteInfo', 'purge','toggleNSFW', 'toggleJoinNotifications'];
var commandHelp = ['Replys "Pong!", perfect for a game of never-ending ping pong.', 'Replys with the lyrics of a random song.', 'Replys with an animated emoji of a cat jumping into a portal.', 'Changes your nickname to a random nickname from a list.', 'Replys to YOUR knock-knock joke.', 'Replys with a link to a user-suggested video.', 'Replys with a link to a user-suggested song.', 'Sends your video/song suggestion to the owner for review. \nSuggestions must be (mainly) English, curse-free, and under 15 minutes long.', 'Replys with an invite to the GCD Support Server.', 'There are two ways to use this command. \nhelp: DMs you a complete list of commands and descriptions. \nhelp [command]: Replys with a description of that command.', 'Usage: rcCM [@role] [cmd] \nAllows users to join/leave the mentioned role by saying ' + prefix + 'cmd \nTo run the command, your highest role must have admin/manage roles, and must be higher than the role you are trying to give access to.', 'Follow directions after using this command to create a poll users can respond to.', 'Replys with the options to the current poll.', 'Replys with the current results of the current poll.', 'Usage: addCustomResponse [custom] \nAllows you to add a custom response to a poll.', 'Usage: vote [optionNum] \nAdds your vote to the option specified, you can only vote once per poll.', 'Can only be done by the poll opener, closes the current poll.', 'After using this command, follow directions to create an \'All that apply\' poll.', 'Replys with the options for the current \'All that apply\' poll.', 'Usage: addCustomAtappResponse [custom] \nAllows you to add a custom response to an \'All that apply\' poll.', 'Replys with the current results for the current \'All that apply\' poll.', 'Allows you to vote for an option in an \'All that apply\' poll. Can be used multiple times.', 'Allows the owner of an \'All that apply\' poll to close it.', 'Usage: customCommand[1/2/3] \nAllows users to create custom (temporary) commands by running the command and following instructions', 'Usage: feeback [feedback] \nSends your feedback to the creator.', 'Usage: suggest [suggestion] \nSends your suggestion to the creator.', 'Usage: useInfo [@user] \nReplys with information about the mentioned user.', 'Replys with a sample of code currently in development.', 'Replys with the ID of the current channel.', 'Usage: tto [input] \nRepeats the input back', 'Usage: findRoleID [@role] \nReplys with the ID of the mentioned role.', 'Replys with the ID of the current server.', 'Usage: inviteInfo [invite] \nReplys with info about the invite given.', 'Usage: purge [num] \nPurges the number of messages requested (This number does not include the gcd.purge message, which is also deleted)','Toggles the NSFW quality for the current channel. \nTo run the command, your highest role must have admin/manage channels.', 'Toggles join notifications for your server. \nTo run the command, you must be the sesrver owner.'];
var pfMsgLength = 15;

//team blue 499003285106196480
//team red 499003389955407872
//team green 499003482922024960

//check a permission function. Usage: 1. role permission ID that you're checking, 2. role permission ID that you're looking for, 3. 1073741824. MUST BE 1073741824.
//This function returns true if role permission you're looking for is inside the roleID permissions ID, otherwise false.
function checkPerms (roleID, roleIDcheck, currentRoleID){
  if(currentRoleID==roleIDcheck){
    if(roleID>=roleIDcheck){
      return true;
    }else{
      return false;
    }
  }else{
    if(roleID>=currentRoleID){
      return checkPerms((roleID-currentRoleID), roleIDcheck, (currentRoleID/2));
    }else{
      return checkPerms((roleID), roleIDcheck, (currentRoleID/2));
    }
  }
}

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot 
var bot = new Eris(process.env.token);

const { Client } = require('pg');
const dtb = new Client({
  connectionString: 'postgres://pqqdeufmjhfapi:a7dfc3d12dfdcfbfa3f5ed2bab3b69191788f652d49b6e205c5e87e19448a4a5@ec2-54-235-92-244.compute-1.amazonaws.com:5432/db4aqjlp6bhtn0',
  ssl: {
    rejectUnauthorized: false
  }
});
dtb.connect();

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'grahamcussdestroyer@gmail.com',
		pass: process.env.empass
	}
});


bot.connect();
bot.on("ready", () => {
    console.log('Connected');
    console.log('Logged in as: ');
    console.log(bot.user.username + ' - (' + bot.user.id + ')');
});

bot.on('disconnect', (erMsg, code) => {
    bot.connect();
});


bot.on('guildCreate', (server) => {
	dtb.query('SELECT cursedefault FROM servers WHERE id = \'' + server.id + '\'', function(e, r){
		if (r != undefined){
			if (r.rows[0] == undefined){
				dtb.query('INSERT INTO servers(id, cursedefault) VALUES (' + server.id + ', false)');
			}
		}
	});
});

bot.on('any', (event) => {
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


bot.on('messageUpdate', (msg, oldMsgData) => {
	var newMsgData = msg;
	var channelID = msg.channel.id;
	if (msg.author != undefined){
		var userID = msg.author.id;
		var user = msg.author.username;
	}
	var message = msg.content;
	var isDM = (msg.channel.guild == undefined);
	channel = msg.channel;
	member = msg.member;

	if (!isDM){
		serverID = msg.channel.guild.id;
		serverOwnerID = bot.guilds.get(serverID).ownerID;
	}
	else {
		serverID = "DM";
		serverOwnerID = "DM";
	}
	
	cussIndexes = [];
	mistakenIndexes = [];
	
	if (bikCussServers.includes(serverID)){
		curses.push('BIKE')
		nonWordCurses.push('no')
	}
	
	prevEvtID = msg.id;
	cussmessage = message.toUpperCase();
	
	allowOwo = true;
	allowCuss = false;
	if (serverOptions[serverID] != undefined){
		allowCuss = serverOptions[serverID]["allowCussing"];
		allowOwo = serverOptions[serverID]["allowOwoing"];
	}
	
		
	//Cuts symbols out of message
	for (var i = 0; i < symbolList.length; i++){
		if (cussmessage.includes(symbolList[i])){
			spot = cussmessage.indexOf(symbolList[i]);
			cussmessage = cussmessage.substring(0, spot) + cussmessage.substring(spot + 1);
			i = i-1;
		}
	}
	
	//Checks for words that could be mistaken by the bot as a cuss
	hasMistakenCuss = false;
	for (var i = 0; i < notCusses.length; i++){
		if (cussmessage.includes(notCusses[i])){
			var hasMistakenCuss = true;
			mistakenIndexes.push(cussmessage.indexOf(notCusses[i]));
		}
	}

	//Checks for cusses
	for (var i = 0; i < curses.length; i++){
		if (cussmessage.includes(curses[i])){
			if (nonWordCurses[i] != 'no' || message.includes('A$$H0L3') || cussmessage.substring(0, (curses[i].length)) == curses[i] || cussmessage.includes(' ' + curses[i])){
		    		cussIndexes.push(cussmessage.indexOf(curses[i]));
			}
		}
	}
	
	//Checks if the cusses are the same as the mistaken cusses, removes them if so.
	for (var i = 0; i < cussIndexes.length; i = i){
		if (mistakenIndexes.includes(cussIndexes[i])){
		    cussIndexes.splice(i, 1);
		} else {
			i++
		}
	}
	
	dtb.query('SELECT cursedefault FROM servers WHERE id = \'' + serverID + '\'', function(e, r){
		if (r != undefined){
			if (r.rows[0] != undefined){
				allowCuss = r.rows[0].cursedefault;
				if (!allowCuss){
					if (bot.users.get(userID) != undefined){
						if (!(userID == 408785106942164992) && !(bot.users.get(userID).bot) && cussIndexes.length > 0 && channelID != '524703539801489418' && channelID != '513116265439821832' && !channel.nsfw || message.includes('A$$H0L3')|| message == 'ERIS CUSS TEST'){
								bot.deleteMessage(channelID, prevEvtID);
								bot.createMessage(channelID, user + ', please don\'t curse. Thank you.');
								bot.createMessage('509920937093890058', userID).catch();
								bot.createMessage('524703539801489418', message + ': from: ' + user + ' servID: ' + serverID + ', chID: ' + channelID);
						}
						if (cussmessage.includes('BIKE') && serverID == 490695949786677248){
							bot.deleteMessage(channelID, prevEvtID);
							bot.createMessage(channelID, user + ', please don\'t curse. Thank you.');
							bot.createMessage('509920937093890058', userID).catch();
							bot.createMessage('524703539801489418', message + ': from: ' + user + ' servID: ' + serverID + ', chID: ' + channelID);
						}
					}
				}
			}
		}
	});
	
	if (bikCussServers.includes(serverID)){
		curses.splice(curses.length - 1, 1)
		nonWordCurses.splice(nonWordCurses.length - 1, 1)
	}

});


bot.on('messageCreate', (msg) => {

	var channelID = msg.channel.id;
	var userID = msg.author.id;
	var user = msg.author.username;
	var message = msg.content;
	var isDM = (msg.channel.guild == undefined);
	channel = msg.channel;
	member = msg.member;

	if (!isDM){
		serverID = msg.channel.guild.id;
		serverOwnerID = bot.guilds.get(serverID).ownerID;
	}
	else {
		serverID = "DM";
		serverOwnerID = "DM";
	}
	
	cussIndexes = [];
	mistakenIndexes = [];
	
	if (bikCussServers.includes(serverID)){
		curses.push('BIKE')
		nonWordCurses.push('no')
	}
	
	if (isDM && channelID != '495705429150793739' && message.indexOf("Our current commands are as follows.") == -1 && message.indexOf("Today is a") == -1 && message.indexOf("This bot comes equipped with a curse censoring feature,") == -1){
		bot.createMessage('508329340652748800', user + ': ' + message + ' (' + channelID + ')')
	}
	
	prevEvtID = msg.id;
	
	//lol
	if (true){
		//Sets variables for time/date
		let thisTime = new Date();
			let thisMinute = thisTime.getMinutes();
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
		//So basically, this allows it to detect if the date changed.
		if ((thisTime.getHours() - 5) == 16 && thisMinute == 20 && (thisTime.getSeconds == 0)){
			bot.createMessage('703452725219950623', 'https://i.ibb.co/Jp9Y11W/sharkhmm.gif')
		}
		prevDay = day;
		day = thisDay;
		dayay = thisDayay;
		//If day did change...
		if ((day != prevDay && scDay != 'oof') || message == "gcd.gcd.gcd...gcD."){
			//Update server count.
			bot.editStatus("online", {"name": "in " + Object.keys(bot.guildShardMap).length + ' servers! gcd.help', "type": 0});
			//A/B day rotation notification setting.
			let scAnMsg = scDay;
			if (scDay.length == 1){
				if (scDayChange){
					if (scDay.toUpperCase() == 'A'){
						dtb.query('UPDATE day SET day = \'B\'');
						scDay = 'B';
					} else if (scDay.toUpperCase() == 'B'){
						scDay = 'A';
						dtb.query('UPDATE day SET day = \'A\'');
					}
					//If it is Sat/Sun
					if (thisDayay == 5 || thisDayay == 6){
						scAnMsg = 'Today is a weekend! Enjoy!'
					} else {
						//Tells ppl the A/B rotation day
						scAnMsg = 'Today is a(n) ' + scDay + ' day.'
					}
				}
				//I don't really use this, so basically it's useless at this point?
				if (!scDayChange){
					scAnMsg = 'Yesterday was a(n) ' + scDay + ' day, and I guess today is one too. Holiday? Testing crap? Whatever it is, enjoy it.'
					scDayChange = true;
				}
			//If I set the day to be somthing like... "Halloween"
			}
			if(scDay.toUpperCase() != 'NONE'){
				let scAnnounce = 0;
				let scAnnArr = ['458809225120972800','486985623161274378','336507246227881984','393586279964475393','399366382799814656','156126755646734336','120545011392577537','250331063337877504'];
				let scAnnMArr = ['jon', 'bert', 'cy', 'g', 'er', 'miro', 'civ', 'voosh'];
				let scOof = 0;
				while (scAnnounce < scAnnArr.length){
					setTimeout(() => {
						dtb.query("SELECT " + scAnnMArr[scOof] + " FROM day", function(e, r){
							let perp = scAnnMArr[scOof]
							if (e) throw e;
							bot.getDMChannel(scAnnArr[scOof]).then(channel => {
								if(r.rows[0][perp] != 'oof'){
									bot.createMessage(channel.id, r.rows[0][perp])
									scOof++
									dtb.query('UPDATE day SET ' + scAnnMArr[scOof] + ' = \'oof\'');
								} else {
									bot.createMessage(channel.id, scAnMsg)
									scOof++
								}
							});
						});
					}, 3000*(scAnnounce + 1));
					scAnnounce++;
				}
			}
		}
		//If A/B rotation variable not set yet, set it from its storage location
		if (scDay == 'oof'){
			dtb.query('SELECT day FROM day', function(err, res){
				if (err) throw err;
				scDay = res.rows[0].day
			})
			bot.editStatus("online", {"name": "in " + Object.keys(bot.guildShardMap).length + ' servers! gcd.help', "type": 0});
		}
	}
		
	cussmessage = message.toUpperCase();
	
	allowOwo = true;
	allowCuss = false;
	if (serverOptions[serverID] != undefined){
		allowCuss = serverOptions[serverID]["allowCussing"];
		allowOwo = serverOptions[serverID]["allowOwoing"];
	}
	
	
		
	//Cuts symbols out of message
	for (var i = 0; i < symbolList.length; i++){
		if (cussmessage.includes(symbolList[i])){
			spot = cussmessage.indexOf(symbolList[i]);
			cussmessage = cussmessage.substring(0, spot) + cussmessage.substring(spot + 1);
			i = i-1;
		}
	}
	
	//Checks for words that could be mistaken by the bot as a cuss
	hasMistakenCuss = false;
	for (var i = 0; i < notCusses.length; i++){
		if (cussmessage.includes(notCusses[i])){
			var hasMistakenCuss = true;
			mistakenIndexes.push(cussmessage.indexOf(notCusses[i]));
		}
	}

	//Checks for cusses
	for (var i = 0; i < curses.length; i++){
		if (cussmessage.includes(curses[i])){
			if (nonWordCurses[i] != 'no' || message.includes('A$$H0L3') || cussmessage.substring(0, (curses[i].length)) == curses[i] || cussmessage.includes(' ' + curses[i])){
		    		cussIndexes.push(cussmessage.indexOf(curses[i]));
			}
		}
	}
	
	//Checks if the cusses are the same as the mistaken cusses, removes them if so.
	for (var i = 0; i < cussIndexes.length; i = i){
		if (mistakenIndexes.includes(cussIndexes[i])){
		    cussIndexes.splice(i, 1);
		} else {
			i++
		}
	}
	
	dtb.query('SELECT cursedefault FROM servers WHERE id = \'' + serverID + '\'', function(e, r){
		if (r != undefined){
			if (r.rows[0] != undefined){
				allowCuss = r.rows[0].cursedefault;
				if (!allowCuss){
					if (bot.users.get(userID) != undefined){
						if (!(userID == 408785106942164992) && !(bot.users.get(userID).bot) && cussIndexes.length > 0 && channelID != '524703539801489418' && channelID != '513116265439821832' && !channel.nsfw || message.includes('A$$H0L3')|| message == 'ERIS CUSS TEST'){
								bot.deleteMessage(channelID, prevEvtID);
								bot.createMessage(channelID, user + ', please don\'t curse. Thank you.');
								bot.createMessage('509920937093890058', userID).catch();
								bot.createMessage('524703539801489418', message + ': from: ' + user + ' servID: ' + serverID + ', chID: ' + channelID);
						}
						if (cussmessage.includes('BIKE') && serverID == 490695949786677248){
							bot.deleteMessage(channelID, prevEvtID);
							bot.createMessage(channelID, user + ', please don\'t curse. Thank you.');
							bot.createMessage('509920937093890058', userID).catch();
							bot.createMessage('524703539801489418', message + ': from: ' + user + ' servID: ' + serverID + ', chID: ' + channelID);
						}
					}
				}
			}
		}
	});
	
	if (bikCussServers.includes(serverID)){
		curses.splice(curses.length - 1, 1)
		nonWordCurses.splice(nonWordCurses.length - 1, 1)
	}

	if (message.toLowerCase().indexOf(prefix) == 0 && serverID != '264445053596991498' && channelID != null) {
		var args = message.toLowerCase().substring(4).split(' ');
		var cmd = args[0];

		if (!(bot.users.get(userID) == undefined)){
			if (!(bot.users.get(userID).bot)){
				//args = command, w/o prefix.
				args = args.splice(4);
				switch(cmd) {
					case 'announce':
						if (userID == gID){
							let scAnnounce = 0;
							let scAnnArr = ['458809225120972800','486985623161274378','336507246227881984','393586279964475393','399366382799814656','156126755646734336','120545011392577537','250331063337877504'];
							let scAnnMArr = ['jon', 'bert', 'cy', 'g', 'er', 'miro', 'civ', 'voosh'];
							let scOof = 0;
							while (scAnnounce < scAnnArr.length){
								let scAnMsg = message.substring(13);
								setTimeout(() => {
									dtb.query("SELECT " + scAnnMArr[scOof] + " FROM day", function(e, r){
										let perp = scAnnMArr[scOof]
										if (e) throw e;
										bot.getDMChannel(scAnnArr[scOof]).then(channel => {
											if(r.rows[0][perp] != 'oof'){
												bot.createMessage(channel.id, r.rows[0][perp])
												scOof++
												dtb.query('UPDATE day SET ' + scAnnMArr[scOof] + ' = \'oof\'');
											} else {
												bot.createMessage(channel.id, scAnMsg)
												scOof++
											}
										});
									});
								}, 3000*(scAnnounce + 1));
								scAnnounce++;
							}
						}
						break;
					case 'email':
						let emDets = message.split(" ");
						let mailOptions = {
						  from: 'grahamcussdestroyer@gmail.com',
						  to: emDets[1],
						  subject: 'Message from ' + user + ' through GCD',
						  text: emDets[2]
						};

						transporter.sendMail(mailOptions, function(error, info){
						  if (error) {
						    console.log(error);
						  } else {
						    console.log('Email sent: ' + info.response);
						  }
						});
						commRand = true;
						break;
					case 'help':
						let helpData = {
						  "embed": {
						    "title": "Commands",
						    "description": "Current Prefix: 'gcd.'",
						    "fields": [
						      {
							"name": "Help",
							"value": "Displays this embed"
						      },
						      {
							"name": "Rccm [@role] [command]",
							"value": "Creates a custom command that will allow users to add or remove themselves from [@role] by using 'gcd.[command]'.\nTo run the command, your highest role must have admin/manage roles, and must be higher than the role you are trying to give access to."
						      },
						      {
							"name": "This bot is currently under a library migration, and thus some old features are currently unavailable. \nFor more information, please join our support server:",
							"value": "https://discord.gg/aqnzQ4x"
						      }
						    ]
						  }
						};
						bot.createMessage(channelID, helpData);
						commRand = true;
						break;
					case 'statustest':
						bot.editStatus("online", {"name": "in " + Object.keys(bot.guildShardMap).length + ' servers! gcd.help', "type": 0});
						break;
					case 'setscday':
						if (userID == gID || userID == cID){
							scDay = message.substring(13);
							let scNNA = 0;
							while (scDay.indexOf("'", scNNA) > -1){ 
								scNNA = scDay.indexOf("'", scNNA) + 1; 
								scDay = scDay.substring(0, scNNA-1) + '‘' + scDay.substring(scNNA);
							}
							bot.createMessage(channelID, 'Ok, today is now a ' + scDay + ' day.');
							dtb.query('UPDATE day SET day = \'' + scDay + '\'', function(err, res){
								if (err) throw err;
							})
						}
						commRand = true;
						break;
					case 'join':
						bot.joinVoiceChannel("768291368652898365").catch()
						break;
					case 'rccm':
						if (!isDM){
							let topRole = 0;
							let topRoleID = serverID;
							for (var iooof = 0; iooof < member.roles.length; iooof++){
								if (bot.guilds.find(function(obj){return obj.id == serverID}).roles.find(function(obj){return obj.id == member.roles[iooof]}).position > topRole){
									topRole = bot.guilds.find(function(obj){return obj.id == serverID}).roles.find(function(obj){return obj.id == member.roles[iooof]}).position
									topRoleID = bot.guilds.find(function(obj){return obj.id == serverID}).roles.find(function(obj){return obj.id == member.roles[iooof]}).id
								}
							}
							if (message.length > 32 && message.includes('<@&')){
								if (topRole != 0 && bot.guilds.find(function(obj){return obj.id == serverID}).roles.find(function(obj){return obj.id == message.substring(message.indexOf('&') + 1, message.indexOf('&') + 19)}) != undefined){
								    if (bot.guilds.find(function(obj){return obj.id == serverID}).roles.find(function(obj){return obj.id == message.substring(message.indexOf('&') + 1, message.indexOf('&') + 19)}).position < topRole && (bot.guilds.find(function(obj){return obj.id == serverID}).roles.find(function(obj){return obj.id == topRoleID}).permissions.has("administrator") || checkPerms((bot.guilds.find(function(obj){return obj.id == serverID}).roles.find(function(obj){return obj.id == topRoleID}).permissions.allow), 268435456, 1073741824))){
										let rcRID = message.substring(message.indexOf('&') + 1, message.indexOf('&') + 19);
										let rcCMD = message.substring(32)
										dtb.query('SELECT command FROM rccm WHERE serverid = \'' + serverID + '\' and roleid = \'' + rcRID + '\'', function(qerr, qres){
											if (qerr) throw qerr;
											if (qres.rows.length == 0){
												dtb.query('INSERT INTO rccm(command, roleid, serverid) VALUES (\'' + rcCMD + '\', ' + rcRID + ', ' + serverID + ')', function(err, res){
													if (err) throw err;
													bot.createMessage(channelID, "Your command has been created.");
												});		
											} else {
												bot.createMessage(channelID, 'This role already has a command, \'gcd.' + qres.rows[0].command + '\'')
											}
										});
									}  else if (bot.guilds.find(function(obj){return obj.id == serverID}).roles.find(function(obj){return obj.id == topRoleID}).permissions.has("administrator") || (bot.guilds.find(function(obj){return obj.id == serverID}).roles.find(function(obj){return obj.id == topRoleID}).permissions.has("administrator") || checkPerms((bot.guilds.find(function(obj){return obj.id == serverID}).roles.find(function(obj){return obj.id == topRoleID}).permissions.allow), 268435456, 1073741824))){
										bot.createMessage(channelID, 'Your highest role must be higher in rank than the role you are trying to allow access to.')
									} else {
										bot.createMessage(channelID, 'The highest role you have in this server must have admin/manage roles to run this command!')
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
					case 'clear':
						if (!isDM){
							let topRole = 0;
							let topRoleID = serverID;
							for (var iooof = 0; iooof < member.roles.length; iooof++){
								if (bot.guilds.find(function(obj){return obj.id == serverID}).roles.find(function(obj){return obj.id == member.roles[iooof]}).position > topRole){
									topRole = bot.guilds.find(function(obj){return obj.id == serverID}).roles.find(function(obj){return obj.id == member.roles[iooof]}).position
									topRoleID = bot.guilds.find(function(obj){return obj.id == serverID}).roles.find(function(obj){return obj.id == member.roles[iooof]}).id
								}
							}
							if (message.includes('<@&')){
								if (topRole != 0 && bot.guilds.find(function(obj){return obj.id == serverID}).roles.find(function(obj){return obj.id == message.substring(message.indexOf('&') + 1, message.indexOf('&') + 19)}) != undefined){
								    if (bot.guilds.find(function(obj){return obj.id == serverID}).roles.find(function(obj){return obj.id == message.substring(message.indexOf('&') + 1, message.indexOf('&') + 19)}).position < topRole && (bot.guilds.find(function(obj){return obj.id == serverID}).roles.find(function(obj){return obj.id == topRoleID}).permissions.has("administrator") || checkPerms((bot.guilds.find(function(obj){return obj.id == serverID}).roles.find(function(obj){return obj.id == topRoleID}).permissions.allow || userID == gID), 268435456, 1073741824))){
										let rcRID = message.substring(message.indexOf('&') + 1, message.indexOf('&') + 19);
										dtb.query('SELECT command FROM rccm WHERE serverid = \'' + serverID + '\' and roleid = \'' + rcRID + '\'', function(qerr, qres){
											if (qerr) throw qerr;
											if (qres.rows.length != 0){
												dtb.query('DELETE FROM rccm WHERE serverid = \'' + serverID + '\' and roleid = \'' + rcRID + '\'', function(err, res){
													if (err) throw err;
													bot.createMessage(channelID, "The command for this role has been cleared.");
												});		
											} else {
												bot.createMessage(channelID, 'This role has no command yet!')
											}
										});
									}  else if (bot.guilds.find(function(obj){return obj.id == serverID}).roles.find(function(obj){return obj.id == topRoleID}).permissions.has("administrator") || (bot.guilds.find(function(obj){return obj.id == serverID}).roles.find(function(obj){return obj.id == topRoleID}).permissions.has("administrator") || checkPerms((bot.guilds.find(function(obj){return obj.id == serverID}).roles.find(function(obj){return obj.id == topRoleID}).permissions.allow), 268435456, 1073741824))){
										bot.createMessage(channelID, 'Your highest role must be higher in rank than the role you are trying to allow access to.')
									} else {
										bot.createMessage(channelID, 'The highest role you have in this server must have admin/manage roles to run this command!')
									}
								}
								if (topRole != 0 && bot.guilds.find(function(obj){return obj.id == serverID}).roles.find(function(obj){return obj.id == message.substring(message.indexOf('&') + 1, message.indexOf('&') + 19)}) == undefined){
									let rcRID = message.substring(message.indexOf('&') + 1, message.indexOf('&') + 19);
									dtb.query('SELECT command FROM rccm WHERE serverid = \'' + serverID + '\' and roleid = \'' + rcRID + '\'', function(qerr, qres){
										if (qerr) throw qerr;
										if (qres.rows.length != 0){
											dtb.query('DELETE FROM rccm WHERE serverid = \'' + serverID + '\' and roleid = \'' + rcRID + '\'', function(err, res){
												if (err) throw err;
												bot.createMessage(channelID, "The command for this role has been cleared.");
											});		
										}
									});
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
					case 'ttu':
						if(message.substring(8,9) != '<'){
							bot.createMessage(message.substring(8,26), message.substring(27)).catch()
						} else {
							bot.getDMChannel(message.substring(11,29)).then(channel => {
								bot.createMessage(channel.id, message.substring(31)).catch
							});
						}
						comRand = true;
						break;
					default:
						if (!isDM && serverID != '264445053596991498'){
							let rcMsg = message.substring(4);
							dtb.query('SELECT roleid FROM rccm WHERE serverid = \'' + serverID + '\' AND command = \'' + rcMsg + '\'', function(err, res){
								if (err) throw err;
								if (res.rows[0] != undefined){
									let rAdd = true;
									for (let rToI = 0; member.roles[rToI] != undefined && rAdd; rToI++){
										if (member.roles[rToI] == res.rows[0].roleid){
											rAdd = false;
										}
									}
									if (rAdd){
										bot.addGuildMemberRole(serverID, userID, res.rows[0].roleid).catch();
										bot.createMessage(channelID, 'You have successfully added yourself to the role.');
									} else {
										bot.removeGuildMemberRole(serverID, userID, res.rows[0].roleid).catch();
										bot.createMessage(channelID, 'You have successfully removed yourself from the role.');
									}
								}
							})
						}
				}
			}
		}
	}
});
