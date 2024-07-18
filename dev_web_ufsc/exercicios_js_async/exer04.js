function consoleAtrasado(mensagem, atraso) {
    setTimeout(() => console.log(mensagem), atraso)
}
console.log("Olá")
consoleAtrasado("Teste", 10000)
console.log("Bye")

// A correção era simples, bastava tornar o primeiro parâmetro de setTimeout como uma declaração de função (ou seja o setTimeout espera uma função de callback).

// Da maneira que estava antes, a chamada de console.log(mensagem) acontecia durante a passagem do parâmetro para a função setTimeout e, assim, a mensagem era impressa no terminal.