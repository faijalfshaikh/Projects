const quote = document.getElementById("quote");
const author = document.getElementById("author");

const url = "https://quotes-api-self.vercel.app/quote"

async function getQuote(url){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
}

getQuote(url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "by-------" + author.innerHTML,"Tweet Window","width=300 height=300")
}