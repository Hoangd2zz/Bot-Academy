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
				body: "f*ck you :)",
				attachment: fs.createReadStream(__dirname + '/cache/fuckyou.mp4')
			}, threadID, messageID);
		}

    if (event.body.toLowerCase().indexOf("ảo thật đấy")==0 || (event.body.toLowerCase().indexOf("ảo")==0) && senderID !== api.getCurrentUserID()) {
		return api.sendMessage({
				body: "",
				attachment: fs.createReadStream(__dirname + '/cache/aothatday.mp3')
			}, threadID, messageID);
		}

    if (event.body.toLowerCase().indexOf("bửa vào đầu")==0 && senderID !== api.getCurrentUserID()) {
		return api.sendMessage({
				body: "",
				attachment: fs.createReadStream(__dirname + '/cache/bonk.mp4')
			}, event.threadID, event.messageID);
		}

    if (event.body.toLowerCase().indexOf("đánh chết cụ mày bây giờ")==0 && senderID !== api.getCurrentUserID()) {
		return api.sendMessage({
				body: "",
				attachment: fs.createReadStream(__dirname + '/cache/danhchetcha.mp4')
			}, event.threadID, event.messageID);
		}

    if (event.body.toLowerCase().indexOf("bạn nói thật là nực cười")==0 && senderID !== api.getCurrentUserID()) {
		return api.sendMessage({
				body: "",
				attachment: fs.createReadStream(__dirname + '/cache/nuccuoi.mp4')
			}, event.threadID, event.messageID);
		}

    if (event.body.toLowerCase().indexOf("xách ba lô và đi")==0 && senderID !== api.getCurrentUserID()) {
		return api.sendMessage({
				body: "",
				attachment: fs.createReadStream(__dirname + '/cache/xachbalo.mp3')
			}, event.threadID, event.messageID);
		}

    if (event.body.toLowerCase().indexOf("thôi thôi thôi")==0 || (event.body.toLowerCase().indexOf("lại bốc phét")==0) && senderID !== api.getCurrentUserID()) {
		return api.sendMessage({
				body: "",
				attachment: fs.createReadStream(__dirname + '/cache/thoithoithoi.mp3')
			}, threadID, messageID);
		}
  if (event.body.toLowerCase().indexOf("rose")==0 && senderID !== api.getCurrentUserID()) {
		return api.sendMessage({
				body: "co lam moi co an :)",
				attachment: fs.createReadStream(__dirname + '/cache/rose.mp3')
			}, event.threadID, event.messageID);
		}
	}

module.exports.run = function({ }) {}