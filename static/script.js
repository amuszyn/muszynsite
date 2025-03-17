window.addEventListener("scroll", function () {
  var welcomeText = document.getElementById("welcome-text");
  var distanceFromTop = document
    .getElementById("content")
    .getBoundingClientRect().top;
  var fontSize = 2 + distanceFromTop / 280;
  console.log(fontSize);
  if (fontSize < 1) {
    fontSize = 1;
  }
  welcomeText.style.fontSize = fontSize + "rem";
});

window.addEventListener("load", function () {
  var cardContainer = document.getElementById("card-container");
  var cards = cardContainer.getElementsByClassName("card");
  var maxWidth = 0;

  for (var i = 0; i < cards.length; i++) {
    var cardWidth = cards[i].offsetWidth;
    if (cardWidth > maxWidth) {
      maxWidth = cardWidth;
    }
  }

  for (var i = 0; i < cards.length; i++) {
    cards[i].style.width = maxWidth + "px";
  }
});

function handleScroll() {
  const cardContainer = document.getElementById("card-container");
  const cards = cardContainer.querySelectorAll(".card");

  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.78 && rect.bottom > 0) {
      card.classList.add("animate-in");
    } else {
      card.classList.remove("animate-in");
    }
  });
}

window.addEventListener("scroll", handleScroll);

handleScroll();
