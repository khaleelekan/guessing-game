const msgEl = document.getElementById('msg')

const randomNum = getRandomNumber()

console.log('Number:', randomNum);

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

let recognition = new window.SpeechRecognition();

// start regocnition and game

recognition.start();

//capture user speak

function onSpeak(e){
    const msg = e.results[0][0].transcript;
    console.log(msg)
}

function getRandomNumber(){
    return Math.floor(Math.random() * 100 ) + 1
}