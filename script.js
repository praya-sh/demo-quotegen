const quotes = {
    motivation: [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
        "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
    ],
    science: [
        "Science is not only a disciple of reason but also one of romance and passion. - Stephen Hawking",
        "The important thing is not to stop questioning. - Albert Einstein",
        "Somewhere, something incredible is waiting to be known. - Carl Sagan",
        "Science knows no country, because knowledge belongs to humanity. - Louis Pasteur",
        "The good thing about science is that it's true whether or not you believe in it. - Neil deGrasse Tyson"
    ],
    wisdom: [
        "The only true wisdom is in knowing you know nothing. - Socrates",
        "In the middle of difficulty lies opportunity. - Albert Einstein",
        "The journey of a thousand miles begins with one step. - Lao Tzu",
        "Be yourself; everyone else is already taken. - Oscar Wilde",
        "Life is what happens when you're busy making other plans. - John Lennon"
    ]
};

let currentCategory = 'motivation';
let i = 0;
let fontSize = 1.2;

const quoteText = document.getElementById('quoteText');
const categorySelect = document.getElementById('categorySelect');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const randomBtn = document.getElementById('randomBtn');
const decreaseFont = document.getElementById('decreaseFont');
const increaseFont = document.getElementById('increaseFont');

function showNext() {
    i = (i + 1) % quotes[currentCategory].length;
    quoteText.textContent = quotes[currentCategory][i];
}

function showPrevious() {
    i = (i - 1 + quotes[currentCategory].length) % quotes[currentCategory].length;
    quoteText.textContent = quotes[currentCategory][i];
}

function showRandom() {
    i = Math.floor(Math.random() * quotes[currentCategory].length);
    quoteText.textContent = quotes[currentCategory][i];
}

function updateCategory() {
    currentCategory = categorySelect.value;
    i = 0;
    quoteText.textContent = quotes[currentCategory][i];
}

function increaseFontSize() {
    if (fontSize < 2) {
        fontSize += 0.1;
        quoteText.style.fontSize = fontSize + 'em';
    }
}

function decreaseFontSize() {
    if (fontSize > 0.8) {
        fontSize -= 0.1;
        quoteText.style.fontSize = fontSize + 'em';
    }
}

categorySelect.addEventListener('change', updateCategory);
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrevious);
randomBtn.addEventListener('click', showRandom);
increaseFont.addEventListener('click', increaseFontSize);
decreaseFont.addEventListener('click', decreaseFontSize);

quoteText.textContent = quotes[currentCategory][i];