// Selecciona los elementos del DOM que se van a usar
const guessInput = document.getElementById("guess-input");
const guessBtn = document.getElementById("guess-btn");
const resetBtn = document.getElementById("reset-btn");
const hint = document.getElementById("hint");
const timer = document.getElementById("timer");

// Función para reiniciar el juego
function restartGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  hint.textContent = "";
  timeLeft = 30;
  clearInterval(timerId);
  guessBtn.disabled = false;
  timer.textContent = `Tiempo restante: ${timeLeft} segundos`;
}

// Función para manejar los eventos del botón de adivinar
function handleGuessButtonClick() {
  // Convierte la entrada del usuario a un número entero
  const guess = parseInt(guessInput.value);

  // Verifica si el número adivinado es el número secreto
  if (guess === secretNumber) {
    hint.textContent = "¡Adivinaste!";
    restartGame();
  } else if (guess < secretNumber) {
    hint.textContent = `El número es mayor que ${guess}`;
  } else {
    hint.textContent = `El número es menor que ${guess}`;
  }

  // Limpia la entrada del usuario
  guessInput.value = "";
}

// Función para manejar los eventos del botón de reiniciar
function handleResetButtonClick() {
  restartGame();
}

// Inicializa el número secreto
let secretNumber = Math.floor(Math.random() * 100) + 1;

// Inicializa el temporizador
let timeLeft = 30;
let timerId = null;
timer.textContent = `Tiempo restante: ${timeLeft} segundos`;

// Agrega eventos a los botones
guessBtn.addEventListener("click", handleGuessButtonClick);
resetBtn.addEventListener("click", handleResetButtonClick);

// Función para iniciar el temporizador
function startTimer() {
  timerId = setInterval(function() {
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(timerId);
      hint.textContent = "¡Se acabó el tiempo!";
      guessBtn.disabled = true;
    } else {
      timer.textContent = `Tiempo restante: ${timeLeft} segundos`;
    }
  }, 1000);
}

// Agrega evento al botón de adivinar para iniciar el temporizador
guessBtn.addEventListener("click", startTimer);
