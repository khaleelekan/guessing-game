const msgEl = document.getElementById('msg')

const randomNum = getRandomNumber()

console.log('Number:', randomNum);

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

let recognition = new window.SpeechRecognition();

// start regocnition and game

recognition.start();

//capture user speak

function onSpeak(e){
    const msg = e.results[0][0].transcript

    //writeMessage(msg)
    //checkNumber(msg)
}

function writeMessage(msg){
    msgEl.innerHTML =`
    <div>you said: </div>
    <span class="box">${msg}</span>`
}
//check message against number
function checkNumber(msg){
    const num = +msg;

    if (Number.isNaN(num)){
        msgEl.innerHTML = 
        '<div>that is not a valid number</div>';
        return;
    }

    if (num > 100 || num < 1){
        msgEl.innerHTML = '<div>number must be between 1 and 100</div>';
        return;
    }
}

function getRandomNumber(){
    return Math.floor(Math.random() * 100 ) + 1
}

//recognition result
recognition.addEventListener('result',onSpeak);