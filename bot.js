const express = require('express')
const https = require('https');
const ViberBot = require('viber-bot').Bot;
const TextMessage = require('viber-bot').Message.Text;

const bot = new ViberBot({
    authToken: "48f2c0c49be7d4e5-b40cd2a0a2ff1884-160eb2cc212ee520",
    name: "TestBot",
    avatar: "https://raw.githubusercontent.com/devrelv/drop/master/151-icon.png"
});

const port = process.env.PORT || 8080;
const webhookUrl = process.env.WEBHOOK_URL || process.env.HEROKU_URL;
// express().listen(port, () => console.log(`Listening on ${ port }`))
https.createServer(bot.middleware()).listen(port, () => bot.setWebhook(webhookUrl));
