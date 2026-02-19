// ===== Pokémon List (WORKING SPRITES) =====
const pokemons = [
  { name: "Pikachu", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" },
  { name: "Bulbasaur", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
  { name: "Charmander", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
  { name: "Squirtle", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" },
  { name: "Eevee", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png" },
  { name: "Jigglypuff", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png" }
];

// ===== Game Variables =====
let secretPokemon;
let attemptsLeft;
let gameOver = false;

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
    gameOver = false;

    imgEl.src = secretPokemon.img;
    imgEl.style.filter = "brightness(0) invert(1)"; // silhouette effect

    messageEl.textContent = "Who's that Pokémon?";
    document.body.style.backgroundColor = "#f4f4f4";

    inputEl.value = "";
    inputEl.focus();

    console.log("Secret Pokémon:", secretPokemon.name); // For testing
}

// ===== Check Guess =====
function checkGuess() {

    if (gameOver) return;

    let guess = inputEl.value.trim().toLowerCase();

    if (guess === "") {
        messageEl.textContent = "Please enter a Pokémon name!";
        return;
    }

    if (guess === secretPokemon.name.toLowerCase()) {
        messageEl.textContent = `It's... ${secretPokemon.name}! 🎉`;
        imgEl.style.filter = "none";
        document.body.style.backgroundColor = "#d4edda";
        gameOver = true;
    } else {
        attemptsLeft--;

        if (attemptsLeft > 0) {
            messageEl.textContent = `Wrong! ${attemptsLeft} attempts left.`;
        } else {
            messageEl.textContent = `Game Over! It was ${secretPokemon.name}!`;
            imgEl.style.filter = "none";
            document.body.style.backgroundColor = "#f8d7da";
            gameOver = true;
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
