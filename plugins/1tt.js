
/* lusifar from kaviyaah
*/

const lusifar = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')




lusifar.addCommand({pattern: 'ter', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!credit kaviyah
    const buttons = [
        {buttonId: 'id1', buttonText: {displayText: 't1' }, type: 1},
        {buttonId: 'id2', buttonText: {displayText: 't2' }, type: 1}
      ]
      
      const buttonMessage = {
          contentText: '```'3sdd'\n\n```'4sdd'\n',
          footerText: 'bkk',25
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
