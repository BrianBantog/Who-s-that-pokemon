// ===== Pokémon List =====
const pokemons = [
    { name: "pikachu", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" },
    { name: "bulbasaur", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" },
    { name: "charmander", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" },
    { name: "squirtle", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" },
    { name: "eevee", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png" },
    { name: "vaporeon", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png" },
    { name: "eevee", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png" }
];

// ===== Game Variables =====
@@ -25,37 +24,37 @@
    secretPokemon = pokemons[randomIndex];
    attemptsLeft = 5;

    imgEl.src = secretPokemon.img;

    // PURE BLACK silhouette
    imgEl.style.filter = "brightness(0)";
    imgEl.style.transition = "0.3s ease";

    // Show silhouette
    imgEl.src = secretPokemon.img; // For simplicity, we won't silhouette images
    imgEl.style.filter = "brightness(0) invert(1)";
    messageEl.textContent = "Guess the Pokémon!";
    document.body.style.backgroundColor = "#000000";
    document.body.style.backgroundColor = "#f4f4f4";
    inputEl.value = "";
    inputEl.focus();
    console.log("Secret Pokémon:", secretPokemon.name); // For testing
}

// ===== Check Guess =====
function checkGuess() {
    let guess = inputEl.value.trim().toLowerCase();

    if (!guess) return;
    if (guess === "") {
        messageEl.textContent = `Incorrect guess. You have ${attemptsLeft} attempts left. Try again!`;
        return;
    }

    if (guess === secretPokemon.name) {
        messageEl.textContent = "🎉 Correct!";
        imgEl.style.filter = "none"; // reveal
        document.body.style.backgroundColor = "#1e7e34";
        messageEl.textContent = "🎉 Congratulations! You guessed the Pokémon!";
        imgEl.style.filter = "none"; // Reveal full color
        document.body.style.backgroundColor = "#d4edda"; // Green background
    } else {
        attemptsLeft--;

        if (attemptsLeft > 0) {
            messageEl.textContent = `❌ Incorrect! ${attemptsLeft} attempts left.`;
            messageEl.textContent = `❌ Incorrect guess. You have ${attemptsLeft} attempts left. Try again!`;
        } else {
            messageEl.textContent = `💀 Game Over! It was ${secretPokemon.name}.`;
            imgEl.style.filter = "none";
            document.body.style.backgroundColor = "#8b0000";
            messageEl.textContent = `💀 Game over! The Pokémon was '${secretPokemon.name}'.`;
            imgEl.style.filter = "none"; // Reveal full color
            document.body.style.backgroundColor = "#f8d7da"; // Red background
        }
    }

@@ -65,11 +64,9 @@

// ===== Event Listeners =====
submitBtn.addEventListener("click", checkGuess);

inputEl.addEventListener("keydown", function (e) {
inputEl.addEventListener("keypress", function(e) {
    if (e.key === "Enter") checkGuess();
});

restartBtn.addEventListener("click", initGame);

// ===== Start Game =====
