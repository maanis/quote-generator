const quote = document.querySelector('.quote')
const author = document.querySelector('.author')



url = 'https://api.quotable.io/random'

async function getQuote(){
    let res = await fetch(url)
    let data = await res.json()
    quote.innerHTML = data.content
    author.innerHTML = data.author
}
function openTweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML,"Tweet Window", "width=600, height=300")
}
getQuote()

function copyText(){
    navigator.clipboard.writeText(quote.innerHTML);
}

function soundText(){
    let utterance = new SpeechSynthesisUtterance(`${quote.innerHTML} by ${author.innerHTML}`)
    speechSynthesis.speak(utterance)
}

let copy_text = document.querySelector(".copy-text")
let copy = document.querySelector(".copy")

copy.addEventListener('click', ()=>{
    copy_text.classList.add('appear')
    setTimeout(() => {
        copy_text.classList.remove('appear')
    }, 1000);
})