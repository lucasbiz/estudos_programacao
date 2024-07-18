// function calculadora(a, b, f){
//     return f(a, b)
// }

// function soma(a , b){
//     return a + b
// }

// function subtrai (a, b){
//     return a - b
// }

// console.log(calculadora(31, 12, soma))

// Usando Arrow Functions

const calculadora = (a, b, f) => {
    return f(a, b)
}

const soma = (a, b) => {
    return a + b
}

const subtrai = (a, b) => {
    return a - b
}