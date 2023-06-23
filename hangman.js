const words = [
  "arizonadiamondbacks",
  "atlantabraves",
  "baltimoreorioles",
  "bostonredsox",
  "chicagocubs",
  "chicagowhitesox",
  "cincinnatireds",
  "clevelandindians",
  "coloradorockies",
  "detroittigers",
  "houstonastros",
  "kansascityroyals",
  "losangelesangels",
  "losangelesdodgers",
  "miamimarlins",
  "milwaukeebrewers",
  "minnesotatwins",
  "newyorkmets",
  "newyorkyankees",
  "oaklandathletics",
  "philadelphiaphillies",
  "pittsburghpirates",
  "sandiegopadres",
  "sanfranciscogiants",
  "seattlemariners",
  "stlouiscardinals",
  "tampabayrays",
  "texasrangers",
  "torontobluejays",
  "washingtonnationals",
  "arizonacardinals",
  "atlantafalcons",
  "baltimoreravens",
  "buffalobills",
  "carolinapanthers",
  "chicagobears",
  "cincinnatibengals",
  "clevelandbrowns",
  "dallascowboys",
  "denverbroncos",
  "detroitlions",
  "greenbaypackers",
  "houstontexans",
  "indianapoliscolts",
  "jacksonvillejaguars",
  "kansascitychiefs",
  "lasvegasraiders",
  "losangeleschargers",
  "losangelesrams",
  "miamidolphins",
  "minnesotavikings",
  "newenglandpatriots",
  "neworleanssaints",
  "newyorkgiants",
  "newyorkjets",
  "philadelphiaeagles",
  "pittsburghsteelers",
  "sanfrancisco49ers",
  "seattleseahawks",
  "tampabaybuccaneers",
  "tennesseetitans",
  "washingtonfootballteam",
  "anaheimducks",
  "arizonacoyotes",
  "bostonbruins",
  "buffalosabres",
  "calgaryflames",
  "carolinahurricanes",
  "chicagoblackhawks",
  "coloradoavalanche",
  "columbusbluejackets",
  "dallasstars",
  "detroitredwings",
  "edmontonoilers",
  "floridapanthers",
  "losangeleskings",
  "minnesotawild",
  "montrealcanadiens",
  "nashvillepredators",
  "newjerseydevils",
  "newyorkislanders",
  "newyorkrangers",
  "ottawasenators",
  "philadelphiaflyers",
  "pittsburghpenguins",
  "sanjosesharks",
  "seattlekraken",
  "stlouisblues",
  "tampabaylightning",
  "torontomapleleafs",
  "vancouvercanucks",
  "vegasgoldenknight",
  "washingtoncapitals",
  "winnipegjets",
  "atlantaunited",
  "austinfc",
  "chicagofirefc",
  "coloradorapids",
  "columbuscrew",
  "dcunited",
  "fccincinnati",
  "fcdallas",
  "houstondynamofc",
  "intermiamicf",
  "lafc",
  "lagalaxy",
  "minnesotaunitedfc",
  "montrealimpact",
  "nashvillesc",
  "newenglandrevolution",
  "newyorkcityfc",
  "newyorkredbulls",
  "orlandocitysc",
  "philadelphiaunion",
  "portlandtimbers",
  "realsaltlake",
 "sanjoseearthquakes",
 "seattlesoundersfc",
 "sportingkansascity",
 "torontofc",
 "vancouverwhitecapsfc",
 "atlantahawks",
"bostonceltics",
"brooklynnets",
"charlottehornets",
"chicagobulls",
"clevelandcavaliers",
"dallasmavericks",
"denvernuggets",
"detroitpistons",
"goldenstatewarriors",
"houstonrockets",
"indianapacers",
"losangelesclippers",
"losangeleslakers",
"memphisgrizzlies",
"miamiheat",
"milwaukeebucks",
"minnesotatimberwolves",
"neworleanspelicans",
"newyorkknicks",
"oklahomacitythunder",
"orlandomagic",
"philadelphia76ers",
"phoenixsuns",
"portlandtrailblazers",
"sacramentokings",
"sanantoniospurs",
"torontoraptors",
"utahjazz",
"washingtonwizards"
];
const maxWrongGuesses = 6;
let wrongGuesses = 0;
let answer = "";
let guessedLetters = [];
let winSteak = 0;
const winImageUrl = "winner-illustration.jpg";


function startGame() {
  // Choose a random word from the words array
  answer = words[Math.floor(Math.random() * words.length)];
  
  // Replace non-letter characters with empty string
  const cleanedAnswer = answer.replace(/[^a-z]/g, "");
  
  // Initialize guessedLetters array with underscores and spaces
  guessedLetters = cleanedAnswer.split("").map(char => {
    if (char === " ") {
      return " ";
    } else {
      return "_";
    }
  });
  
  // Display the word on the screen with underscores for the unguessed letters
  document.getElementById("word").innerHTML = guessedLetters.join(" ");
  
  // Display the number of letters in the word
  document.getElementById("message").innerHTML = `The word has ${cleanedAnswer.length} letters.`;
  
  // Enable the input field and button
  const guessInput = document.getElementById("guess");
  guessInput.disabled = false;
  guessInput.focus();
  document.querySelector("form input[type='submit']").disabled = false;
  
  // Add an event listener to the form
  document.querySelector("form").addEventListener("submit", guessLetter);
}

function guessLetter(event) {
  event.preventDefault();
  
  // Get the value of the guess input
  const guessInput = document.getElementById("guess");
  const guess = guessInput.value.toLowerCase();
  
  // Clear the guess input
  guessInput.value = "";
  
  // Check if the guess is a letter
  if (!/[a-z]/.test(guess)) {
    document.getElementById("message").innerHTML = "Please enter a letter from a to z.";
    return;
  }
  
  // Check if the letter has already been guessed
  if (guessedLetters.includes(guess)) {
    document.getElementById("message").innerHTML = "You have already guessed that letter.";
    return;
  }
  
  // Check if the letter is in the word
  if (answer.includes(guess)) {
    // Update the guessedLetters array with the correct letter(s)
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === guess) {
        guessedLetters[i] = guess;
      }
    }
    
    // Display the updated guessedLetters array on the screen
    document.getElementById("word").innerHTML = guessedLetters.join(" ");
    
    // Check if the user has won the game
    if (!guessedLetters.includes("_")) {
      document.getElementById("message").innerHTML = "Congratulations, you won!";
      guessInput.disabled = true;
      document.querySelector("form input[type='submit']").disabled = true;
      return;
    }

  } else {
    // Update the wrongGuesses counter
    wrongGuesses++;
    
    // Display the updated wrongGuesses counter on the screen
    document.getElementById("guesses").innerHTML = `Wrong guesses: ${wrongGuesses}/${maxWrongGuesses}`;
    
    // Check if the user has lost the game
    if (wrongGuesses === maxWrongGuesses) {
      document.getElementById("message").innerHTML = `Sorry, you lost. The word was "${answer}".`;
      guessInput.disabled = true;
      document.querySelector("form input[type='submit']").disabled = true;
      return;
    }
  }
  
  // Display a message to make another guess
  document.getElementById("message").innerHTML = "Guess another letter.";
}


// event listener for restart button 
document.getElementById("restart").addEventListener("click", restartGame);

function restartGame() {
  location.reload();
}

// start the game on page reload
startGame();




