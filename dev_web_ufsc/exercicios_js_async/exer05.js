// Dois colegas seus precisavam escrever um código em JS que deveria escrever "olá" no console e 2 segundos depois escreva "tchau".

// Um dos seus colegas escreveu o seguinte código:
    

const olaTchau = () => {
    console.log("Olá")
    setTimeout(() => console.log("Tchau"), 2000)
}
olaTchau()
    
// Seu outro colega escreveu:

const olaETchau = () => {
    setTimeout(() => console.log("Tchau"), 2000)
    console.log("Olá")
}
olaETchau()


// RESPOSTA
// Ambos os códigos estão corretos, pois a função setTimeout só irá executar após o tempo atribuido