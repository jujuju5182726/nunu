module.exports.config = {
  name: "auto_reply",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "Tasbiul Islam Rasin",
  description: "BOT Send Reply If Admin Mentioned",
  commandCategory: "Extra - Files",
  usePrefix: "False - ❎",
  usages: "Mention Admin",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100088774077764","100083520680035") {
    var aid = ["100088774077764","100083520680035"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Mention na diye Rasin re akta GF deo ☹","একবারে বারি দিমু, রাসিন রে মেনশন দিলে দিলে খবর আছে😾","Don't Disturb My Boss [Tasbiul Islam Rasin]","Tasbiul Islam Rasin রে  মেনশন দিবা না ","তাসবিউল ইসলাম রাসিন কে মেনশন না দিয়ে ওকে একটা বউ দাও 🥺🐸","Tasbiul Islam Rasin are curently Offline 🤭🤭"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }