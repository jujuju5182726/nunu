huconst axios = require('axios');

module.exports.config = {
  name: "fakeuser",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗", 
  description: "give you a fake people",
  usePrefix: true,
  commandCategory: "Notes",
  usages: "fakeuser",
  cooldowns: 30,
};

module.exports.run = async function({ api, event }) {
  try {
    const response = await axios.get('https://sensui-useless-apis.codersensui.repl.co/api/tools/random-info');//api by sensui 😊
    const { name, age, gender, email, nationality } = response.data;
    const { street, city, country, postcode } = response.data.address;
    const message = {
      body: "Generated Fake People\n NAME: " + name + "\n GENDER: " + gender + "\n AGE: " + age + "\n Your Fake Address\n STREET: " + street + "\nCITY: " + city + "\nCOUNTRY: "+ country + "\nPOSTCODE: " + postcode + "\nNATIONALITY: " + nationality ,
      
    };
    api.sendMessage(message, event.threadID, event.messageID);
    api.setMessageReaction("✅", 
                      event.messageID, (err) => {}, true);
  } catch (error) {
    console.error('Something went wrong:', error);
    api.sendMessage('grabe may error maya mo nalang gamitin ulit mwuaps ', event.threadID, event.messageID);
    api.setMessageReaction("❌", 
                      event.messageID, (err) => {}, true);
    
  }
};