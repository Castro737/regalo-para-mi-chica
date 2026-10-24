
const openGift = document.getElementById("openGift");
const welcome = document.getElementById("welcome");
const gift = document.getElementById("gift");
const surpriseButton = document.getElementById("surpriseButton");
const surprise = document.getElementById("surprise");
const hearts = document.getElementById("hearts");

openGift.addEventListener("click", () => {
  welcome.classList.add("hidden");
  gift.classList.remove("hidden");

  gift.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  createHearts(18);
});

surpriseButton.addEventListener("click", () => {
  surprise.classList.toggle("hidden");

  if (surprise.classList.contains("hidden")) {
    surpriseButton.textContent = "Un último detallito ✨";
  } else {
    surpriseButton.textContent = "Te mando muchos abrazos 💜";
    createHearts(24);
  }
});

function createHearts(amount) {
  const symbols = ["💜", "💗", "♡", "✨", "🌷"];

  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");

    heart.className = "heart";
    heart.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDelay = Math.random() * 2 + "s";
    heart.style.fontSize = (16 + Math.random() * 18) + "px";

    hearts.appendChild(heart);

    heart.addEventListener("animationend", () => {
      heart.remove();
    });
  }
}
