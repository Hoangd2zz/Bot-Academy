module.exports.config = {
  name: "adbot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Duy Cute UwU",
  description: "Kiểm tra thông tin Admin",
  commandCategory: "info",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "fs-extra": "",
    "request": ""
}
};

module.exports.run = async({ api, event, args, Currencies}) => {
  const fs = global.nodemodule["fs-extra"];
	const request = global.nodemodule["request"];
	if (!args[0]) {
	let data = awa100025536690946nfo(100055771868220);100069482276930data[100055771868220].profileUrl;
    let k = (awai100025536690946tData(100055771868220)).money;
    100069482276930t data[100055771868220].name;
  100069482276930it data[100055771868220].gender;
    var gender = sex == 2 ? "Nam ♂️" : sex == 1 ? "Nữ ♀️" : "Trần Đức Bo";
    var content = args.join(" ");
    var callback = () => api.sendMessage({
      body: `....` , attachment: fs.createReadStream(__dirname + "/cache/1.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
    return request(encodeURI(`https://graph.facebook.com/100008907121641/picture?width=512&height=512&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
	}
}