const categories = {
    frutas:["abacate", "abacaxi", "abiu", "abricó", "abrunho", "açaí", "acerola", "akee", "alfarroba", 
        "ameixa", "amêndoa", "amora", "ananás", "anona", "araçá", "arando", "araticum", "ata", 
        "atemoia", "avelã", "babaco", "babaçu", "bacaba", "bacuri", "bacupari", "banana", "baru", 
        "bergamota", "biribá", "buriti", "butiá", "cabeludinha", "cacau", "cagaita", "caimito", 
        "cajá", "caju", "calabaça", "calabura", "calamondin", "cambucá", "cambuci", "camu-camu", 
        "caqui", "carambola", "carnaúba", "castanha", "castanha-do-pará", "cereja", "ciriguela", 
        "ciruela", "coco", "cranberry", "cupuaçu", "damasco", "dekopon", "dendê", "dióspiro", "dovyalis", 
        "durião", "embaúba", "embaubarana", "engkala", "escropari", "esfregadinha", "esporão-de-galo", 
        "figo", "framboesa", "fruta-do-conde", "fruta-pão", "feijoa", "figo-da-índia", "fruta-de-cedro", 
        "fruta-de-lobo", "fruta-do-milagre", "fruta-de-tatu", "gabiroba", "glicosmis", "goiaba", 
        "granadilla", "gravatá", "graviola", "groselha", "grumixama", "guabiju", "guabiroba", "guaraná", 
        "ibacurupari", "ilama", "imbe", "imbu", "inajá", "ingá", "inharé", "jabuticaba", "jaca", "jambo", 
        "jambolão", "jamelão", "jaracatiá", "jatobá", "jenipapo", "jerivá", "juá", "jujuba", "kiwi", 
        "kumquat", "kinkan", "kino", "kiwano", "kabosu", "karité", "korlan", "laranja", "limão", "lima", 
        "lichia", "longan", "lucuma", "lacucha", "lulo", "lobeira", "langsat", "laranja-de-pacu", "mabolo", 
        "maçã", "macadâmia", "macaúba", "mamão", "mamey", "mamoncillo", "maná-cubiu", "manga", "mangaba", 
        "mangostão", "maracujá", "marang", "marmelo", "marolo", "marula", "massala", "melancia", "melão", 
        "meloa", "mexerica", "mirtilo", "morango", "murici", "naranjilla", "nectarina", "nêspera", "noni", 
        "noz", "noz-pecã", "noz-macadâmia", "pera", "pêssego", "pitanga", "pinha", "pitaia", "pitomba", 
        "pitangatuba", "pindaíba", "pequi", "pequiá", "physalis", "pulasan", "pomelo", "pupunha", "puçá", 
        "patauá", "pajurá", "pixirica", "pistache", "tangerina", "tamarindo", "tâmara", "toranja", "tucumã", 
        "taiuva", "tapiá", "tarumã", "tangor", "tucujá", "uva"],

    animais: ["cachorro", "gato", "leão", "tigre", "elefante", "girafa", "zebra", "hipopótamo", "rinoceronte", "canguru", 
"koala", "panda", "urso-polar", "lobo", "raposa", "jacaré", "crocodilo", "cobra", "águia", "falcão", 
"coruja", "pinguim", "foca", "golfinho", "baleia", "tubarão", "polvo", "lobo-marinho", "arara", "papagaio", 
"canário", "pavão", "galo", "pato", "ganso", "peru", "pardal", "andorinha", "gaivota", "pelicano", 
"flamingo", "cegonha", "antílope", "búfalo", "bode", "carneiro", "cabra", "cavalo", "jumento", "burro", 
"lhama", "alpaca", "bicho-preguiça", "coelho", "hamster", "porquinho-da-índia", "furão", "rato", "camundongo", 
"esquilo", "castor", "lontra", "ornitorrinco", "morcego", "gambá", "tamanduá", "tatu", "onça", "jaguatirica", 
"guaxinim", "chinchila", "guará", "tucano", "urubu", "jacu", "macaco", "gorila", "orangotango", "chimpanzé", 
"mandril", "suricate", "mangusto", "lince", "guepardo", "puma", "castor", "rena", "alce", "veado", "marreco", 
"galinha", "codorna", "pintinho", "peixe-palhaço", "peixe-beta", "peixe-gato", "bacalhau", "tartaruga", "camaleão"
],

    cores: ["vermelho", "azul", "verde", "amarelo", "laranja", "roxo", "rosa", "preto", "branco", "cinza", 
"marrom", "bege", "dourado", "prateado", "ciano", "magenta", "turquesa", "violeta", "coral", "indigo", 
"salmon", "lavanda", "chartreuse", "mint", "pêssego", "mostarda", "berinjela", "pistache", "limão", 
"pimenta", "caramelo", "creme", "azul-marinho", "azul-clarinho", "verde-musgo", "verde-escuro", 
"rosa-bebê", "azul-turquesa", "verde-lima", "amarelo-ouro", "bege-claro", "rosa-chá", "roxo-claro", 
"laranja-claro", "marfim", "marrom-claro", "marrom-escuro", "azul-petróleo", "azul-cobalto", "verde-água", 
"azul-bebê", "laranja-escuro", "azul-real", "verde-floresta", "cinza-escuro", "cinza-claro", "azul-celeste", 
"azul-turquesa", "verde-menta", "verde-bandeira", "vermelho-escuro", "vermelho-claro", "roxo-escuro", 
"roxo-lavanda", "vermelho-sangue", "aqua", "púrpura", "rosa-quente", "cinza-azulado", "pêssego-claro", 
"amarelo-lima", "bege-dourado", "lavanda-escuro", "verde-militar", "azul-piscina", "fúcsia", "açafrão", 
"violeta-claro", "azul-escuro", "verde-menta-claro", "verde-safira", "magenta-escuro", "azul-prússia", 
"laranja-avermelhado", "verde-claro", "coral-claro", "verde-neon"
]
};
let selectedCategory = "";
let selectedWord = "";
let guessedLetters = [];
let mistakes = 0;
const maxMistakes = 9;

// Inicia o jogo com a categoria selecionada
function startGame() {
    const categorySelect = document.getElementById("category");
    selectedCategory = categorySelect.value;
    selectRandomWord();
    resetGame();
}

// Seleciona uma palavra aleatória da categoria escolhida
function selectRandomWord() {
    const words = categories[selectedCategory];
    const randomIndex = Math.floor(Math.random() * words.length);
    selectedWord = words[randomIndex];
}

// Exibe a palavra no formato _ _ _ para letras ainda não adivinhadas
function displayWord() {
    const wordDisplay = selectedWord
        .split("")
        .map(letter => (guessedLetters.includes(letter) ? letter : "_"))
        .join(" ");
    document.getElementById("word").innerText = wordDisplay;
}

// Atualiza o número de erros na tela
function updateMistakes() {
    document.getElementById("mistakes").innerText = `Erros: ${mistakes}`;
}

// Verifica o estado do jogo (vitória ou derrota)
function checkGameStatus() {
    if (!document.getElementById("word").innerText.includes("_")) {
        document.getElementById("message").innerText = "Parabéns, você venceu!";
        disableAlphabetButtons();
    } else if (mistakes >= maxMistakes) {
        document.getElementById("message").innerText = `Você perdeu! A palavra era: ${selectedWord}`;
        disableAlphabetButtons();
    }
}

// Função principal de adivinhação
function guess(letter) {
    const button = document.querySelector(`#alphabet button[data-letter="${letter}"]`);

    if (selectedWord.includes(letter)) {
        guessedLetters.push(letter);
        button.style.backgroundColor = "green"; // Cor para letras corretas
    } else {
        mistakes++;
        updateMistakes();
        drawHangman();
        button.style.backgroundColor = "red"; // Cor para letras incorretas
    }
    button.disabled = true; // Desabilita o botão após o clique
    displayWord();
    checkGameStatus();
}

// Desativa todos os botões do alfabeto (usado após o fim do jogo)
function disableAlphabetButtons() {
    const buttons = document.querySelectorAll("#alphabet button");
    buttons.forEach(button => (button.disabled = true));
}

// Reinicia o jogo para uma nova rodada
function resetGame() {
    guessedLetters = [];
    mistakes = 0;
    document.getElementById("message").innerText = "";
    displayWord();
    updateMistakes();
    resetHangmanCanvas();
    createAlphabetButtons();
}

// Cria os botões do alfabeto dinamicamente
function createAlphabetButtons() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetContainer = document.getElementById("alphabet");
    alphabetContainer.innerHTML = "";
    alphabet.split("").forEach(letter => {
        const button = document.createElement("button");
        button.innerText = letter;
        button.dataset.letter = letter; // Adiciona um atributo para identificar a letra
        button.onclick = () => guess(letter);
        alphabetContainer.appendChild(button);
    });
}

// Limpa o canvas do bonequinho para começar uma nova partida
function resetHangmanCanvas() {
    const canvas = document.getElementById("hangmanCanvas");
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
}

// Desenha o boneco na forca de acordo com o número de erros
function drawHangman() {
    const canvas = document.getElementById("hangmanCanvas");
    const context = canvas.getContext("2d");

    context.lineWidth = 4;
    context.strokeStyle = "#000";

    switch (mistakes) {
        case 1:
            context.beginPath();
            context.moveTo(20, 180); // Base
            context.lineTo(180, 180);
            context.stroke();
            break;
        case 2:
            context.beginPath();
            context.moveTo(50, 20); // Poste
            context.lineTo(50, 180);
            context.stroke();
            break;
        case 3:
            context.beginPath();
            context.moveTo(50, 20); // Barra horizontal
            context.lineTo(130, 20);
            context.stroke();
            break;
        case 4:
            context.beginPath();
            context.moveTo(130, 20); // Corda
            context.lineTo(130, 50);
            context.stroke();
            break;
        case 5:
            context.beginPath();
            context.arc(130, 70, 20, 0, Math.PI * 2); // Cabeça
            context.stroke();
            break;
        case 6:
            context.beginPath();
            context.moveTo(130, 90); // Corpo
            context.lineTo(130, 130);
            context.stroke();
            break;
        case 7:
            context.beginPath();
            context.moveTo(130, 100); // Braço esquerdo
            context.lineTo(110, 120);
            context.stroke();
            break;
        case 8:
            context.beginPath();
            context.moveTo(130, 100); // Braço direito
            context.lineTo(150, 120);
            context.stroke();
            break;
        case 9:
            context.beginPath();
            context.moveTo(130, 130); // Perna esquerda
            context.lineTo(110, 160);
            context.stroke();
            context.moveTo(130, 130); // Perna direita
            context.lineTo(150, 160);
            context.stroke();
            break;
    }
}

// Inicializa o jogo quando uma categoria é escolhida e o botão "Iniciar Jogo" é clicado
