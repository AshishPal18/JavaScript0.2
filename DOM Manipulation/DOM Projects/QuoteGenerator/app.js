// variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person')

const quotes = [
    {
        quote:"We cannot solve problems with the kind of thinking we employed when we came up with them",
        person:`Albert Einstein`
    },
    {
        quote: "Learn as if you will live forever, live like you will die tomorrow",
        person: `Mahatma Gandhi`
    },
    {
        quote: "When you change your thoughts, remember to also change your world",
        person: `Norman Vincent Peale`
    },
    {
        quote: "Success is not final; failure is not fatal: It is the courage to continue that counts",
        person: `Winston Churchill`
    },
    {
        quote: "It is better to fail in originality than to succeed in imitation",
        person: `Herman Melville`
    },
    {
        quote: "The road to success and the road to failure are almost exactly the same",
        person: `Colin R. Davis`
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it",
        person: `Henry David Thoreau`
    },
    {
        quote: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success",
        person: `Dale Carnegie`
    },
    {
        quote: "Gain Knowledge , Gain Power :",
        person: `Ashish Pal`
    },
    {
        quote:"No Money , No Power",
        person: `Ashish Pal`
    },
    
    
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})



