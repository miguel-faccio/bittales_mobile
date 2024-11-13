const emojiValues = ['🍎', '🍌', '🍉', '🍇', '🍓', '🍒', '🍍', '🍊'];
let cards = [...emojiValues, ...emojiValues];
let flippedCards = [];
let matchedCards = [];
let timer;
let timeElapsed = 0;
let bestTime = localStorage.getItem('bestTime') || null;

const timerDisplay = document.getElementById('timer');
const recordDisplay = document.getElementById('record');
const winModal = document.getElementById('win-modal');
const winMessage = document.getElementById('win-message');
const closeModal = document.getElementById('close-modal');
const playAgain = document.getElementById('play-again');

// Exibe o recorde inicial
recordDisplay.textContent = bestTime ? `Recorde: ${bestTime}s` : 'Recorde: Nenhum';

function shuffleCards() {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
}

function createBoard() {
    const board = document.getElementById('game-board');
    board.innerHTML = '';
    cards.forEach((value, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-id', index);
        card.addEventListener('click', flipCard);
        board.appendChild(card);
    });
}

function startTimer() {
    timer = setInterval(() => {
        timeElapsed++;
        timerDisplay.textContent = `Tempo: ${timeElapsed}s`;
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timeElapsed = 0;
    timerDisplay.textContent = 'Tempo: 0s';
}

function updateRecord() {
    if (bestTime === null || timeElapsed < bestTime) {
        bestTime = timeElapsed;
        localStorage.setItem('bestTime', bestTime);
        recordDisplay.textContent = `Recorde: ${bestTime}s`;
    }
}

function flipCard() {
    const card = this;
    const cardId = card.getAttribute('data-id');
    
    if (flippedCards.length < 2 && !card.classList.contains('flipped') && !card.classList.contains('matched')) {
        card.textContent = cards[cardId];
        card.classList.add('flipped');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (cards[card1.getAttribute('data-id')] === cards[card2.getAttribute('data-id')]) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedCards.push(card1, card2);
        flippedCards = [];
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            card1.textContent = '';
            card2.textContent = '';
            flippedCards = [];
        }, 1000);
    }

    if (matchedCards.length === cards.length) {
        gameWon();
    }
}

function gameWon() {
    resetTimer();
    updateRecord();
    winMessage.textContent = `Você venceu em ${timeElapsed}s!`;
    winModal.style.display = 'flex';
}

function startGame() {
    shuffleCards();
    createBoard();
    matchedCards = [];
    resetTimer();
    startTimer();
}

document.getElementById('restart-btn').addEventListener('click', startGame);
closeModal.addEventListener('click', () => winModal.style.display = 'none');
playAgain.addEventListener('click', () => {
    winModal.style.display = 'none';
    startGame();
});

startGame();
