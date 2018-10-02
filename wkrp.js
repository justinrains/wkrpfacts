'use strict';

var Alexa = require('alexa-sdk');
var APP_ID = undefined;

var SKILL_NAME = 'WKRP in Cincinnati Facts';
var GET_FACT_MESSAGE = "Here is your WKRP in Cincinnati fact: ";
var HELP_MESSAGE = 'You can say tell me a WKRP in Cincinnati fact, or, you can say stop...';
var HELP_REPROMPT = 'What can I help you with?';
var STOP_MESSAGE = 'Goodbye!';

var data = [
  'The show was videotaped instead of filmed because the rights to rock songs were cheaper for a taped show than for a filmed show.',
  'The ending theme song was done by a group of studio musicians in Atlanta, GA.',
  'In some scenes, bulletin boards or wall spaces are plastered with bumper stickers for radio stations across the USA.',
  'WKRP was partially inspired by Harry Chapins song WOLD, about a wandering FM DJ looking to finally settle down.',
  'Herb Tarlek had a University of Arkansas Razorbacks coffee mug on his desk. Frank Bonner was born and raised in Arkansas.',
  'After John Lennons assassination in December 1980, a photo of him was displayed in the background prominently, as a memorial tribute.',
  'Venus Flytraps real name was Gordon Sims. He was a schoolteacher before he became a DJ.',
  'William Woodson is uncredited as the announcer for the tag scenes and the intros and outros for Les newscasts.',
  'David Cassidy turned down the role of Johnny "Dr. Johnny Fever" Caravella.',
  'WKRPs phone number is 555-WKRP (555-9577)',
  'WKRP is the station identification for an independent television station, channel 25 in Cincinnati. The station first signed on the airwaves in 1990.',
  'Loni Anderson (Jennifer) refused to play the "dumb blonde" on the show. Her character was not only smart, but was also a journalism major.',
  'WKRP premiered September 18, 1978 on the CBS television network, and aired for four seasons and 88 episodes through April 21, 1982.',
  'Jump, Sanders, and Bonner reprised their roles, appearing as regular characters in a spin-off/sequel series, The New WKRP in Cincinnati, which ran from 1991 to 1993 in syndication.',
  'The transmission tower seen at the beginning of WKRP in Cincinnati actually belonged to Cincinnatis NBC affiliate, WLWT',
  'WKRP had two musical themes, one opening and the other closing the show.',
  'The famous turkeys away episode aired on October 30, 1978',
  'On air, Dr. Johnny Fever tells his fellow babies about Turkey Day doings. Out on the streets, oh the humanity',
  'WKRP showed us that turkeys can not fly',
  'The final first-run episode to air on CBS was #7 in the weekly Nielsen ratings for all series, specials, and sports events. Prior to the airing, the series had already been canceled.',
  'In real life, Gordon Jump had worked as a disc jockey for a radio station in Dayton, Ohio.',
  'WKRPs mascot is a carp',
  'Mister Carlson was obsessed with fishing',
  'Andy Travis came to WKRP from a radio station in New Mexico',
  'Johnny Fevers daughters name was Laurie'
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};

/*
{
  "intents": [
    {
      "intent": "GetNewFactIntent"
    },
    {
      "intent": "AMAZON.HelpIntent"
    },
    {
      "intent": "AMAZON.StopIntent"
    },
    {
      "intent": "AMAZON.CancelIntent"
    }
  ]
}

GetNewFactIntent tell me a wkrp fact
GetNewFactIntent give me a wkrp fact
GetNewFactIntent I want a wkrp fact

Alexa, ask wkrp in cincinnati fact to tell me a wkrp in cincinnati
give me a wkrp in cincinnati fact
i want a wkrp in cincinnati fact
*/

