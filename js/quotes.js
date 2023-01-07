const quotes = [
    {
        quote: "Life has no limitations, except the ones you make.",
        author: "Les Brown",
    },
    {
        quote: "What would you attempt to do if you knew you could not fail?",
        author: "Robert H. Schuller",
    },
    {
        quote: "Learn from the mistakes of others. You can never live long enough to make them all yourself.",
        author: "Groucho Marx",
    },
    {
        quote: "There is virtue in work and there is virtue in rest. Use both and overlook neither.",
        author: "Alan Cohen",
    },
    {
        quote: "A key to success is to start before you are ready.",
        author: "Marie Forleo",
    },
    {
        quote: "Until you cross the bridge of your insecurities, you can't begin to explore your possibilities.",
        author: "Tim Fargo",
    },
    {
        quote: "No one can make you feel inferior without your consent.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "The important thing about a problem is not its solution, but the strength we gain in finding the solution.",
        author: "Seneca",
    },
    {
        quote: "Make the most of yourself, for that is all there is of you.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "It doesn't matter where you start. Only that you begin.",
        author: "Robin Sharma",
    },
    
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `“${todaysQuote.quote}”`;
author.innerText = todaysQuote.author;