const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "The only way to do great work is to love what you do.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Difficult roads often lead to beautiful destinations.",
    "You miss 100% of the shots you don't take.",
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts",
    "Don't watch the clock; do what it does. Keep going.",
    "You don't have to be great to start, but you have to start to be great",
    "The way to get started is to quit talking and begin doing.",
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}