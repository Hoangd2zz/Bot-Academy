module.exports.config = {
    name: "pay",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Dũng UwU",
    description: "Chuyển tiền của bản thân cho ai đó",
    commandCategory: "Economy",
    usages: "[tag] số tiền muốn chuyển",
    cooldowns: 5,
     };

module.exports.run = async ({ event, api, Currencies, args }) => {
let { threadID, messageID, senderID } = event;
const mention = Object.keys(event.mentions)[0];
if(!mention) return api.sendMessage('Vui lòng tag người muốn chuyển coins cho!',threadID,messageID);
else {
  let nameL = event.mentions[mention].split(" ").length
	if(!isNaN(args[0+ nameL])) {
		const coins = parseInt(args[0+ nameL]);
		let balance = (await Currencies.getData(senderID)).money;
		if (coins > balance) return api.sendMessage('Số coins bạn muốn chuyển lớn hơn số coins bạn hiện có!',threadID,messageID);
        if (coins < 1) return api.sendMessage("Số coins không không được bé hơn 1", event.threadID, event.messageID);
		else {
        return api.sendMessage({ body: 'Đã chuyển cho ' + event.mentions[mention].replace(/@/g, "") + ` ${args[0+ nameL]} coins`}, threadID, async () => {
            await Currencies.increaseMoney(mention, parseInt(args[0+ nameL]));
                  Currencies.decreaseMoney(senderID, parseInt(args[0+ nameL]))
            }, messageID);
		}
	} else return api.sendMessage('Vui lòng nhập số coins muốn chuyển',threadID,messageID);
}
}