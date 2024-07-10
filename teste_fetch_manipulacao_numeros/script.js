
const apiUrl = 'https://mocki.io/v1/c88ba39d-2096-467e-87c2-66a5692a7868';

async function fetchNumbers() { //função assíncrona, ou seja, nao impede o carregamento dos demais elementos do codigo
    try {
        let response = await fetch(apiUrl); //espera a resposta do fetch
        let data = await response.json(); //espera a transformação da resposta em json
        let numbersArray = data.numbers
        return numbersArray;

    }
    catch (error) {
        console.log(error);
    }

}

function manipulateNumbers(numbersArray) {

        let doubleNumbers = numbersArray.map(number => number * 2); //para cada numero presente no array, multiplica por 2
        let filterNumbers = numbersArray.filter(number => number > 10); //retorna apenas os números maiores que 10
        let reduceNumbers = numbersArray.reduce((soma, number) => soma + number, 0); //inicia a variavel soma como 0, e soma todos os números do array
                
        return [doubleNumbers, filterNumbers, reduceNumbers]
}

function displayResults (array) {
        let display = document.querySelector('#display_numbers'); //seleciona o elemento com id display_numbers
        display.innerHTML = `
        <p> O array multiplcado por 2 é: ${array[0].join(', ')}</p>
        <p> O array reduzido para apenas os números maiores que 10 é: ${array[1].join(', ')}</p>
        <p> Todos os números do array somados é igual a: ${array[2]}</p>
        `
}

let arrayFetched = fetchNumbers() //chama a função fetchNumbers
    .then(numbersArray => manipulateNumbers(numbersArray)) //então (then) chama a função manipulateNumbers com o array retornado pela fetchNumbers
    .then(array => displayResults(array)) //então (then) chama a função displayResults com o array retornado pela manipulateNumbers

