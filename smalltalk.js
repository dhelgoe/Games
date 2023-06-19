const questions = [
    "If you could live anywhere in the world, where would it be?",
    "What is your favorite book or movie and why?",
    "If you could have any superpower, what would it be and why?",
    "What is your favorite hobby or activity?",
    "If you could meet any historical figure, who would it be and why?",
    "What is your dream travel destination?",
    "If you could have dinner with any fictional character, who would it be and why?",
    "What is one thing you've always wanted to learn?",
    "If you could only eat one food for the rest of your life, what would it be?",
    "What is your favorite way to relax or de-stress?",
    "If you could live in any fictional universe, which one would you choose and why?", 
    "What is your dream job or career?",
    "If you could learn any new skill instantly, what would it be?",
    "Would you rather have the ability to fly or be invisible?",
    "Would you rather travel to the past or the future?",
    "Would you rather have a pet dinosaur or a pet dragon?",
    "Would you rather be able to speak all languages or play every musical instrument?",
    "Would you rather have the power to read minds or the power to teleport?",
    "Would you rather have unlimited money or unlimited free time?",
    "Would you rather live on a deserted island or in a bustling city?",
    "Would you rather be able to talk to animals or speak every human language fluently?",
    "Would you rather always have to sing instead of speaking or dance everywhere you go?",
    "Would you rather be a famous celebrity or the CEO of a successful company?",
    "What is your perfect date?",
    "What is your favorite type of restaurant?",
    "Biggest turn on?",
    "Biggest turn off?",
    "If you could go pro in one sport, what would you pick?",
    "If you could create one law, what would it be?",
    "Would you rather sit through a Star Wars marathon or a Lord of the Rings marathon?",
    "What is a hidden talent you have no one really knows about?",
    "Whats one movie that never had a sequal that you think shouldve had one?",
    "If you could be any supernatural being, which would it be?",
    "How would you escape from prison?",
    "Whats your go to dance move? Now show it off",
    "If you could make the ultimate sandwhich, what would be on it?",
    "If you opened a store, what would you sell?",
    "Biggest pet peeve?",
    "What gameshow do you think you would be best at?",
    "Beach or Mountains?",
    "City or Country?",
    "One outdoor activity you would like to try?",
    "You get to pick a new olympic event, what are you picking?",
    "Do you think money can buy happiness?",
    "What is your first memory of me?",
    "What is your favorite scent?",
    "Give me your best pick up line",
    "What would you do if you had to go on a talent show in an hour?",
    "Whats your favorite type of gossip that you secretly love finding out about?",
    "On a scale of 1-10 how good would you say you are at keeping secrets?",
    "How long do you think you would survive a zombie apocalypse? As well as how long everyone around you would last?",
    "Would you rather get 5 million dollars now or $250,000 a year for the next 40 years",
    "Would you rather get 1 million dollars now or have 5 attempts to score a PK on a professional goalie for 7 million",
    "Whats an embarrassing story you have?",
    "Rank these from most real to least real in your opinion: Bigfoot, Aliens, Mothman?",
    "Describe your perfect date",
    "Favorite vacation you've ever been on?",
    "Are you a planner or a spontaneous person",
    "How many friends do you consider close friends and you couldnt live without?",
    "If you had an intro song that played every time you walked into a room, what would it be?",
    "If you had to change your name, what would you change it to? First Name",
    "What food represents your personality?",
    "What food do you avoid at all costs?",
    "Whats the weirdest thing you have ever eaten?",
    "Whats the weirdest food combination you have put together? Was it good?",
    "Would you rather explore the depths of the ocean or outer space?",
    "Would you rather never be able to wear pants again or never be able to wear shorts?",
    "Would you rather be trapped in a romantic comedy with your enemies or trapped in a horror movie with your friends? ",
    "Where is the strangest place you have urinated?",
    "What is the weirdest thing you have seen in someone elses home?",
    "What would be the worst buy one get one free sale of all time?",
    "What sport would be the funniest to add a mandatory amount of alcohol to?",
    "What would be the coolest animal to scale up to the size of a horse?",
    "If you were arrested with no explanation, what would your friends and family assume you had done?",
    "First think of a product. Now, what would be the absolute worst brand name for one of those products?",
    "What food makes you think of Minnesota",
    "Whats the most useless talen you have?",
    




  ];
  
const questionElement = document.getElementById("question");
const nextButton = document.getElementById("nextButton");

let shuffledQuestions = [];

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function showNextQuestion() {
  if (shuffledQuestions.length === 0) {
    shuffledQuestions = shuffle([...questions]);
  }

  const question = shuffledQuestions.pop();
  questionElement.textContent = question;
}

nextButton.addEventListener("click", showNextQuestion);