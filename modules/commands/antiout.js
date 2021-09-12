module.exports.config = {
    name:"antiout",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "DungUwU",
    description: "on/off antiout",
    commandCategory: "General",
    usages: "[on/off]",
    cooldowns: 5
};

module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const log = require(process.cwd() + '/utils/log');
    const path = resolve(__dirname, 'cache', 'antiout.json');
    if (!existsSync(path)) {
        const obj = {
            antiout: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('antiout')) data.antiout = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}

module.exports.run = async ({ api, event, args, Threads }) => {
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, 'cache', 'antiout.json');
    const { threadID, messageID } = event;
    const database = require(path);
    const { antiout } = database;

    if (!args[0]) { api.sendMessage("Sai format", threadID, messageID) } else {
        switch(args[0]) {
            case "on": {
                antiout[threadID] = true;
                api.sendMessage("bật antiout thành công!", threadID);
                break;
            }
            case "off": {
                antiout[threadID] = false;
                api.sendMessage("đã tắt antiout", threadID);
                break;
            }
            default:
            api.sendMessage('sai format',threadID);
            break;
        }
        writeFileSync(path, JSON.stringify(database, null, 4));
    }
}