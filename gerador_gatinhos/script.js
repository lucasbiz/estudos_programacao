
function CarregarGatinho() {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search'
    document.querySelector("#container_gatinho").innerHTML = ''

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const imageUrl = data[0].url

        const imgElement = document.createElement('img')
        imgElement.src = imageUrl
        imgElement.alt = 'Gatinho fofo'
        document.querySelector('#container_gatinho').appendChild(imgElement)

    })
    .catch(error => console.error ('Erro ao carregar gatinho', error))
}


// O fetch retorna uma promise, que produz um valor que é o objeto "response", onde no primeiro .then, usamos o json() para transformar esse valor em um JSON, que no próximo .then é tratado. 

//Também funciona:

// fetch(apiUrl)
// .then(function teste(response) {
//     return response.json()
// })