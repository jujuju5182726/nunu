module.exports.config = {
	name: "ssv2",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
	description: "Screenshot of a certain website (NOT NSFW PAGE ALLOWED)",
	commandCategory: "Other",
	usages: "ssv2 [url site]",
	cooldowns: 5,
	dependencies: {
        "fs-extra": "",
        "path": "",
        "url": ""
    }
};

  module.exports.run = async ({ args, api, event, Users }) => {
   const permission = ["100083900196039"];
               if (!permission.includes(event.senderID))
               return api.sendMessage("⚠You Don't Have Permission To Use This Command❌ Only Bot Owner Can Use This Command❗", event.threadID, event.messageID);
  
    const { existsSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];

    const path = resolve(__dirname, "cache", "pornlist.txt");

    if (!existsSync(path)) return await global.utils.downloadFile("https://raw.githubusercontent.com/blocklistproject/Lists/master/porn.txt", path);
    else return;
}

module.exports.run = async ({ event, api, args, }) => {
    const { readFileSync, createReadStream, unlinkSync } = global.nodemodule["fs-extra"];
    const url = global.nodemodule["url"];

    if (!global.moduleData.pornList) global.moduleData.pornList = readFileSync(__dirname + "/cache/pornlist.txt", "utf-8").split('\n').filter(site => site && !site.startsWith('#')).map(site => site.replace(/^(0.0.0.0 )/, ''));
    const urlParsed = url.parse(args[0]);

    if (global.moduleData.pornList.some(pornURL => urlParsed.host == pornURL)) return api.sendMessage("The site you entered is not secure!!(NSFW PAGE)", event.threadID, event.messageID);

    try {
        const path = __dirname + `/cache/${event.threadID}-${event.senderID}s.png`;
        await global.utils.downloadFile(`https://image.thum.io/get/width/1920/crop/400/fullpage/noanimate/${args[0]}`, path);
        api.sendMessage({ attachment: createReadStream(path) }, event.threadID, () => unlinkSync(path), event.messageID);
    }
    catch {
        return api.sendMessage("This url could not be found, the format is not correct ?", event.threadID, event.messageID);
    }
}