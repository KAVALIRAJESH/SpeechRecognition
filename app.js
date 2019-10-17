window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
window.SpeechGrammerList = window.SpeechGrammerList || window.webkitSpeechGrammerList;
const Recognition = new SpeechRecognition();

Recognition.interimResults = true;
const p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);
//this is printing content

//events
Recognition.addEventListener('result', e => {
    const transcript = [...e.results]
        .map(result => result[0])
        .map(result => result.transcript)
        .join(' ');
    p.innerHTML = transcript;
    if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
        p.textContent = transcript;
    }
});
Recognition.addEventListener('end', Recognition.start);
Recognition.start();

console.log(window);