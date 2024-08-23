// d4abb956cdcf45038b2924e863a193e2

const date = document.querySelector('#date');
const city = document.querySelector('#city');
const temp = document.querySelector('#temp');
const tempImg = document.querySelector('#tempImg');
const description = document.querySelector('#description');
const tempMax = document.querySelector('#tempMax');
const tempMin = document.querySelector('#tempMin');

const button = document.querySelector('#searchIcon');

let cityName = document.querySelector("#searchBarInput");

const alert = document.querySelector('#alert')





const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let dateObj = new Date();
let month = months[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate() -1;
let year = dateObj.getUTCFullYear();

date.innerHTML = `${month} ${day}, ${year}`;

const app = document.querySelector('#app');

const getWeather = async () => {
    try {
        const weatherDataFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${"d4abb956cdcf45038b2924e863a193e2"}&units=metric`, {
            headers: {
                Accept: "application/json"
              }
        });

        const weatherData = await weatherDataFetch.json();
        console.log(weatherData)

        city.innerHTML = `${weatherData.name}`;
        description.innerHTML = `${weatherData.weather[0].main}`;
        tempImg.innerHTML = `<img src ="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" />`;
        temp.innerHTML = `<h2>${Math.round(weatherData.main.temp)}ºC</h2>`;
        tempMax.innerHTML = `${Math.round(weatherData.main.temp_max)}`;
        tempMin.innerHTML = `${Math.round(weatherData.main.temp_min)}`;

    } catch (error) {
        console.log(error);
        alert.innerHTML = "*Cidade não encontrada!";
        city.innerHTML = "";
        description.innerHTML = "";
        tempImg.innerHTML = "";
        temp.innerHTML = "";
        tempMax.innerHTML ="";
        tempMin.innerHTML = "";
    }
}


button.addEventListener("click", () => {
    if(cityName.value == ""){
        alert.innerHTML = "*Preencha o nome da cidade!";
    } else {
        alert.innerHTML = "";
        getWeather();
    }
})
