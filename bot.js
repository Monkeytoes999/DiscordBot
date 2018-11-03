var Discord = require('discord.io');
var logger = require('winston');
var prefix = '!';
var passnum = 0; 
var passwords = ['FlacHA', 'AstER', 'MonGO', 'HaRvEy', 'ROllER', 'CliVE', 'TicE', 'PiXIs', 'MuchACHA', 'AkeYLA'];
var knockknock = 0;
var joke = '.';
var curses = ['SHIT', 'FUCC', 'THOT', 'DAMN', 'CUNT', 'BIKE', 'PORN', 'FUCK', 'FAG', 'FUK', 'ASS', 'BITCH', 'WHORE', 'VAGINAL', 'SLUT', 'BLOWJOB', 'CLITORIS', 'CLIT', 'COOCHIE', 'MASTURBATE', 'MASTURBATION', 'PROSTITUTE', 'JACKASS', 'FAGGOT', 'NIGGER', 'NIGGA', 'TIT', 'BOOB', 'BOOBS', 'DICK', 'PENIS', 'PUSSY', 'ARSE', 'CUM', 'BOLLOCK', 'BONER', 'WHORE', 'DILDO', 'SEX'];
var nonWordCurses = ['SHIT', 'FUCC', 'THOT', 'DAMN', 'CUNT', 'no', 'PORN', 'FUCK', 'no', 'FUK', 'no', 'BITCH', 'WHORE', 'VAGINAL', 'SLUT', 'BLOWJOB', 'CLITORIS', 'no', 'COOCHIE', 'MASTURBATE', 'MASTURBATION', 'PROSTITUTE', 'JACKASS', 'FAGGOT', 'NIGGER', 'NIGGA', 'no', 'BOOB', 'BOOBS', 'DICK', 'PENIS', 'PUSSY', 'ARSE', 'no', 'BOLLOCK', 'BONER', 'WHORE', 'DILDO', 'SEX'];
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
var day;
var allowBreedChange = false;
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
var openAtappPoll = false;
var pollAtappOpener = 0;


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

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
	
	if (!bot.directMessages[channelID] && channelID != 458809225120972800 && channelID != 495998900008910863) {
		serverID = bot.channels[channelID].guild_id;
		channel = bot.channels[channelID];
	}
	
	if (!remdSent){
		remdSent = true;
		bot.sendMessage({
			to: '393586279964475393',
			message: 'What rotation day is it?'
		});
	}
	
	if (remdSent && scDay == 'oof' && channelID == '495998900008910863' && userID == '393586279964475393'){
		scDay = message;
		bot.sendMessage({
			to: channelID,
			message: 'Ok, today is now a ' + scDay + ' day.'
		});
	}
	
	prevEvtID = evt.d.id;
	
	member = bot.servers[serverID].members[userID];
	
	if (true){
		for (var messIDforArray = 99; messIDforArray > 0; messIDforArray --){
			lastHunMessIds[messIDforArray] = lastHunMessIds[(messIDforArray - 1)];
		}
		lastHunMessIds[0] = prevEvtID;
		for (var userIDforArray = 99; userIDforArray > 0; userIDforArray --){
			lastHunUserIds[userIDforArray] = lastHunUserIds[(userIDforArray - 1)];
		}
		lastHunUserIds[0] = user;
		for (var channelIDforArray = 99; channelIDforArray > 0; channelIDforArray --){
			lastHunChannelIds[channelIDforArray] = lastHunChannelIds[(channelIDforArray - 1)];
		}
		lastHunChannelIds[0] = channelID;
	}
	
	
	if (true){
		let thisTime = new Date();
			let thisHour = (thisTime.getHours() - 4);
			let thisDay = thisTime.getDate();
			let thisDayay = (thisTime.getDay() - 2);
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
			if (scDayChange){
				if (scDay.toUpperCase() == 'A'){
					scDay = 'B';
				} else if (scDay.toUpperCase() == 'B'){
					scDay = 'A';
				}
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
				ot.sendMessage({
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
		}
		if (day != prevDay && allowBreedChange){
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
			
		}
	}
		
	cussmessage = message.toUpperCase();
	
	for (var i = 0; i < symbolList.length; i++){
		if (cussmessage.includes(symbolList[i])){
			spot = cussmessage.indexOf(symbolList[i]);
			cussmessage = cussmessage.substring(0, spot) + cussmessage.substring(spot + 1);
			i = i-1;
		}
	}


	for (var i = 0; i < curses.length; i++){
		if (cussmessage.includes(curses[i]) && !channel.nsfw && !cussmessage.includes('assure') && !cussmessage.includes('associate') && !cussmessage.includes('assume')){
			if (nonWordCurses[i] != 'no' || cussmessage.substring(0, (curses[i].length)) == curses[i] || cussmessage.includes(' ' + curses[i])){
				bot.deleteMessage({
					channelID: channelID,
					messageID: prevEvtID
				});
				bot.sendMessage({
					to: channelID,
					message: user + ', please don\'t curse. Thank you.'
				});
				break;
			}
		}
	}
       	
	if (cussmessage.includes('OWO')){
		if (serverID != 500864200378155008 && serverID != 505565358560772096 && channelID != 501934275860496395){
	    		bot.sendMessage({
				to: channelID,
				message: 'What\'s this?'
			});
		}
	}
	
	if (message == 'Shut up you dumb bot!' && userID == '495703108912021545'){
		bot.sendMessage({
			to: channelID,
			message: '$noU'
		});
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
					pollVotes[i] = 0;
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
	
	if (message.substring(0, 24) == 'Graham Channel Destroyer'){
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
	
    if (message.indexOf(prefix) == 0) {
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
            break;
		case 'top':
			bot.deleteMessage({
					channelID: channelID,
					messageID: evt.d.id
				});
			if (serverID == '505565358560772096'){
				bot.addToRole({
					serverID: serverID,
					userID: userID,
					roleID: '508031833766625282'
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
			break;
		case 'portalCat':
			bot.sendMessage({
				to: channelID,
				message: '<a:affa:502663197808132116>'
			});
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
			break;
		case 'test':
			bot.sendMessage({
				to: channelID,
				message: arrayTest.length + ' ' + arrayTest[1].length + ' ' + arrayTest[0].length
			});
			break;
		case 'getChannelID':
			bot.sendMessage({
				to: channelID,
				message: channelID
			});
			break;
		case 'tto':
   				 bot.sendMessage({
					to: channelID,
					message: bot.fixMessage(message.substring(5))
				});
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
			break;
		case 'preventScDayChange':
			scDayChange = false;
			break;
		case 'setScDay':
			if (message.length = 10){
				scDay = message.substring(9);
				bot.sendMessage({
					to: channelID,
					message: 'Ok, today is now a ' + scDay + ' day.'
				});
			}
			break;
		case 'help':
			let usrID = userID;
			bot.sendMessage({
				to: userID,
				message: 'Our current commands are as follows. \n \n**Entertainment** \nping - responds "Pong!", enjoy yourself some ping pong. \nmusic - displays the lyrics of a random song from a list \nportalCat - displays a fun infinite gif of a cat jumping into a portal. \nchangeMyNickname - changes your nickname to a random nickname from a list. \n \n**Useful** \nhelp - displays this, duh. \ncreatePoll - Follow instruction to create a poll. \npollOptions - displays the options to the current poll. \npollResults - displays the current results of the poll. \naddCustomResponse - allows users to add a custom response to a poll. \nvote [optionNum] - votes for the option number given. \nclosePoll - Can only be done by poll creator, closes poll and displas results. \nCustomCommand [1/2/3] - allows users to create custom commands by following instrucions. \nknockknock - responds to YOUR knock knock joke.'
			}, function(err, res){
				if (err) throw err;
				bot.sendMessage({
					to: usrID,
					message: ' \n \n**Utilites** \n test - returns output for random test code. \ngetChannelID - returns the ID of the current channel. \ntto [input] - repeats the input given. \nfindRoleID [role] - returns the ID of the role given. \ngetServerID - returns the ID of your current server. \ndestroy [pass from list] - spams "Destroying by spam" if you enter the right password. \n \n**Non-commands** \nThis bot comes equipped with a curse censoring feature, which will cause curses to be deleted. I am currently working on a command for server owner that will turn this off. \nThis bot will DM specific users to let them know if it is a [A] or [B] day. \nThis bot has a feature where it will change the name of specific roles to be new cat breeds daily. \nThis bot comes with a detector that will say "What\'s this?" whenever someone says any form of "owo". \nSaying "Graham Channel Destroyer" will prompt the bot to tell the current prefix, and the array number of the current spam password.'
				});
			});
			bot.sendMessage({
				to: channelID,
				message: 'Documentation has been sent to your dms.'
			});
			break;
		case 'allowBreedChange':
			allowBreedChange = true;
			break;
		case 'findRoleID':
			if (message.length > 11){
				let roleIDnum = Object.values(bot.servers[serverID].roles).find(r => r.name.includes(message.substring(12))).id;
				bot.sendMessage({
					to: channelID,
					message: roleIDnum
				});
			}
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
			break;
		case 'vote':
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
			break;
		case 'pollAtappOptions':
			let mesAtapp = '';
			let i = 0;
			for (i = 0; i < pollAtappOptions.length -1; i++){
				mesAtapp = mesAtapp + pollAtappOptions[i] + ', ';
			}
			mesAtapp = mesAtapp + pollAtappOptions[i];
			bot.sendMessage({
				to: channelID,
				message: mesAtapp
			});
		break;
		case 'addCustomAtappResponse':
			if(!openAtappPoll){
				bot.sendMessage({
					to: channelID,
					message: 'Sorry ' + user + ', there is currently no open "all that apply" poll.'
				});
			}
			if(openPoll){
				let customResponseAtapp = message.substring(24);
				pollAtappOptions[pollAtappOptions.length] = customResponseAtapp;
				pollAtappVotes[pollAtappVotes.length] = 0;
				bot.sendMessage({
					to: channelID,
					message: 'Ok ' + user + ', your custom response, ' + customResponseAtapp + ', has been added to the "all that apply" poll, but not voted for.'
				});
			}
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
			break;
		case 'voteAtapp':
			if (!userAlreadyVoted){
				let voteNumAtapp = message.substring(11)
				for (var la = 0; la < pollAtappOptions.length; la++){
					if (voteNumAtapp == la + 1){
						pollAtappVotes[la] = pollAtappVotes[la] + 1;
						bot.sendMessage({
							to: channelID,
							message: 'Okay ' + user + ', you have voted for: ' + pollAtappOptions[la] + '.'
						});
					}
				}
			}
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
			break;
		case 'confuse':
			bot.simulateTyping(channelID);
			bot.deleteMessage({
					channelID: channelID,
					messageID: prevEvtID
				});
			break;
		case 'changeSpamAllowance':
			bot.deleteMessage({
				channelID: channelID,
				messageID: prevEvtID
			});
			allowSpam = !allowSpam;
			break;
		case 'setSpamPass':
			bot.deleteMessage({
					channelID: channelID,
					messageID: prevEvtID
				});
			spamPassword = message.substring(13);
			spamChannel = channelID;
			break;
		case 'newRole':
			bot.createRole(serverID, function(err, res) {
				if (err) throw err;
				
					bot.editRole({
						serverID: serverID,
						roleID: res.id,
						name:'new role',
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
			break;
			case 'customCommands':
			bot.sendMessage({
				to: channelID,
				message: commandList[0] + ', ' + commandList[1] + ', ' + commandList[2]
			});
			break;
		case commandList[0]:
				bot.simulateTyping(channelID);
				bot.sendMessage({
					to: channelID,
					message: resultList[0]
				});
			break;
			case commandList[1]:
			bot.simulateTyping(channelID);
				bot.sendMessage({
					to: channelID,
					message: resultList[1]
				});
			break;
			case commandList[2]:
			bot.simulateTyping(channelID);
				bot.sendMessage({
					to: channelID,
					message: resultList[2]
				});
			break;
		case 'knockknock':
			bot.sendMessage({
				to: channelID,
				message: 'Who\'s there?'
			});
			knockknock = 1;
			break;
			case 'cat':
				bot.sendMessage({
					to: channelID,
					message: 'Meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow'
				});
				bot.sendMessage({
					to: channelID,
					message: '|             A    A \n |        (= ^w^ = )'
				});
			break;
			case 'destroy':
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
			break;
		default: 
			bot.sendMessage({
				to: channelID,
				message: 'Sorry, I didn\'t understand that. Please try again. For a list of commands, please say ' + prefix + 'help'
			});
            // Just add any case commands if you want to..
         }
     }
});
