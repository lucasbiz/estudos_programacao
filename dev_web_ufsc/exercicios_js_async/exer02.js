

// Declara a função mas não executa
var callback = function() {
    console.log("Estou na função de callback");
}

// Imprime a mensagem logo que o script inicia
console.log("Iniciei")

// Recebe a função a ser executada depois do tempo informado, no caso 5000ms
setTimeout(callback, 5000);

// Executa o console.log após a função setTimeout
console.log("Estou após o setTimeout")