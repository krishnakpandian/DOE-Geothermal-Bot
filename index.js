const fs = require('fs');
const {TwitterAuthentication} = require('./permissions');
const TwitterBot = require('node-twitterbot').TwitterBot;

var Bot = new TwitterBot(TwitterAuthentication);
const { facts } = require('./facts');

function messageConcat(factMessage){
    let newMessage = "Fun Fact: " + factMessage;
    return newMessage;
}

function getRandomFact(facts) {
    return facts[Math.floor(Math.random() * facts.length)];
}

var message = getRandomFact(facts);



currentDate = new Date()   

startDate = new Date(currentDate.getTime());
startDate.setHours(startTime.split(":")[0]);
startDate.setMinutes(startTime.split(":")[1]);
startDate.setSeconds(startTime.split(":")[2]);

endDate = new Date(currentDate.getTime());
endDate.setHours(endTime.split(":")[0]);
endDate.setMinutes(endTime.split(":")[1]);
endDate.setSeconds(endTime.split(":")[2]);


valid = startDate < currentDate && endDate > currentDate

if (valid) {
    Bot.tweet(message, (err) => {
        console.log(err);
    });
} 
