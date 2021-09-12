module.exports.config = {
    name: "calladmin",
    version: "1.1.0",
    hasPermssion: 0,
    credits: "Thọ & fix by banledangyeuu and DungUwU",
    description: "gửi tin nhắn tới admin của bot",
    commandCategory: "group",
    usages: "[lời nhắn]",
    cooldowns: 3

};
module.exports.handleReply = async function({ api, event, args, handleReply, client, Threads, Users }) {
  let { senderID, messageID, threadID } = event;
  return api.sendMessage({body :`🔔Phản hồi từ admin ${(await api.getUserInfo(senderID))[senderID].name}: \n${event.body}`}, handleReply.threadID, handleReply.replyID);    
};

module.exports.run = async function({ api, event, args, Currencies, utils, Users, Threads, client }) {
    const moment = require("moment-timezone");
    let { senderID, messageID, threadID } = event;
    if (!args[0]) return api.sendMessage("Bạn chưa nhập tin nhắn !", threadID,messageID);
    let data = (await Users.getData(senderID));
    let thread = (await api.getThreadInfo(threadID));
    var time = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss || DD/MM/YYYY');
    for (var id of global.config.ADMINBOT) {
        api.sendMessage(`=======REPORT=======\n\n⏰ TIME: ${time}\n👤 Name: ${data.name}\n❗ UID: ${senderID}\n👻 Nhóm: ${thread.name}\n😺 ThreadID: ${event.threadID}\n\n✅ Nhắn : ${args.join(" ")}`,id, async (err, messageInfo) => {
                global.client.handleReply.push({ 
                    name: this.config.name,
                    messageID: messageInfo.messageID,
                    replyID: messageID, 
                    threadID
                })
    await new Promise(resolve => setTimeout(resolve, 1000))
    })      
    return api.sendMessage(`Thông tin của bạn đã được gửi tới các admin ✅\nTime: ${time}`,threadID)
    }
}