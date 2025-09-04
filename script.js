const grayBtn = document.getElementById("grayBtn");
//grayScale
grayBtn.addEventListener("click", () => {
  document.body.classList.toggle("gray");
});
const track = document.getElementById("carouselTrack");
const indicatorsContainer = document.getElementById("customIndicators");
const cards = document.querySelectorAll(".carousel-card");
const totalCards = cards.length;
const visibleCards = 5;
let currentIndex = 0;

// Generate indicators
for (let i = 0; i < totalCards; i++) {
  const indicator = document.createElement("div");
  indicator.classList.add("carousel-indicator-line");
  if (i === 0) indicator.classList.add("active");
  indicator.addEventListener("click", () => goToCard(i));
  indicatorsContainer.appendChild(indicator);
}

function updateIndicators() {
  const indicators = document.querySelectorAll(".carousel-indicator-line");
  indicators.forEach((i) => i.classList.remove("active"));
  indicators[currentIndex].classList.add("active");
}

function moveCarousel(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > totalCards - visibleCards)
    currentIndex = totalCards - visibleCards;
  const scrollAmount = (100 / visibleCards) * currentIndex;
  track.style.transform = `translateX(-${scrollAmount}%)`;
  updateIndicators();
}

function goToCard(index) {
  currentIndex = index;
  if (currentIndex > totalCards - visibleCards) {
    currentIndex = totalCards - visibleCards;
  }
  const scrollAmount = (100 / visibleCards) * currentIndex;
  track.style.transform = `translateX(-${scrollAmount}%)`;
  updateIndicators();
}
//fedback
function handleFeedback(type) {
  alert(`You clicked ${type}`);
  // You can handle API calls here or update the UI
}
