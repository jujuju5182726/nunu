module.exports.config = {
	name: "cvaudio",	
  version: "1.0.0", 
	hasPermssion: 0,
	credits: "NTKhang",
	description: "Video to Audio Convert", 
	commandCategory: "Media",
  usePrefix: "True - ✅",
	usages: `${global.config.PREFIX}cvaudio - Reply Video`,
	cooldowns: 5, 
	dependencies: '',
};

module.exports.run = async function ({ api, args, event, Currencies, Users }) {
  try{
 const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
var audioss = []
  var audio = args.join(" ") || event.messageReply.attachments[0].url;
    var { data } = await axios.get(audio ,{  method: 'GET',  responseType: 'arraybuffer' });
                fs.writeFileSync(__dirname + "/cache/vdtoau.m4a", Buffer.from(data, 'utf-8'));
  audioss.push(fs.createReadStream(__dirname + "/cache/vdtoau.m4a"));
    var msg = { body : "𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗱 𝗩𝗶𝗱𝗲𝗼 𝗧𝗼 𝗔𝘂𝗱𝗶𝗼 🎶", attachment: audioss}
  api.sendMessage(msg, event.threadID, event.messageID)
} catch(e){
    console.log(e)
}
      }