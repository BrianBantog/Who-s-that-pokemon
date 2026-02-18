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

    imgEl.src = secretPokemon.img;

    // PURE BLACK silhouette
    imgEl.style.filter = "brightness(0)";
    imgEl.style.transition = "0.3s ease";

    messageEl.textContent = "Guess the Pokémon!";
    document.body.style.backgroundColor = "#000000";
    inputEl.value = "";
    inputEl.focus();
}

// ===== Check Guess =====
function checkGuess() {
    let guess = inputEl.value.trim().toLowerCase();

    if (!guess) return;

    if (guess === secretPokemon.name) {
        messageEl.textContent = "🎉 Correct!";
        imgEl.style.filter = "none"; // reveal
        document.body.style.backgroundColor = "#1e7e34";
    } else {
        attemptsLeft--;

        if (attemptsLeft > 0) {
            messageEl.textContent = `❌ Incorrect! ${attemptsLeft} attempts left.`;
        } else {
            messageEl.textContent = `💀 Game Over! It was ${secretPokemon.name}.`;
            imgEl.style.filter = "none";
            document.body.style.backgroundColor = "#8b0000";
        }
    }

    inputEl.value = "";
    inputEl.focus();
}

// ===== Event Listeners =====
submitBtn.addEventListener("click", checkGuess);

inputEl.addEventListener("keydown", function (e) {
    if (e.key === "Enter") checkGuess();
});

restartBtn.addEventListener("click", initGame);

// ===== Start Game =====
initGame();
