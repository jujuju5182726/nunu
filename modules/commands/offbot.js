module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "HTHB",
	description: "Off Bot",
	commandCategory: "Bot Admin",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("Bye Bye 🫠👋\n\nআপনাদের সবার সাথে অনেক মজা করলাম যদি কোন ভুল হয়ে থাকে মাফ করে দিবেন 🤗 বস এর আদেশ আমি আর এখন কথা বলতে পারবো না 😥",event.threadID, () =>process.exit(0))
