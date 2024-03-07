let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quote = [
    'When in doubt, whip it out',
    'You Like backshots?',
    'I love thick goblin girls - Kenny Solomon',
    'Hellhounds are the best monster girls, do not question it',
    'Stop it ron, stop',
    'Holy shit, I forgot my socks',
    '*insert german march*',
    'My friends call my coach',
    'I would fuck that plant',
    'San Diego is No. Wan!'
];
btn.addEventListener('click',function(){
    var randomQuote = quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML = randomQuote;
})