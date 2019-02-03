const ngrok = require('./get_public_url');
const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;
const TextMessage = require('viber-bot').Message.Text;

const bot = new ViberBot({
    authToken: "48f2c0c49be7d4e5-b40cd2a0a2ff1884-160eb2cc212ee520",
    name: "TestBot",
    avatar: "http://viber.com/avatar.jpg"
});

return ngrok.getPublicUrl().then(publicUrl => {
    const http = require('http');
    const port = process.env.PORT || 8080;

    bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
        response.send(message);
    });

    bot.onTextMessage(/^hi|hello$/i, (message, response) =>
    response.send(new TextMessage(`Hi there ${response.userProfile.name}. I am ${bot.name}`)));

    bot.onSubscribe(response => bot.getUserDetails(response.userProfile)
        .then(userDetails => console.log(userDetails)));

    console.log('Set the new webhook to"', publicUrl);
    http.createServer(bot.middleware()).listen(port, () => bot.setWebhook(publicUrl));
}).catch(error => {
    console.log('Can not connect to ngrok server. Is it running?');
    console.error(error);
});