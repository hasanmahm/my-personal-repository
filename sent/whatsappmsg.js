var randomTexts = ['i love you jan' , 'love you kolija' ,'miss you'];
window.InputEvent = window.Event || window.InputEvent;
var event = new InputEvent('input',{bubbles:true});
var textBox = document.getElementsByClassName("text")[0];
setTimeout(funtion () {
textBox . innerHTML=randomTexts
}, 1000)
