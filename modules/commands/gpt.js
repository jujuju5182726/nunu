module.exports.config = {
    name: "gpt",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
    description: "This Is ChatGPT Ask Any Thing",
    commandCategory: "Ai",
    usages: "[ask]",
    cooldowns: 2,
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    let { messageID, threadID, senderID, body } = event;
    let tid = threadID,
    mid = messageID;
    const content = encodeURIComponent(args.join(" "));
    if (!args[0]) return api.sendMessage("দয়া করে কিছু জিজ্ঞেস করুন আমায়", tid, mid);
    try {
        const res = await axios.get(`https://api.kenliejugarap.com/gptgo/?text=${content}`);
        const respond = res.data.response;
        if (res.data.error) {
            api.sendMessage(`Error: ${res.data.error}`, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        } else {
            api.sendMessage(respond, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        }
    } catch (error) {
        console.error(error);
        api.sendMessage("Api problem for error Don't mind.", tid, mid);
    }
};