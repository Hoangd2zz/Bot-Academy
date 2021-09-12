module.exports.config = {
    name:"nsfw",
    version: "1.0.2",
    hasPermssion: 1,
    credits: "DungUwU",
    description: "on/off nsfw",
    commandCategory: "General",
    usages: "[on/off]",
    cooldowns: 5
};

module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const log = require(process.cwd() + '/utils/log');
    const path = resolve(__dirname, 'cache', 'nsfw.json');
    if (!existsSync(path)) {
        const obj = {
            nsfw: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('nsfw')) data.nsfw = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}

module.exports.run = async ({ api, event, args, Threads }) => {
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, 'cache', 'nsfw.json');
    const { threadID, messageID } = event;
    const database = require(path);
    const { nsfw } = database;

    if (!args[0]) { api.sendMessage("Sai format", threadID, messageID) } else {
        switch(args[0]) {
            case "on": {
                nsfw[threadID] = true;
                api.sendMessage("bật nsfw thành công!", threadID);
                break;
            }
            case "off": {
                nsfw[threadID] = false;
                api.sendMessage("đã tắt nsfw", threadID);
                break;
            }
            default:
            api.sendMessage('sai format',threadID);
            break;
        }
        writeFileSync(path, JSON.stringify(database, null, 4));
    }
}