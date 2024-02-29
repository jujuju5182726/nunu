/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "rdmvdo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "R A S I N",
  description: "Love VEDIO",
  commandCategory: "Random",
  usages: "lovevdo",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["𝗩𝗶𝗱𝗲𝗼 𝗠𝗮𝗱𝗲 𝗕𝘆: \n\n 𝗧𝗮𝘀𝗯𝗶𝘂𝗹 𝗜𝘀𝗹𝗮𝗺 𝗥𝗮𝘀𝗶𝗻❤"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.imgur.com/98nTMJb.mp4",
    "https://i.imgur.com/JCKoVuP.mp4",
    "https://i.imgur.com/2fgoRUk.mp4",
    "https://i.imgur.com/IzczDQl.mp4",
    "https://i.imgur.com/ZdUyW1Q.mp4",
    "https://i.imgur.com/Q7ub7H0.mp4",
    "https://i.imgur.com/R4qD1Y5.mp4",
    "https://i.imgur.com/u6hPQci.mp4",
    "https://i.imgur.com/8qtTt4N.mp4",
    "https://i.imgur.com/jOwRcqi.mp4",
    "https://i.imgur.com/6Rck5rk.mp4",
    "https://i.imgur.com/u1iA3cc.mp4",
    "https://i.imgur.com/LZLbFAz.mp4",
    "https://i.imgur.com/GpGJPCi.mp4",
    "https://i.imgur.com/nVG3i8k.mp4", 
    "https://i.imgur.com/QJAJWHE.mp4",
    "https://i.imgur.com/SSkDKpQ.mp4",
"https://i.imgur.com/Emcg2fL.mp4",
"https://i.imgur.com/T5Sch0C.mp4", "https://i.imgur.com/ITUodvk.mp4", "https://i.imgur.com/uOq9G2O.mp4", "https://i.imgur.com/Irt4aDH.mp4", "https://i.imgur.com/Xx3YFPt.mp4",
"https://i.imgur.com/uqCf60h.mp4",
"https://i.imgur.com/gIuYjCu.mp4","",
"https://i.imgur.com/PzIrJiq.mp4",
"https://i.imgur.com/TcsGCKp.mp4",
"https://i.imgur.com/Hd5MgOs.mp4",
"https://i.imgur.com/uAhcwez.mp4",
"https://i.imgur.com/Exdyrpn.mp4",
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };