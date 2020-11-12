const fs = require('fs');
const {TwitterAuthentication} = require('./permissions');
const TwitterBot = require('node-twitterbot').TwitterBot;

var Bot = new TwitterBot(TwitterAuthentication);
const { facts } = require('./facts');

function messageConcat(factMessage, factNumber){
    let newMessage = "Fun Fact" + factNumber + ":" + factMessage;
    return newMessage;
}

function getRandomFact(facts) {
    return facts[Math.floor(Math.random() * facts.length)];
}

var message = getRandomFact(facts);

Bot.tweet(message, (err) => {
    console.log(err);
});