// Helper
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Data
const quotes = [
    {
        quote: "Love is composed of a single soul inhabiting two bodies.",
        author: "Plato's Symposium",
        noQuote: true
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde"
    },
    {
        quote: "Because once the lie had been allowed in, it led a life of its own and everything took its bearings by it.",
        author: "Milan Kundera"
    },
    {
        quote: "There is nothing like staying at home for real comfort.",
        author: "Jane Austen"
    },
    {
        quote: "Things without meaning are the most beautiful ones.",
        author: "Elena Ferrante"
    },
    {
        quote: "There are people who leave and people who know how to be left.",
        author: "Elena Ferrante"
    },
    {
        quote: "Unlike stories, real life, when it has passed, inclines toward obscurity, not clarity.",
        author: "Elena Ferrante"
    },
    {
        quote: "Become. It was a verb that had always obsessed me...I wanted to become, even though I had never known what. And I had become, that was certain, but without an object, without a real passion, without a determined ambition.",
        author: "Elena Ferrante"
    },
    {
        quote: "Life can only be understood backwards; but it must be lived forwards.",
        author: "Soren Kierkegaard"
    },
    {
        quote: "People demand freedom of speech as a compensation for the freedom of thought which they seldom use.",
        author: "Soren Kierkegaard"
    },
    {
        quote: "Anxiety is the dizziness of freedom.",
        author: "Soren Kierkegaard"
    }, {
        quote: "What labels me, negates me.",
        author: "Soren Kierkegaard"
    },
    {
        quote: "You can discover more about a person in an hour of play than in a year of conversation.",
        author: "Plato"
    }
];

const hiList = ["Hi", "你好", "Shalom", "Hola", "Bonjour", "Salam", "Ciao", "Namaste"];

function setRandomQuote() {
    const randomIdx = randomIntFromInterval(0, quotes.length - 1);
    const randomQuote = quotes[randomIdx];
    document.getElementById("quote").textContent = randomQuote.quote;
    document.getElementById("quote-author").textContent = randomQuote.author;
}

function setRandomHi() {
    const randomIdx = randomIntFromInterval(0, hiList.length - 1);
    const randomHi = hiList[randomIdx];
    document.getElementById("hi-text").textContent = randomHi;
}

const flowerList = ["&#127803;", "&#127799;"];