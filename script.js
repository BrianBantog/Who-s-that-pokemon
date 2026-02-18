// ===== Pokémon List =====
const pokemons = [
    { name: "pikachu", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" },
    { name: "bulbasaur", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" },
    { name: "charmander", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" },
    { name: "squirtle", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" },
    { name: "eevee", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png" },
    { name: "vaporeon", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png" }
];

// ===== Game Variables =====
let secretPokemon;
let attemptsLeft;

// ===== HTML Elements =====
const imgEl = document.getElementById("pokemon-img");
const inputEl = document.getElementById("guess-input");
const submitBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn");
const messageEl = document.getElementById("message");

// ===== Initialize Game =====
function initGame() {
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    secretPokemon = pokemons[randomIndex];
    attemptsLeft = 5;

    // Show silhouette
    imgEl.src = secretPokemon.img; // For simplicity, we won't silhouette images
    imgEl.style.filter = "brightness(0)";
    imgEl.style.transition = "0.3s ease";
    messageEl.textContent = "Guess the Pokémon!";
    document.body.style.backgroundColor = "#000000";
    inputEl.value = "";
    inputEl.focus();
    console.log("Secret Pokémon:", secretPokemon.name); // For testing
}

// ===== Check Guess =====
function checkGuess() {
    let guess = inputEl.value.trim().toLowerCase();

    if (guess === "") {
        messageEl.textContent = `Incorrect guess. You have ${attemptsLeft} attempts left. Try again!`;
        return;
    }

    if (guess === secretPokemon.name) {
        messageEl.textContent = "🎉 Congratulations! You guessed the Pokémon!";
        imgEl.style.filter = "none"; // Reveal full color
        document.body.style.backgroundColor = "#d4edda"; // Green background
    } else {
        attemptsLeft--;
        if (attemptsLeft > 0) {
            messageEl.textContent = `❌ Incorrect guess. You have ${attemptsLeft} attempts left. Try again!`;
        } else {
            messageEl.textContent = `💀 Game over! The Pokémon was '${secretPokemon.name}'.`;
            imgEl.style.filter = "none"; // Reveal full color
            document.body.style.backgroundColor = "#f8d7da"; // Red background
        }
    }

    inputEl.value = "";
    inputEl.focus();
}

// ===== Event Listeners =====
submitBtn.addEventListener("click", checkGuess);
inputEl.addEventListener("keypress", function(e) {
    if (e.key === "Enter") checkGuess();
});
restartBtn.addEventListener("click", initGame);

// ===== Start Game =====
initGame();
