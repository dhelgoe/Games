const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I used to play piano by ear, but now I use my hands.",
    "Why don't skeletons fight each other? They don't have the guts!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call a snowman with a six-pack? An abdominal snowman!",
    "Why don't eggs tell jokes? Because they might crack up!",
    "What do you call a fish that wears a crown? King Cod!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "Why don't some couples go to the gym? Because some relationships don't work out!",
  "What do you call a bear with no teeth? A gummy bear!",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
  
];


// Get joke card elements
const jokeCard = document.querySelector('.joke-card');
const jokeText = document.querySelector('.joke-text');
const newJokeButton = document.getElementById('new-joke-button');

// Display a random joke on page load
document.addEventListener('DOMContentLoaded', displayRandomJoke);

// Event listener for new joke button
newJokeButton.addEventListener('click', displayRandomJoke);

// Function to display a random joke
function displayRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const randomJoke = jokes[randomIndex];
    jokeText.textContent = randomJoke;
    jokeCard.classList.add('visible');
}

// Array of fun facts
const funFacts = [
    "The average person walks the equivalent of three times around the world in a lifetime.",
    "Honey never spoils. You can eat honey that's been stored for thousands of years.",
    "A single cloud can weigh more than 1 million pounds.",
    "The shortest war in history lasted only 38 to 45 minutes.",
    "The average person spends 6 months of their lifetime waiting for red lights to turn green.",
    "The world's oldest known recipe is for beer.",
    "A flamingo can only eat when its head is upside down.",
    "There are more possible iterations of a game of chess than there are atoms in the known universe.",
    "The average person blinks about 20 times per minute.",
    "The Eiffel Tower can be 15 centimeters taller during the summer due to thermal expansion.",
    "A group of flamingos is called a flamboyance.",
  "The world's oldest known board game is called Senet and was played in ancient Egypt.",
  "The average human brain contains about 86 billion neurons.",
  "The Earth's rotation is gradually slowing down at a rate of about 1.4 milliseconds per century.",
];

const funFactCard = document.querySelector(".fun-fact-card");
const funFactText = document.querySelector(".fun-fact-text");
const newFunFactButton = document.getElementById("new-fun-fact-button");

document.addEventListener('DOMContentLoaded', displayRandomFunFact);
newFunFactButton.addEventListener('click', displayRandomFunFact);

function displayRandomFunFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    const randomFunFact = funFacts[randomIndex];
    funFactText.textContent = randomFunFact;
    funFactCard.classList.add('visible');
}
  