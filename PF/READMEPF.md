Solución con Programación Funcional (PF)
1.	createPoll(question, options):
-	Propósito: Crear una nueva encuesta.
-	Parámetros:
[]	question: La pregunta de la encuesta.

[]	options: Un array de opciones de respuesta.
-	Retorna: Un objeto encuesta con la pregunta, opciones y votos inicializados a 0.
2.	vote(poll, optionIndex):
-	Propósito: Registrar un voto en una opción específica de la encuesta.
-	Parámetros:
[]	poll: El objeto encuesta.

[]	optionIndex: El índice de la opción votada.
-	Acción: Incrementa el voto para la opción seleccionada y muestra los resultados actualizados.
3.	displayResults(poll):
-	Propósito: Mostrar los resultados de la encuesta.
-	Parámetros:
[]	poll: El objeto encuesta.
-	Acción: Imprime la pregunta y los votos de cada opción en la consola.
4.	handleUserInput(poll):
-	Propósito: Manejar la entrada del usuario desde la terminal.
-	Parámetros:
[]	poll: El objeto encuesta.
-	Acción: Lee la entrada del usuario y registra el voto correspondiente.
5.	startPoll():
-	Propósito: Función principal para iniciar la encuesta.
-	Acción: Crea una nueva encuesta, muestra los resultados iniciales y llama a handleUserInput para gestionar los votos de los usuarios


