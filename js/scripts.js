var myArray = [
    'Correct.'
  , 'Correcto mundo.'
  , 'Yes.'
  , 'Yep.'
  , 'No.'
  , 'Nope.'
  , 'Definitely!'
  , 'Sure thing!'
  , 'That sounds awesome!'
  , 'I\'m not sure about that one.'
  , 'I think you should seek medical advice on that one.'
  , 'I recommend getting legal help with that one.'
  , 'What did Alexa say when you asked her?'
  , 'Yes, and then we can finally make a dent in our Netflix queues!'
  , 'WDYT?'
  , 'Why?'
  , 'Try cutting the characters in your question by 50% and then ask again.'
  , 'Have you tried getting feedback from Usability Hub?'
  , 'That sounds like a perfect question for your manager.'
  , 'Sorry, I was distracted by the adorable corgi that just trotted by, please ask again.'
  // , 'はい、そうですね。'
  // , 'いいえ、違います。'
  // , '是的。'
  // , '没门儿。'
  // , '没错。'
  // , '有可能吧。'
  // , '(⊙o⊙)'
  , 'C\'est possible.'
  , 'C\'est impossible.'
  , 'Non.'
  , 'Oui.'
  , 'How would you answer that if I wasn\'t here?'
  , 'That\'s a great question. I wish I had an answer for you.'
  , 'I\'d like some time to think about that. Can I get back to you tomorrow?'
  , 'I don\'t know. Who else can we ask?'
  , 'That information\'s above my pay grade.'
  , 'Sorry, I don\'t know the answer to that one.'
  , 'Woah, I\'m just a few lines of JavaScript, not a clairvoyant.'
  , 'Trust your gut.'
  , 'Have you tried radical acceptance?'
  , 'Let\'s make a list of pros and cons.'
  , 'Can I follow-up after lunch? It\'s build-your-own tacos today! 🌮'
  , '🤔'
  , '42'
  , 'Did you already try using the force?'
];

function showanswer(){
  var rand = Math.floor(Math.random() * myArray.length);
  document.getElementById('answer').innerHTML = myArray[rand];
}

$(".js-crystal-ball" ).on("click",function() {
  showanswer();
});
