module.exports.config = {
  name: "fbaddwork",
  version: "1.0.1", 
  hasPermssion: 0,
  credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗", //don't change the credits please
  description: "Facebook add works",
  commandCategory: "For User",
  cooldowns: 1,
  dependencies: 
  {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.imgur.com/r4m4Pun.jpg",
            "https://i.imgur.com/8ZOv324.jpg",

"https://i.imgur.com/r4m4Pun.jpg"];var callback = () => api.sendMessage({body:`🦋🌺 এখানে ফেসবুকের কিছু Add work দেয়া আছে🦋🌺👇

༊༎ব্লাক༎লাভার༎বাদল༎ তাহ্༎ლ﹏

༊__উম্মাহ ༎বাবু༎বাদল༎ত্যাহ্ ༎﹏ღ﹏,

༅༎বেপ্স༅༎কা'ঠ༅༎গোলাপ༅༎তাহ༅༎ উম্মা৹ ॥

༅༎বাল༅༎⊱পাকনা༅༎⊱বাবু༅༎⊱টাহ্༅༎

༉বেপ্স༉༎⊱ললিপপ༉⊱তাহ༉༎⊱____ღ

༅༎বেপ্স༅༎আলাভু༅༎উম্মাহ্༅༎টাহ্༅༎

༊-তোঁরঁ༎বেঁপ্সঁ༎মিঁষ্টিঁ༎জাঁমাঁইঁ༎ত্যাঁহঁ༎﹏ღ﹏

༊-༎তোঁরঁ༎বেঁপ্সঁ༎কঁলিঁজাঁ༎ত্যাঁহঁ༎﹏ღ﹏

༊-তোঁরঁ༎বেঁপ্সঁ༎চুঁম্মাঁহঁ༎পাঁগঁলঁ༎ত্যাঁহঁ༎﹏ღ﹏

༊༎উম্মাহ্༎পাগল༎তাহ্༎ლ﹏"

༊༎কেয়ার༎লেস༎তাহ্༎ლ﹏"

⟣⃟⸻////সে্ঁক্সি্ঁ তা্ঁহ্ঁ////⸻⃟⟢

༊༎সুইটহার্ট༎তাহ্༎ლ﹏

༊ "ডিপ্রেশন''বাল"তাহ্﹏ღ﹏

༊"ডিপ্রেশন"তাহ"﹏ღ﹏,
ღ༊আ্ঁভা্ঁল্ঁ༎তেঁরা্ঁ༎আ্ঁব্বু্ঁ༎সা্ঁগ্ঁর্ঁ ᭄࿐
ღ༊"ভেরিফাই''লুচ্চা্''সাগর''ত্যাহ্"᭄࿐

༊༎নিশ্বাস༎তাহ্༎ლ﹏"

⟣⃟⸻////প্রি্ঁয়্ঁ তো্ঁর্ঁ____ সে্ঁক্সি্ঁ জা্ঁমা্ঁই্ঁ তা্ঁহ্ঁ////⸻⃟⟢

༊-"সে্ঁক্সি্ঁ"বা্ঁবু্ঁ"টা্ঁহ্ঁ"না্ঁভি্ঁ খু্ঁর্ঁ"তা্ঁহ্ঁ"-ღ"༉࿐

﹏ღ﹏"উ্ঁফ্ঁ সেক্সি্ বা্ঁবু্ঁ সাগর্' তা্ঁহ্ঁツ

༆࿐"উঁফঁফঁ"সেঁক্সিঁ "তা্ঁহ্ঁ"༆

༊-তোঁরঁ༎বেঁপ্সঁ༎চুঁম্মাঁহঁ༎পাঁগঁলঁ༎ত্যাঁহঁ༎﹏ღ﹏

༊'ইউর'অশ্লীল'পিচ্ছি"বাবু'তাহ্"﹏ღ﹏

༊-༎তোঁরঁ༎বেঁপ্সঁ༎কঁলিঁজাঁ༎ত্যাঁহঁ༎﹏ღ﹏

তুই বড় বেইমান রে পাগলি

༅༎বেপ্স༅༎তোর༅༎আবেগ༅༎ত্যাহ༅༎

༊-তোঁরঁ༎বেঁপ্সঁ༎লংঁকাঁ༎ত্যাঁহঁ﹏ღ﹏

༊༎আবেগ༎তাহ্༎ლ﹏"

༊༎নিশ্বাস༎তাহ্༎ლ﹏

༊༎সুইটহার্ট༎তাহ্༎ლ﹏

⊱༅༎বেপ্স⊱༅
☘️𝐀𝐒𝐈𝐅 𝐱𝟔𝟗🌺`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };