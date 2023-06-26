const cards = [
    { title: "How Funny Are You", description: "You have 30 seconds to make the person to your right laugh, if you fail you drink. If you succeed they drink.." },
    { title: "Truth or Dare", description: "Choose truth or dare and act accordingly." },
    { title: "Categories", description: "Choose a category and start naming things in that category. First person to hesitate or repeat a word drinks." },
    { title: "Never Have I Ever", description: "Each player takes turns saying 'Never have I ever...' followed by something they have never done. Everyone who has done it drinks." },
    { title: "Rhyme Time", description: "Start with a word, and each player must say a word that rhymes. The first player who can't think of a word or repeats a word drinks." },
    { title: "Waterfall", description: "Everyone starts drinking at the same time. No one can stop drinking until the person to their right stops. The last person to stop drinking finishes their drink." },
    { title: "Dance", description: "You must dance until it is your turn again. If you refuse or stop, drink." },
    { title: "Driving Test", description: "Everyone who has ever failed a driving test, drink." },
    { title: "Vote", description: "Everyone votes on who is the most indecisive person. The winner of the vote drinks." },
    { title: "Vote", description: "Everyone votes on who is the biggest alcoholic. That person picks another person to drink with them." },
    { title: "Most Likely", description: "Vote, who is the most likely to dodge buying the next round of drinks? That person drinks?" },
    { title: "Snapchat", description: "Person with the highest snapscore, take 2 drinks. " },
    { title: "Social", description: "Everyone Drinks!!." },
    { title: "Sorry", description: "Whoever is reading this card take a drink." },
    { title: "Guys", description: "Guys Drink." },
    { title: "Girls", description: "Girls Drink!." },
    { title: "Drink", description: "Oldest person drink!." },
    { title: "Arm Wrestle", description: "Arm wrestle the person to your left, loser drinks." },
    { title: "Balance", description: "Everyone tries to balance on one leg, the first one out drinks." },
    { title: "Phone", description: "Whoever has the lowest phone battery right now drinks." },
    { title: "Categories", description: "Choose a category and start naming things in that category. First person to hesitate or repeat a word drinks." },
    { title: "Never Have I Ever", description: "Each player takes turns saying 'Never have I ever...' followed by something they have never done. Everyone who has done it drinks." },


  ];
  
  function createCard() {
    const cardContainer = document.getElementById("card-container");
    const card = document.createElement("div");
    card.classList.add("card");
  
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
  
    const randomIndex = Math.floor(Math.random() * cards.length);
    const titleElement = document.createElement("h2");
    titleElement.classList.add("card-title");
    titleElement.textContent = cards[randomIndex].title;
  
    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("card-description");
    descriptionElement.textContent = cards[randomIndex].description;
  
    cardContent.appendChild(titleElement);
    cardContent.appendChild(descriptionElement);
  
    card.appendChild(cardContent);
    cardContainer.innerHTML = "";
    cardContainer.appendChild(card);
  }
  
  function showNextCard() {
    createCard();
  }
  
  // Initial card creation
  showNextCard();
  
  // Add event listener to the Next button
  const nextButton = document.getElementById("next-button");
  nextButton.addEventListener("click", showNextCard);


  