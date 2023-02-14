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

    if (num === randomNum){
        document.body.innerHTML = `<h2> congrats you have guessed the number right <br></br>
        it was ${num}</h2>
        <button class='play-again' id='play-again'>play again </button>`;
        return;
    }else if (num > randomNum){
        msgEl.innerHTML = '<div>your guess is  high</div>';
    }else{
        msgEl.innerHTML = '<div>your guess is  low</div>'
    }
}

function getRandomNumber(){
    return Math.floor(Math.random() * 100 ) + 1
}

//recognition result
recognition.addEventListener('result',onSpeak);