const cards = [
    { title: "Take a Shot", description: "Take a shot of your favorite drink." },
    { title: "Truth or Dare", description: "Choose truth or dare and act accordingly." },
    { title: "Categories", description: "Choose a category and start naming things in that category. First person to hesitate or repeat a word drinks." },
    { title: "Never Have I Ever", description: "Each player takes turns saying 'Never have I ever...' followed by something they have never done. Everyone who has done it drinks." },
    { title: "Rhyme Time", description: "Start with a word, and each player must say a word that rhymes. The first player who can't think of a word or repeats a word drinks." },
    { title: "Waterfall", description: "Everyone starts drinking at the same time. No one can stop drinking until the person to their right stops. The last person to stop drinking finishes their drink." }
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


  