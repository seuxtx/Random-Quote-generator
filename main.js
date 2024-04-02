let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quote = [
    'When in doubt, whip it out',
    'You Like backshots?',
    'I love thick goblin girls - Kenny Solomon',
    'Hellhounds are the best monster girls, do not question it',
    'I got eyes on an enemy tank just north of your position',
    'Holy shit, I forgot my socks',
    '*insert a quote*',
    'My friends call my coach',
    'Thank you dragon balls',
    'San Diego is No. Wan!',
    'I got messages from the stars',
    'Music Sounds better with you',
    'Bring it around town',
    'The things I do for love',
    'Stop looking over your shoulder',
    'Oh I know what the ladies like',
    'I need a weapon',
    'Get me pictures of spiderman',
    'Overtime',
    'If a bunch of animals are in one location then its a zoo, Unless its a farm.',
    'Never give up when you are just about done',
    "I'll Be back!"
];
btn.addEventListener('click',function(){
    var randomQuote = quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML = randomQuote;
})