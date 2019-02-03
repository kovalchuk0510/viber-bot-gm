const https = require('https');
const ViberBot = require('viber-bot').Bot;
const TextMessage = require('viber-bot').Message.Text;

const bot = new ViberBot({
    authToken: "48f2c0c49be7d4e5-b40cd2a0a2ff1884-160eb2cc212ee520",
    name: "TestBot",
    avatar: "https://raw.githubusercontent.com/devrelv/drop/master/151-icon.png"
});

bot.onTextMessage(/^hi|hello$/i, (message, response) => {
    response.send(new TextMessage(`Hi there ${response.userProfile.name}. I am ${bot.name}`));
});

const port = process.env.PORT || 8080;
const webhookUrl = process.env.WEBHOOK_URL;
https.createServer(bot.middleware()).listen(port, () => bot.setWebhook(webhookUrl));
