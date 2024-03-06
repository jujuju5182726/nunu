const fs = require("fs");

module.exports.config = {

  name: "emoji_react",

    version: "1.0.1",

  hasPermssion: 0,

  credits: "Tasbiul Islam Rasin", 

  description: "Emoji_Reaction + Your Message Reply. :) ;p",

  commandCategory: "no prefix",

  usages: "emoji_react",

    cooldowns: 5,

};



module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {

  var { threadID, messageID } = event;

  if (event.body.indexOf("😒")==0 || event.body.indexOf("😒")==0 || event.body.indexOf("😒")==0 || event.body.indexOf("😒")==0) {

    var msg = {

        body: "Chaye thakos kn ki kobi ko🤨",

      }

      api.sendMessage( msg, threadID, messageID);

    api.setMessageReaction("😕", event.messageID, (err) => {}, true)

    }



        var { threadID, messageID } = event;

        if (event.body.indexOf("😋")==0 || event.body.indexOf("😋")==0 || event.body.indexOf("😋")==0 || event.body.indexOf("😋")==0) {

            var msg = {

                    body: "Sei shad 😋 eto shad kn...",

                }

                api.sendMessage( msg, threadID, messageID);

        api.setMessageReaction("😋", event.messageID, (err) => {}, true)

            }



        var { threadID, messageID } = event;

            if (event.body.indexOf("🙄")==0 || event.body.indexOf("🙄")==0 || event.body.indexOf("🙄")==0 || event.body.indexOf("🙄")==0) {

                var msg = {

                        body: "Upore kichui nei..tmi nicche dekho",

                    }

                    api.sendMessage( msg, threadID, messageID);

            api.setMessageReaction("😪", event.messageID, (err) => {}, true)

                }

        var { threadID, messageID } = event;

                if (event.body.indexOf("🌚")==0 || event.body.indexOf("🌚")==0 || event.body.indexOf("🌚")==0 || event.body.indexOf("🌚")==0) {

                    var msg = {

                            body: "African Naki..🤐",

                        }

                        api.sendMessage( msg, threadID, messageID);

                api.setMessageReaction("😶", event.messageID, (err) => {}, true)

                    }



        var { threadID, messageID } = event;

                    if (event.body.indexOf("HI")==0 || event.body.indexOf("hi")==0 || event.body.indexOf("Hlw")==0 || event.body.indexOf("Hey")==0) {

                        var msg = {

                                body: "Next..Hi/Hlw na bole -->Assalamualikum Bolo<-- 0:) ",

                            }

                            api.sendMessage( msg, threadID, messageID);

                    api.setMessageReaction("☺", event.messageID, (err) => {}, true)

                        }        



        var { threadID, messageID } = event;

                     if (event.body.indexOf("😏")==0 || event.body.indexOf("😏")==0 || event.body.indexOf("😏")==0 || event.body.indexOf("😏")==0) {

                        var msg = {

                                body: "Kire...eto dhong dekhaw kn 😛",

                                }

                            api.sendMessage( msg, threadID, messageID);

                    api.setMessageReaction("😆", event.messageID, (err) => {}, true)

                            } 



        var { threadID, messageID } = event;

                    if (event.body.indexOf("🥵")==0 || event.body.indexOf("🥵")==0 || event.body.indexOf("🥵")==0 || event.body.indexOf("🥵")==0) {

                        var msg = {

                                body: "Polapan golo nosto hoye geche :) :(",

                                     }

                            api.sendMessage( msg, threadID, messageID);

                    api.setMessageReaction("🙂", event.messageID, (err) => {}, true)

                                   }



        var { threadID, messageID } = event;

                    if (event.body.indexOf("tasbiul islam rasin")==0 || event.body.indexOf("rasin")==0 || event.body.indexOf("@tasbiul islam rasin")==0 || event.body.indexOf("RASIN")==0) {

                        var msg = {

                                body: "Amar Admin re dako kn :( :)",

                                     }

                            api.sendMessage( msg, threadID, messageID);

                    api.setMessageReaction("🤔", event.messageID, (err) => {}, true)

                                    }



        var { threadID, messageID } = event;

                    if (event.body.indexOf("🥺")==0 || event.body.indexOf("😥")==0 || event.body.indexOf("😰")==0 || event.body.indexOf("😢")==0) {

                        var msg = {

                                body: "Kanna koro kn :) cheer up ☺☺ okay 🙃",

                                     }

                            api.sendMessage( msg, threadID, messageID);

                    api.setMessageReaction("🙂", event.messageID, (err) => {}, true)

                                    }



                                    var { threadID, messageID } = event;

                                    if (event.body.indexOf("meow")==0 || event.body.indexOf("Meow")==0 || event.body.indexOf("meaw")==0 || event.body.indexOf("Meaw")==0) {

                                        var msg = {

                                                body: "Ghew ghew,,,vao vao vao",

                                            }

                                            api.sendMessage( msg, threadID, messageID);

                                    api.setMessageReaction("😂", event.messageID, (err) => {}, true)

                                        }



                                        var { threadID, messageID } = event;

                                    if (event.body.indexOf("😅")==0 || event.body.indexOf("😅")==0 || event.body.indexOf("😅")==0 || event.body.indexOf("😅")==0) {

                                        var msg = {

                                                body: "Kosto lukay rekhe haso kn 😿",

                                            }

                                            api.sendMessage( msg, threadID, messageID);

                                    api.setMessageReaction("😢", event.messageID, (err) => {}, true)

                                        }



                                        var { threadID, messageID } = event;

                                    if (event.body.indexOf("😳")==0 || event.body.indexOf("😳")==0 || event.body.indexOf("😳")==0 || event.body.indexOf("😳")==0) {

                                        var msg = {

                                                body: "এভাবে তাকিয়ে দেখার কি আছে 😑 ফেসবুকে সুন্দরী মেয়েদের রূপের আগুনে পুড়ে কালো হয়ে গেছি :) 👊",

                                            }

                                            api.sendMessage( msg, threadID, messageID);

                                    api.setMessageReaction("😑", event.messageID, (err) => {}, true)

                                        }



                                        var { threadID, messageID } = event;

                                    if (event.body.indexOf("🥹")==0 || event.body.indexOf("🥹")==0 || event.body.indexOf("🥹")==0 || event.body.indexOf("🥹")==0) {

                                        var msg = {

                                                body: "Ajk kew nei bole :) 😥",

                                            }

                                            api.sendMessage( msg, threadID, messageID);

                                    api.setMessageReaction("🥶", event.messageID, (err) => {}, true)

                                        }



                                        var { threadID, messageID } = event;

                                    if (event.body.indexOf("kemon acho")==0 || event.body.indexOf("kemon aco")==0 || event.body.indexOf("ki kobr")==0 || event.body.indexOf("kmn acho")==0) {

                                        var msg = {

                                                body: "Alhamdulillah..U?",

                                            }

                                            api.sendMessage( msg, threadID, messageID);

                                    api.setMessageReaction("😶", event.messageID, (err) => {}, true)

                                        }



                                        var { threadID, messageID } = event;

                                    if (event.body.indexOf("🤭")==0 || event.body.indexOf("🙈")==0 || event.body.indexOf("🤭")==0 || event.body.indexOf("🙈")==0) {

                                        var msg = {

                                                body: "নতুন বিয়ে করছ নাকি?>:) এত লজ্জা পাও 🤨",

                                            }

                                            api.sendMessage( msg, threadID, messageID);

                                    api.setMessageReaction("😑", event.messageID, (err) => {}, true)

                                        }



                                        var { threadID, messageID } = event;

                                    if (event.body.indexOf("😁")==0 || event.body.indexOf("😁")==0 || event.body.indexOf("😬")==0 || event.body.indexOf("😬")==0) {

                                        var msg = {

                                                body: "Dat dekhaw kn😒",

                                            }

                                            api.sendMessage( msg, threadID, messageID);

                                    api.setMessageReaction("🙂", event.messageID, (err) => {}, true)

                                        }



                                        var { threadID, messageID } = event;

                                    if (event.body.indexOf("🤤")==0 || event.body.indexOf("🤤")==0 || event.body.indexOf("🤤")==0 || event.body.indexOf("🤤")==0) {

                                        var msg = {

                                                body: "meyeder dekhle mokh diye pani ese jay naki..hala luccah",

                                            }

                                            api.sendMessage( msg, threadID, messageID);

                                    api.setMessageReaction("😶", event.messageID, (err) => {}, true)

                                        }



                                        var { threadID, messageID } = event;

                                    if (event.body.indexOf("Assalamualikum")==0 || event.body.indexOf("assalamualikum")==0 || event.body.indexOf("Assalamu walikum")==0 || event.body.indexOf("Assalamualykum")==0) {

                                        var msg = {

                                                body: "❤️وَعَلَيْكُم السَّلَام وَرَحْمَةُ اَللهِ",

                                            }

                                            api.sendMessage( msg, threadID, messageID);

                                    api.setMessageReaction("🤗", event.messageID, (err) => {}, true)

                                        }



  }

  module.exports.run = function({ api, event, client, __GLOBAL }) {



  }