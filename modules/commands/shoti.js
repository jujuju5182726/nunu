module.exports.config = {
  name: "shoti",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗", 
  description: "Shoti Command",
  commandCategory: "Media",
  cooldowns: 5
};
module.exports.run = async ({ api, event,}) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");

  api.sendMessage(`⏱️ | Video is sending please wait.`, event.threadID, event.messageID);
axios.get('https://jeka-api.luabot24.repl.co/shoti/?apikey=geloo').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
  let callback = function () {
          api.sendMessage({
                                                body: `random bebegurl sa tiktok`,
            attachment: fs.createReadStream(__dirname + `/cache/shoti.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/shoti.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/shoti.${ext}`)).on("close", callback);
      }) .catch(err => {
                     api.sendMessage("Api error status: 200", event.threadID, event.messageID);
    api.setMessageReaction("😢", event.messageID, (err) => {}, true);
                  })     
}