const APIKEY = "e2c5d8cf721c8b88265abf9976217f38";
const APIURL = "https://api.openweathermap.org/data/2.5/weather?&units=matric&q=";

const SEARCH = document.getElementById("searchbox");

async function updateweather(cityname) {
    const RESULT = await fetch(APIURL + cityname + `&appid=${APIKEY}`);
    var DATA = await RESULT.json();
    console.log(DATA);
    let CITY = document.getElementById("cityname").textContent = DATA.name;
    let TEMP = document.getElementById("temp").textContent = Math.round(DATA.main.temp) + "°C";
    let WIND = document.getElementById("wind").textContent = DATA.wind.speed + "km/h";
}

SEARCH.addEventListener("keyup", () => {
    updateweather(SEARCH.value);
});
