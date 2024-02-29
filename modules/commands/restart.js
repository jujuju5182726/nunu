module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "manhIT",
	description: "Restart Bot",
	commandCategory: "Bot Admin",
	usages: "",
	cooldowns: 5
};
module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(` 💟Hello boss\n🔰Please wait a moment, the bot system will restart after 10 seconds`, threadID, () => process.exit(1));
}