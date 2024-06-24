
Solución con Programación Orientada a Objetos (POO)

1.	Clase Poll:
-	Propósito: Representar una encuesta.
-	Constructor: Inicializa la encuesta con una pregunta, opciones y votos a 0.
-	Métodos:
[]	vote(optionIndex): Registra un voto en una opción específica e imprime los resultados.

[]	displayResults(): Muestra los resultados de la encuesta.

2.	Clase PollManager:
-	Propósito: Gestionar múltiples encuestas.
-	Constructor: Inicializa un array vacío de encuestas.
-	Métodos:
[]	createPoll(question, options): Crea una nueva encuesta y la añade al array de encuestas.

[]	getPoll(index): Retorna la encuesta en el índice especificado o imprime un error si el índice es inválido.

3.	handleUserInput(poll):
-	Propósito: Manejar la entrada del usuario desde la terminal.
-	Parámetros:
[]	poll: Una instancia de la clase Poll.
-	Acción: Lee la entrada del usuario y registra el voto correspondiente.

4.	startPoll():
-	Propósito: Función principal para iniciar la encuesta.
-	Acción: Crea una instancia de PollManager, crea una nueva encuesta, muestra los resultados iniciales y llama a handleUserInput para gestionar los votos de los usuarios.

