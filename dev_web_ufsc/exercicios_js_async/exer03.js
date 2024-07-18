function consoleAtrasado(mensagem, atraso) {
    setTimeout(console.log(mensagem), atraso)
}
console.log("Olá")
consoleAtrasado("Teste", 10000)
console.log("Bye")

// Retorna Olá, Teste e Bye, pois o ultimo console.log roda apenas depois de consoleAtrasado terminar de rodar
