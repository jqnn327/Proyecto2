const readline = require('readline');

// Función para crear una encuesta
const createPoll = (question, options) => {
    return {
        question,
        options,
        votes: Array(options.length).fill(0),
    };
};

// Función para registrar un voto
const vote = (poll, optionIndex) => {
    if (optionIndex >= 0 && optionIndex < poll.options.length) {
        poll.votes[optionIndex]++;
        displayResults(poll);
    } else {
        console.error("Invalid option index.");
    }
};

// Función para mostrar los resultados
const displayResults = (poll) => {
    console.log(`\nResultados de la encuesta: ${poll.question}`);
    poll.options.forEach((option, index) => {
        console.log(`${index + 1}. ${option}: ${poll.votes[index]} votos`);
    });
    console.log("------------------------");
};

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
            vote(poll, optionIndex);
        } else {
            console.log("Por favor, ingresa un número válido correspondiente a una opción.");
        }
    });
};

// Función principal para iniciar la encuesta
const startPoll = () => {
    const poll = createPoll(
        "¿Cuál es tu deporte favorito para practicar?",
        ["Fútbol", "Baloncesto", "Natación", "Tenis", "Ciclismo"]
    );

    displayResults(poll);
    handleUserInput(poll);
};

// Iniciar la encuesta
startPoll();
