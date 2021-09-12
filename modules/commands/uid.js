module.exports.config = {
	name: "uid",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Lấy ID người dùng.",
	commandCategory: "other",
	cooldowns: 5
};

module.exports.run = function({ api, event }) {
	if (Object.keys(event.mentions)[0]) return api.sendMessage(Object.keys(event.mentions)[0], event.threadID, event.messageID);
	else {
		return api.sendMessage(event.senderID,event.threadID,event.messageID);
	}
}