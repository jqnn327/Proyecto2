const readline = require('readline');

class Poll {
    constructor(question, options) {
        this.question = question;
        this.options = options;
        this.votes = Array(options.length).fill(0);
    }

    vote(optionIndex) {
        if (optionIndex >= 0 && optionIndex < this.options.length) {
            this.votes[optionIndex]++;
            this.displayResults();
        } else {
            console.error("Invalid option index.");
        }
    }

    displayResults() {
        console.log(`\nResultados de la encuesta: ${this.question}`);
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}: ${this.votes[index]} votos`);
        });
        console.log("------------------------");
    }
}

class PollManager {
    constructor() {
        this.polls = [];
    }

    createPoll(question, options) {
        const newPoll = new Poll(question, options);
        this.polls.push(newPoll);
        return newPoll;
    }

    getPoll(index) {
        if (index >= 0 && index < this.polls.length) {
            return this.polls[index];
        } else {
            console.error("Invalid poll index.");
            return null;
        }
    }
}

// Función para manejar la entrada del usuario
const handleUserInput = (poll) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log(`\n¡Encuesta iniciada! Responde con el número de tu opción favorita.\n`);

    rl.on('line', (input) => {
        const optionIndex = parseInt(input.trim()) - 1;
        if (!isNaN(optionIndex)) {
            poll.vote(optionIndex);
        } else {
            console.log("Por favor, ingresa un número válido correspondiente a una opción.");
        }
    });
};

// Función principal para iniciar la encuesta
const startPoll = () => {
    const pollManager = new PollManager();
    const poll = pollManager.createPoll(
        "¿Cuál es tu lenguaje de programación favorito?",
        ["Rock", "Pop", "Clásica", "Jazz", "Electronica"]
    );

    poll.displayResults();
    handleUserInput(poll);
};

// Iniciar la encuesta
startPoll();
