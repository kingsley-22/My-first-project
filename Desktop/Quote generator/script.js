let quotes = [
    "Keep pushing forward",
    "Believe in yourself",
    "Success takes time",
    "You can do this",
    "The future depends on what you do today",
    "Dream big and dare to fail",
    "The best way to predict the future is to create it",
    "Confidence comes from practice",
    "Hard work changes everything.",
    "Your future is created today.",
    "Discipline beats motivation."
]
let textForQuotes = document.getElementById("quote")
let click = document.getElementById("btn")
let lastIndex = -1

click.addEventListener("click", function(){
    let randomQuote = Math.floor(Math.random() * quotes.length)

     while(randomQuote === lastIndex){

       randomQuote = Math.floor(Math.random() * quotes.length)

     }
      lastIndex = randomQuote

    textForQuotes.innerText = quotes[randomQuote]
});
