const axios = require('axios');
const fs = require('fs-extra');

module.exports.config = {
  name: "4k",
  version: "2.2",
  hasPermssion: 0,
  credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
  description: "( 𝙍𝙚𝙢𝙞𝙣𝙞 )",
  commandCategory: "Noprefix",
  usages: "( Reply to a photo to enhance image )",
  cooldowns: 2,
};

module.exports.handleEvent = async function ({ api, event }) {
  if (!(event.body.indexOf("4k") === 0 || event.body.indexOf("HD") === 0)) return;
  const args = event.body.split(/\s+/);
  args.shift();

  const pathie = __dirname + `/cache/zombie.jpg`;
  const { threadID, messageID } = event;

  const photoUrl = event.messageReply.attachments[0] ? event.messageReply.attachments[0].url : args.join(" ");

  if (!photoUrl) {
    api.sendMessage("📸 𝖯𝗅𝖾𝖺𝗌𝖾 𝗋𝖾𝗉𝗅𝗒 𝗍𝗈 𝖺 𝗉𝗁𝗈𝗍𝗈 𝗍𝗈 𝗉𝗋𝗈𝖼𝖾𝖾𝖽 𝖾𝗇𝗁𝖺𝗇𝖼𝗂𝗇𝗀 𝗂𝗆𝖺𝗀𝖾𝗌.", threadID, messageID);
    return;
  }

  api.sendMessage("🕟 | 𝖤𝗇𝗁𝖺𝗇𝖼𝗂𝗇𝗀, 𝗉𝗅𝖾𝖺𝗌𝖾 𝗐𝖺𝗂𝗍 𝖿𝗈𝗋 𝖺 𝗆𝗈𝗆𝖾𝗇𝗍...", threadID, async () => {
    try {
      const response = await axios.get(`https://hazeyy-apis-combine.kyrinwu.repl.co/api/try/remini?url=${encodeURIComponent(photoUrl)}`);
      const processedImageURL = response.data.image_data;
      const img = (await axios.get(processedImageURL, { responseType: "arraybuffer" })).data;

      fs.writeFileSync(pathie, Buffer.from(img, 'binary'));

      api.sendMessage({
        body: "✨ 𝖤𝗇𝗁𝖺𝗇𝖼𝖾𝖽 𝖲𝗎𝖼𝖼𝖾𝗌𝗌𝖿𝗎𝗅𝗅𝗒",
        attachment: fs.createReadStream(pathie)
      }, threadID, () => fs.unlinkSync(pathie), messageID);
    } catch (error) {
      api.sendMessage(`🔴 𝖤𝗋𝗋𝗈𝗋 𝗉𝗋𝗈𝖼𝖾𝗌𝗌𝗂𝗇𝗀 𝗂𝗆𝖺𝗀𝖾: ${error}`, threadID, messageID);
    }
  });
};

module.exports.run = async function ({ api, event }) {};