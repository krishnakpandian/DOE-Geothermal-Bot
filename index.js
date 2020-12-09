const fs = require('fs');
const {TwitterAuthentication} = require('./permissions');
const TwitterBot = require('node-twitterbot').TwitterBot;

var Bot = new TwitterBot(TwitterAuthentication);
const { facts } = require('./facts');

function messageConcat(factMessage){
    let newMessage = "Fun Fact: " + factMessage + "#Geothermal";
    return newMessage;
}

function getRandomFact(facts) {
    return facts[Math.floor(Math.random() * facts.length)];
}

var message = getRandomFact(facts);




Bot.tweet(message, (err) => {
    console.log(err);
});
