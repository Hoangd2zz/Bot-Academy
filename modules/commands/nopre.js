module.exports.config = {
name: "bruh",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "DũngUwU",
	description: "hihihihi",
	commandCategory: "NoCầnPrefix",
	usages: "",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID, senderID } = event;
	if (event.body.toLowerCase().indexOf("bruh")==0 || (event.body.toLowerCase().indexOf("bủh")==0) && senderID !== api.getCurrentUserID()) {
		var msg = {
				body: "bủh",
				attachment: fs.createReadStream(__dirname + `/noprefix/xxx.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}

	if (event.body.toLowerCase().indexOf("fuckyou")==0 || (event.body.toLowerCase().indexOf("fakyou")==0) && senderID !== api.getCurrentUserID()) {
		return api.sendMessage({
				body: "fuck you :)",
				attachment: fs.createReadStream(__dirname + '/cache/fuckyou.mp4')
			}, threadID, messageID);
		}

  if (event.body.toLowerCase().indexOf("rose")==0 && senderID !== api.getCurrentUserID()) {
		return api.sendMessage({
				body: "co lam moi co an :)",
				attachment: fs.createReadStream(__dirname + '/cache/rose.mp3')
			}, event.threadID, event.messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}
