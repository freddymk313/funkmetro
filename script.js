// let intervalId;
// let isPlaying = false;
// let bpm = 120;

// const startStopButton = document.getElementById("start-stop");
// const bpmInput = document.getElementById("bpm");

// startStopButton.addEventListener("click", () => {
//     if (isPlaying) {
//         stopMetronome();
//     } else {
//         startMetronome();
//     }
// });

// bpmInput.addEventListener("input", (event) => {
//     bpm = event.target.value;
//     if (isPlaying) {
//         stopMetronome();
//         startMetronome();
//     }
// });

// function startMetronome() {
//     isPlaying = true;
//     startStopButton.textContent = "Arrêter";
//     const intervalTime = (60 / bpm) * 1000; // Calculer l'intervalle en millisecondes

//     intervalId = setInterval(() => {
//         playSound(); // Fonction pour jouer le son
//     }, intervalTime);
// }

// function stopMetronome() {
//     isPlaying = false;
//     startStopButton.textContent = "Démarrer";
//     clearInterval(intervalId);
// }

// function playSound() {
//     const audio = new Audio('assets/sounds/click-2.mp3');

//     // Définir la durée d'arrêt du son à 0,1 seconde
//     audio.currentTime = 0;  // Commence depuis le début du son
//     audio.play();

//     // Arrêter le son après 0,1 seconde
//     setTimeout(() => {
//         audio.pause();
//     }, 100);  // 100 millisecondes = 0,1 seconde
// }



let intervalId;
let isPlaying = false;
let bpm = 120;
let audio = new Audio('assets/sounds/click-2.mp3');  // Créer l'instance audio une seule fois

const startStopButton = document.getElementById("start-stop");
const bpmInput = document.getElementById("bpm");

startStopButton.addEventListener("click", () => {
    if (isPlaying) {
        stopMetronome();
    } else {
        startMetronome();
    }
});

bpmInput.addEventListener("input", (event) => {
    bpm = event.target.value;
    if (isPlaying) {
        stopMetronome();
        startMetronome();
    }
});

function startMetronome() {
    isPlaying = true;
    startStopButton.textContent = "Arrêter";
    const intervalTime = (60 / bpm) * 1000; // Calculer l'intervalle en millisecondes

    intervalId = setInterval(() => {
        playSound(); // Fonction pour jouer le son
    }, intervalTime);
}

function stopMetronome() {
    isPlaying = false;
    startStopButton.textContent = "Démarrer";
    clearInterval(intervalId);
}

function playSound() {
    audio.currentTime = 0;  // Réinitialiser le temps de lecture à 0
    audio.play();  // Jouer le son

    // Optionnel : ajouter un délai pour arrêter le son après 100ms
    setTimeout(() => {
        audio.pause();  // Arrêter le son après 100 ms
    }, 100);
}
