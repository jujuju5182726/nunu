module.exports.config = {
    name: "profile",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Mirai Team",
    description: "",
    commandCategory: "Tools",
    usages: "",
    cooldowns: 4,
    dependencies: {
        "request": "",
        "fs": ""
    }
    
};

module.exports.run = async({api,event,args}) => {
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const threadSetting = global.data.threadData.get(parseInt(event.threadID)) || {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
     if (args.length == 0) return api.sendMessage(`♦️ User Info Command Details ♦️\n━━━━━━━━━━━━━━━━━━━\n${prefix}${this.config.name} user - Own Information\n\n${prefix}${this.config.name} user [ Mention / UID ] - Mentioned Person's Information`, event.threadID, event.messageID);
    if (args[0] == "group") {
           if(args[1]){ let threadInfo = await api.getThreadInfo(args[1]);
           let imgg = threadInfo.imageSrc;
           var gendernam = [];
            var gendernu = [];
                for (let z in threadInfo.userInfo) {
                var gioitinhone = threadInfo.userInfo[z].gender;
                if(gioitinhone == "MALE"){gendernam.push(gioitinhone)
                }else{gendernu.push(gioitinhone)
                }};
             var nam = gendernam.length;
             var nu = gendernu.length;
             let sex = threadInfo.approvalMode;
       var pd = sex == false ? "Turn Off" : sex == true ? "Turn On" : "NS";
       if(!imgg) api.sendMessage(`Group name: ${threadInfo.threadName}\nTID: ${args[1]}\nApproved: ${pd}\nEmoji: ${threadInfo.emoji}\nInformation: \n»${threadInfo.participantIDs.length} members and ${threadInfo.adminIDs.length} administrators.\n»Including ${nam} boy and ${nu} female.\n»Total number of messages: ${threadInfo.messageCount}.`,event.threadID,event.messageID);
        else var callback = () => api.sendMessage({body:`Group name: ${threadInfo.threadName}\nTID: ${args[1]}\nApproved: ${pd}\nEmoji: ${threadInfo.emoji}\nInformation: \n»${threadInfo.participantIDs.length} members and ${threadInfo.adminIDs.length}administrators.\n»Including ${nam} boy and ${nu} female.\n»Total number of messages: ${threadInfo.messageCount}.`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID); 
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
      
      }
          
            let threadInfo = await api.getThreadInfo(event.threadID);
            let img = threadInfo.imageSrc;
            var gendernam = [];
            var gendernu = [];
                for (let z in threadInfo.userInfo) {
                var gioitinhone = threadInfo.userInfo[z].gender;
                if(gioitinhone == "MALE"){gendernam.push(gioitinhone)
                }else{gendernu.push(gioitinhone)
                }};
             var nam = gendernam.length;
             var nu = gendernu.length;
             let sex = threadInfo.approvalMode;
       var pd = sex == false ? "Turn Off" : sex == true ? "Turn On" : "NS";
          if(!img) api.sendMessage(`Group name: ${threadInfo.threadName}\nTID: ${event.threadID}\nApproved: ${pd}\nEmoji: ${threadInfo.emoji}\nInformation: \n»${threadInfo.participantIDs.length} members and ${threadInfo.adminIDs.length} administrators.\n»Including ${nam} boy and ${nu} nữ.\n»Total number of messages: ${threadInfo.messageCount}.`,event.threadID,event.messageID)
          else var callback = () => api.sendMessage({body:`Group Name : ${threadInfo.threadName}\nGroup UID : ${event.threadID}\nApprove : ${pd}\nEmoji : ${threadInfo.emoji}\nInformation : \n» ${threadInfo.participantIDs.length} Members and ${threadInfo.adminIDs.length} Administrators\n» Including ${nam} Male and ${nu} Female\n» Total number of Messages : ${threadInfo.messageCount}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID);   
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
               if (args.length == 0) return api.sendMessage(`You can use:\n\n${prefix}${this.config.name} user => it will get your own information.\n\n${prefix}${this.config.name} user @[Tag] => it will get the information of the person you tag.\n\n${prefix}${this.config.name} box = Group Information`, event.threadID, event.messageID);
    if (args[0] == "dvp") {
      var callback = () => api.sendMessage(
  {body:`Name : MD JUNAID KHAN\nReligion : Islam\nGender : Male\nAge : 17\nProfession : Student\nFB ID : https://www.facebook.com/gamingboy242\n\n» [ ${global.config.BOTNAME} ] BOT «`,
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://i.postimg.cc/mgRvvkmf/IMG-20231001-111044.jpg`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    
      };

if (args[0] == "info") { 
    if(!args[1]){
    if(event.type == "message_reply") id = event.messageReply.senderID
    else id = event.senderID;
    let data = await api.getUserInfo(id);
    let url = data[id].profileUrl;
    let b = data[id].isFriend == false ? "No...!!! ❌" : data[id].isFriend == true ? "Yes...!!! ✅" : "Damn";
    let sn = data[id].vanity;
    let name = await data[id].name;
    var sex = await data[id].gender;
    var gender = sex == 2 ? "Male" : sex == 1 ? "Female" : "Tran Duc Bo";
    var callback = () => api.sendMessage({body:`👤 Name : ${name}` + `\n✨ User Name : ${sn}\n🆔 UID : ${id}\n✨ Gender : ${gender}\n🤝🏻 Friendship with Bot : ${b}\n⚡ FB Link : ${url}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
       return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   }
    else {
    
    if (args.join().indexOf('@') !== -1){
    var mentions = Object.keys(event.mentions)
    let data = await api.getUserInfo(mentions);
    let url = data[mentions].profileUrl;
    let b = data[mentions].isFriend == false ? "No...!!! ❌" : data[mentions].isFriend == true ? "Yes...!!! ✅" : "Dammit";
    let sn = data[mentions].vanity;
    let name = await data[mentions].name;
    var sex = await data[mentions].gender;
    var gender = sex == 2 ? "Male" : sex == 1 ? "Female" : "Tran Duc Bo";
    var callback = () => api.sendMessage({body:`👤Name : ${name}` + `\n✨ User Name : ${sn}\n🆔 UID : ${mentions}\n✨ Gender : ${gender}\n🤝🏻 Friendship with Bot : ${b}\n⚡ FB Link : ${url}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
       return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
    else {
    let data = await api.getUserInfo(args[1]);
    let url = data[args[1]].profileUrl;
    let b = data[args[1]].isFriend == false ? "are not !" : data[args[1]].isFriend == true ? "yes!" : "Damn";
    let sn = data[args[1]].vanity;
    let name = await data[args[1]].name;
    var sex = await data[args[1]].gender;
    var gender = sex == 2 ? "Name" : sex == 1 ? "Female" : "Tran Duc Bo";
    var callback = () => api.sendMessage({body:`Name: ${name}` + `\nPersonal URL: ${url}` + `\nUser name: ${sn}\nUID: ${args[1]}\nGender: ${gender}\nMake friends with bots: ${b}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
       return request(encodeURI(`https://graph.facebook.com/${args[1]}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
     }
     }
              }
               