
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