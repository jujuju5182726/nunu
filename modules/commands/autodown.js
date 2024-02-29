let axios = require('axios');
let fs = require('fs');

let is_url = url=>/^http(s|):\/\//.test(url);
let stream_url = (url, type)=>axios.get(url, {
     responseType: 'arraybuffer'
}).then(res=> {
     let path = __dirname+'/cache/auto_download/'+Date.now()+'.'+type;

     fs.writeFileSync(path, res.data);
     setTimeout(p=>fs.unlinkSync(p), 1000*60, path);

     return fs.createReadStream(path);
});
let data = {};
let path = __dirname+'/cache/auto_download/status_auto_down.json';
let save = ()=>fs.writeFileSync(path, JSON.stringify(data));

if (!fs.existsSync(path))save(); else data = require(path);

let all_app = [
     'tiktok',
     'facebook',
     'instagram',
     'youtube',
     'pinterest',
     'imgur'
];

exports.config = {
     name: 'autodown',
     version: '0.0.1',
     hasPermssion: 2,
     credits: '𝐀𝐒𝐈𝐅 𝐱𝟔𝟗',
     description: 'AUTO DOWNLOAD VIDEO',
     usePrefix: false,
     commandCategory: 'Admin - Tools',
     usages: `${global.config.PREFIX}autodown`,
     cooldowns: 3
};
exports.run = function(o) {
     let send = (msg, callback)=>o.api.sendMessage(msg, o.event.threadID, callback, o.event.messageID);
     send(`[====[ AUTO DOWNLOADER ]====]\n\n${all_app.map(($, i)=>`${i+1}. ${$}`).join('\n')}\n\n» Reply With Number & on/off - ⚠️\n\n» Example : 1 2 3 4 5 6 on/off`, (err, res)=> {
          res.name = exports.config.name,
          res.event = o.event;
          global.client.handleReply.push(res);
     });

};
exports.handleEvent = async function(o) {
     try {
          let status = data[o.event.threadID] || {};
          let a = o.event.args[0];
          let send = (msg, callback)=>o.api.sendMessage(msg, o.event.threadID, callback, o.event.messageID);
          let head = app=>`[ ${app.toUpperCase()} AUTO DOWNLODER ]\n\n`;

          if (!is_url(a))return;
          if (!!status.tiktok && /(tiktok\.com|douyin\.com)/.test(a)) {
               let res = await axios.post(`https://www.tikwm.com/api/`, {
                    url: a
               });
               if (res.data.code != 0)throw res;

               let tiktok = res.data.data;
               let attachment = [];

               if (typeof tiktok.images == 'object')for (let image_url of tiktok.images)attachment.push(await stream_url(image_url, 'jpg')); else attachment.push(await stream_url(tiktok.play, 'mp4'));

               send({
                    body: `${head('tiktok')}- Title: ${tiktok.title}\n- Likes: ${tiktok.digg_count}\n- Time: ${(tiktok.duration)} Second\n- Author: ${tiktok.author.nickname} (${tiktok.author.unique_id})`,
                    attachment,
               });
          } else
               if (!!status.facebook && /(facebook\.com|fb\.watch)/.test(a)) {
               let res = await axios.get(`https://api.samirthakuri.repl.co/api/videofb?url=${a}`);
                    const {
                         video = [{}],
                         images
                    } = res.data;
                    let attachment = [];

                    if (video[0] != undefined) {
                         attachment = await stream_url(video[0], 'mp4');
                    } else if (images != undefined) {
                         for (const $ of typeof images == 'string' ? [images]: images) {
                              attachment.push(await stream_url($, 'png'));
                         }
                    }

                    send({
                         body: `${head('facebook')}- Quality: ${res.data.quality} \n- Author: ${res.data.author.name} \n- Contract: ${res.data.author.contact}`, attachment
                    });
               } else
               if (!!status.youtube && /(youtube\.com|youtu\.be)/.test(a)) {
               let ytdl = require('ytdl-core');

               ytdl.getInfo(a).then(async info => {
                    let detail = info.videoDetails;
                    let format = info.formats.find(f => f.qualityLabel && f.qualityLabel.includes('360p') && f.audioBitrate);

                    if (format) {
                         send({
                              body: `${head('youtube')}- Title: ${detail.title}`,
                              attachment: await stream_url(format.url, 'mp4')
                         });
                    } else {
                         console.error('No matching format found!');
                    }
               });
          } else
               if (!!status.instagram && /instagram\.com/.test(a)) {
               const res = await axios.get(`https://apipremium-thanhali.thanhali.repl.co/instagram/download?apikey=ThanhAliVip_1234567890&url=${a}`);
               const {
                    videos = [{}],
                    images
               } = res.data;
               let attachment = [];

               if (videos[0] != undefined) {
                    attachment = await stream_url(videos[0], 'mp4');
               } else if (images != undefined) {
                    for (const $ of typeof images == 'string' ? [images]: images) {
                         attachment.push(await stream_url($, 'png'));
                    }
               }

               send({
                    body: `${head('instagram')}- Title: ${res.data.caption} \n- Full name: ${res.data.owner.full_name} \n- Like: ${res.data.like_count} \n- Comment: ${res.data.comment_count}`, attachment
               });
          } else
               if (!!status.pinterest && /(pinterest|pinimg)\.com/.test(a)) {
               if (/\.[^/]+$/.test(a)) {
                    send({
                         body: `${head('pinterest')}`,
                         attachment: await stream_url(a, a.split('.').pop())
                    });
               } else {
                    let src = (await axios.get(a)).data.replace(/^[^]+,"image":"/, '').split('"')[0];
                    send({
                         body: `${head('pinterest')}- Link: ${src}`,
                         attachment: await stream_url(src, src.split('.').pop()),
                    });
               };

          } else
               if (!!status.imgur && /imgur\.com/.test(a)) {
               send({
                    body: head('imgur'),
                    attachment: await stream_url(a, a.split('.').pop()),
               })
          }

     }catch(e) {
          console.log(e);
     };
};
exports.handleReply = function(o) {
     let _ = o.handleReply;
     let t = o.event.threadID;
     let send = (msg, callback)=>o.api.sendMessage(msg, t, callback, o.event.messageID);

     if (o.event.senderID != _.event.senderID)return;
     if (!data[t])data[t] = {};

     let status_input = o.event.args.pop();

     for (let i of o.event.args)data[t][all_app[i-1]] = status_input == 'on'?true: false;

     save();
     send(`» Successful - ✅`);
};