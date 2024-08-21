// d4abb956cdcf45038b2924e863a193e2

const date = document.querySelector('#date');
const city = document.querySelector('#city');
const temp = document.querySelector('#temp');
const tempImg = document.querySelector('#tempImg');
const description = document.querySelector('#description');
const tempMax = document.querySelector('#tempMax');
const tempMin = document.querySelector('#tempMin');

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let dateObj = new Date();
let month = months[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate() -1;
let year = dateObj.getUTCFullYear();

date.innerHTML = `${month} ${day}, ${year}`;

const app = document.querySelector('#app');

const getWeather = async () => {
    try {
        let cityName = document.querySelector("#searchBarInput")
        const weatherDataFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${"d4abb956cdcf45038b2924e863a193e2"}`, {
            headers: {
                Accept: "application/json"
              }
        });

        const weatherData = await weatherDataFetch.json();
        console.log(weatherData)

    } catch (error) {
        console.log(error)
    }
}
