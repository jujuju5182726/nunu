module.exports.config = {
	name: "owner",
	version: "1.0.0",
	hasPermssion: 0,
  credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
	description: "Owner",
	commandCategory: "Others",
	cooldowns: 5
}

module.exports.run =  ({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
    var callback = () => api.sendMessage(
  {body:`⚜️𝗡𝗮𝗺𝗲: 𝗧𝗮𝘀𝗯𝗶𝘂𝗹 𝗜𝘀𝗹𝗮𝗺 𝗥𝗮𝘀𝗶𝗻
⚜️𝗔𝗴𝗲: 𝗡/𝗔
⚜️𝗛𝗲𝗶𝗴𝗵𝘁: 5"5
⚜️𝗚𝗮𝗻𝗱𝗲𝗿: 𝗠𝗮𝗹𝗲
⚜️𝗔𝗱𝗱𝗿𝗲𝘀𝘀: 𝗦𝗮𝘃𝗮𝗿, 𝗗𝗵𝗮𝗸𝗮
⚜️𝗥𝗲𝗮𝗹𝘁𝗶𝗼𝗻𝗦𝗵𝗶𝗽 𝗦𝘁𝗮𝘁𝘂𝘀: 𝗦𝗶𝗻𝗴𝗹𝗲
⚜️𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻: 𝗜𝘀𝗹𝗮𝗺
⚜️𝗪𝗵𝗮𝘁𝘀𝗮𝗽𝗽: 01600177158
⚜️Facebook ID: https://www.facebook.com/t/100088774077764
⚜️𝗛𝗼𝗯𝗯𝗶𝗲𝘀: ✨𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝘂𝘀 𝗱𝗶𝘀𝗰𝘂𝘀𝘀𝗶𝗼𝗻𝘀✨ 𝗪𝗮𝘁𝗰𝗵𝗶𝗻𝗴 𝗽𝗶𝗰𝘁𝘂𝗿𝗲𝘀✨ 𝗥𝗲𝗮𝗱𝗶𝗻𝗴 𝗯𝗼𝗼𝗸𝘀✨ 𝗚𝗼𝗶𝗻𝗴 𝗳𝗼𝗿 𝗹𝗮𝘁𝗲 𝗻𝗶𝗴𝗵𝘁 𝘄𝗮𝗹𝗸𝘀✨ 𝗛𝗮𝗻𝗴𝗶𝗻𝗴 𝗼𝘂𝘁 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗽𝗲𝗿𝘀𝗼𝗻 𝘆𝗼𝘂 𝗹𝗼𝘃𝗲✨ 𝗠𝗮𝗸𝗶𝗻𝗴 𝗵𝗶𝗺 𝗵𝗮𝗽𝗽𝘆.
⚜️- 𝗗𝗲𝘀𝗶𝗿𝗲: 𝗧𝗼 𝗺𝗮𝗸𝗲 𝗮 𝗛𝗮𝗹𝗮𝗹 𝗠𝘂𝘀𝗹𝗶𝗺 𝘃𝗲𝗶𝗹𝗲𝗱 𝗴𝗶𝗿𝗹 𝗮𝘀 𝗮 𝗹𝗶𝗳𝗲 𝗽𝗮𝗿𝘁𝗻𝗲𝗿.`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/${global.config.OWNERID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    
      };