
/* Copyright (C) 2021 KAVIYAAH - Alexa Team  ,  Lusifar whatsapp bot owner
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
kaviyaah - kavishka sandaruwan (v 8.0.0 avalable)


coded by lusifar -kavishka  dont copy.amaruwen haduwe ekayi



const lusifar = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const YTV_DESC = "Youtube Video Downloader "
const YT_NEED = "*need word!.*"
const DWLOAD_VID = "*🎭Downloading Your Video...*"
const YTV_UP = "*🚀Uploading Your Video...*"
const NO_RESULT = "*🌀can't Find Anything...*"
const config = require('../config');
let KSK = config.WORKTYPE == 'public' ? false : true
//උස්සන්නද ආවෙ බේසිකයෝ.බොහොම අමාරුවෙන් හැදුවෙ.උස්සන එකා අවජාතකයෙක් කියල හිතාගන්න පුලුවන් පොන්න හැත්ත.හුකන පොන්නයෝ


//normal mode

//with info
if (config.YT_INFO == 'true') {
    lusifar.addCommand({ pattern: 'video ?(.*)', fromMe: KSK, deleteCommand: false, desc:'video download',  deleteCommand: false}, async (message, match) => {
        const linkk = match[1]
        if (!linkk) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
        
        await axios
          .get(`https://rei-api.herokuapp.com/api/dl/ytav?url=${linkk}`)
          .then(async (response) => {
            const {
              url,title,thumb,published,channel,views
            } = response.data.result
            const XCVC = await axios.get(thumb, {responseType: 'arraybuffer'})
            
            const cptt = "*📑Title:*  " + title + "\n\n" + "*📅Uploded date:* " + published + "\n\n" + "*🎞️ Channel name:* " +  channel + "\n\n" + "*👁️Views:* " + views
            

            await message.client.sendMessage(message.jid,Buffer.from(XCVC.data), MessageType.image, {quoted: message.data ,mimetype: Mimetype.jpg, ptt: false,caption: cptt})
        })
       
      },
    )

    lusifar.addCommand({ pattern: 'video ?(.*)', fromMe: false, deleteCommand: false, desc:'video download',  deleteCommand: false}, async (message, match) => {
        const linkk = match[1]
        if (!linkk) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
        await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text , {quoted: message.data});
        await axios
          .get(`https://rei-api.herokuapp.com/api/dl/ytavv2?url=${linkk}`)
          .then(async (response) => {
            const {
              link,
            } = response.data.result
            const videoBuffer = await axios.get(link, {responseType: 'arraybuffer'})
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text , {quoted: message.data});
            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video, {quoted: message.data ,mimetype: Mimetype.mp4, ptt: false})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )
    

}

//info without
if (config.YT_INFO == 'false') {

    lusifar.addCommand({ pattern: 'video ?(.*)', fromMe: KSK, deleteCommand: false, dontAddCommandList:true,  deleteCommand: false}, async (message, match) => {
        const linkk = match[1]
        if (!linkk) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
        await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text , {quoted: message.data});
        await axios
          .get(`https://rei-api.herokuapp.com/api/dl/ytavv2?url=${linkk}`)
          .then(async (response) => {
            const {
              link,
            } = response.data.result
            const videoBuffer = await axios.get(link, {responseType: 'arraybuffer'})
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text , {quoted: message.data});
            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video, {quoted: message.data ,mimetype: Mimetype.mp4, ptt: false})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )

}


//self mode


 //with info
if (config.YT_INFO == 'true') {
    lusifar.addCommand({ pattern: 'video ?(.*)', fromMe: true, deleteCommand: false, desc:'video download',  deleteCommand: false}, async (message, match) => {
        const linkk = match[1]
        if (!linkk) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
        
        await axios
          .get(`https://rei-api.herokuapp.com/api/dl/ytav?url=${linkk}`)
          .then(async (response) => {
            const {
              url,title,thumb,published,channel,views
            } = response.data.result
            const XCVC = await axios.get(thumb, {responseType: 'arraybuffer'})
            
            const cptt = "*📑Title:*  " + title + "\n\n" + "*📅Uploded date:* " + published + "\n\n" + "*🎞️ Channel name:* " +  channel + "\n\n" + "*👁️Views:* " + views
            

            await message.client.sendMessage(message.jid,Buffer.from(XCVC.data), MessageType.image, {quoted: message.data ,mimetype: Mimetype.jpg, ptt: false,caption: cptt})
        })
       
      },
    )

    lusifar.addCommand({ pattern: 'video ?(.*)', fromMe: true, deleteCommand: false, desc:'video download',  deleteCommand: false}, async (message, match) => {
        const linkk = match[1]
        if (!linkk) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
        await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text , {quoted: message.data});
        await axios
          .get(`https://rei-api.herokuapp.com/api/dl/ytavv2?url=${linkk}`)
          .then(async (response) => {
            const {
              link,
            } = response.data.result
            const videoBuffer = await axios.get(link, {responseType: 'arraybuffer'})
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text , {quoted: message.data});
            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video, {quoted: message.data ,mimetype: Mimetype.mp4, ptt: false})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )
    

}

//info without
if (config.YT_INFO == 'false') {

    lusifar.addCommand({ pattern: 'video ?(.*)', fromMe: true, deleteCommand: false, dontAddCommandList:true,  deleteCommand: false}, async (message, match) => {
        const linkk = match[1]
        if (!linkk) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
        await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text , {quoted: message.data});
        await axios
          .get(`https://rei-api.herokuapp.com/api/dl/ytavv2?url=${linkk}`)
          .then(async (response) => {
            const {
              link,
            } = response.data.result
            const videoBuffer = await axios.get(link, {responseType: 'arraybuffer'})
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text , {quoted: message.data});
            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video, {quoted: message.data ,mimetype: Mimetype.mp4, ptt: false})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )

}


*/





const lusifar = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const ytdl = require('ytdl-core');
const YTV_DESC = "Youtube Video Downloader "
const YT_NEED = "*need word!.*"
const DWLOAD_VID = "*🎭Downloading Your Video...*"
const YTV_UP = "*🚀Uploading Your Video...*"
const DSWLOAD_VID = "*🎭Downloading Your Video...*"
const YSTV_UP = "*🚀Uploading Your Video...*"
const NO_RESULT = "*🌀can't Find Anything...*"
const fs = require('fs');
const axios = require('axios');
const config = require('../config');
let tk = config.WORKTYPE == 'public' ? false : true
let PUBFM = config.WORKTYPE == 'public' ? true : true

var cant_send = ''
var size_cant = ''


if (config.LANG == 'SI') {
cant_send = 'ඔබ ඉල්ලූ වීඩියෝව ඔබ වෙත එවීමට නොහැක.මන්දටත් එය "'
size_cant = '" කින් සමන්විත වේ.'
}
if (config.LANG == 'EN'){
cant_send = "Sorry! We can't send that video. Because it size " 
size_cant = ".\n Thank you"
}

lusifar.addCommand({pattern: 'video ?(.*)', fromMe: tk, desc: YTV_DESC}, (async (message, match) => { 
if(match[1] === '') return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text , {quoted: message.data}); 
await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text , {quoted: message.data});   
    
    var VID = '';
    try {
            if (match[1].includes( 'shorts' )){
            var rmx = match[1].replace( 'shorts/', '')
            var rmy = rmx.replace( '?feature=share','')
            var data = rmy.split( '/' )[3]
            VID = data
								
         } else
         
         
                 if (match[1].includes('watch')) {
                var tsts = match[1].replace('watch?v=', '')
                var alal = tsts.split('/')[3]
                VID = alal
            } 
         
       else {     
				 VID = match[1].split('/')[3]
            }
        } catch {
            return await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text);
        }
        await axios
        .get(`https://api-alphabot.herokuapp.com/api/downloader/youtube/video?url=https://www.youtube.com/watch?v=`+VID+`&apikey=Alphabot`)
        .then(async (response) => {
          const {
            dl_link,filesize,filesizeF
          } = response.data.results

          if (filesize >= 100000) return await message.client.sendMessage(message.jid,cant_send+filesizeF+size_cant,MessageType.text , {quoted: message.data});
    else{
          const videoBuffer = await axios.get(dl_link, {responseType: 'arraybuffer'})
          await message.client.sendMessage(message.jid,YSTV_UP,MessageType.text , {quoted: message.data});
          await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video, {quoted: message.data ,mimetype: Mimetype.mp4, ptt: false})

        }
    })
        
}))

lusifar.addCommand({pattern: 'video ?(.*)', fromMe: PUBFM , dontAddCommandList: true}, (async (message, match) => { 
    if(match[1] === '') return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text , {quoted: message.data}); 
    await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text , {quoted: message.data});   
        
        var VID = '';
        try {
                if (match[1].includes( 'shorts' )){
                var rmx = match[1].replace( 'shorts/', '')
                var rmy = rmx.replace( '?feature=share','')
                var data = rmy.split( '/' )[3]
                VID = data
                                    
             } else
             
             
                     if (match[1].includes('watch')) {
                    var tsts = match[1].replace('watch?v=', '')
                    var alal = tsts.split('/')[3]
                    VID = alal
                } 
             
           else {     
                     VID = match[1].split('/')[3]
                }
            } catch {
                return await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text);
            }
            await axios
            .get(`https://api-alphabot.herokuapp.com/api/downloader/youtube/video?url=https://www.youtube.com/watch?v=`+VID+`&apikey=Alphabot`)
            .then(async (response) => {
              const {
                dl_link,filesize,filesizeF
              } = response.data.results
    
              if (filesize >= 100000) return await message.client.sendMessage(message.jid,cant_send+filesizeF+size_cant,MessageType.text , {quoted: message.data});
        else{
              const videoBuffer = await axios.get(dl_link, {responseType: 'arraybuffer'})
              await message.client.sendMessage(message.jid,YSTV_UP,MessageType.text , {quoted: message.data});
              await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video, {quoted: message.data ,mimetype: Mimetype.mp4, ptt: false})
    
            }
        })
            
    }))
