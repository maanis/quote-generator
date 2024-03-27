const quote = document.querySelector('.quote')
const author = document.querySelector('.author')

url = 'https://api.quotable.io/random?tags=technology,famous-quotes'

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