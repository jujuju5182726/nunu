module.exports.config = {
  name: "reality",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Islmaick Chat",
  description: "Jast Reality for wiki",
  commandCategory: "text",
  cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("June 6, 2005 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`_____🦋🌺🙂_____
___𝙋𝙚𝙤𝙥𝙡𝙚 𝙙𝙤𝙣'𝙩 𝙡𝙤𝙫𝙚 𝙖𝙨 𝙢𝙪𝙘𝙝 𝙖𝙨 𝙩𝙝𝙚𝙮 𝙨𝙝𝙤𝙬 𝙡𝙤𝙫𝙚 ❤️‍🩹🍒
____মানুষ যতটা ভালোবাসা দেখায়,আসলে ততটা ভালোবাসে না❤️‍🩹🍒
______🦋🌺🙂_____`, event.threadID, event.messageID);
}