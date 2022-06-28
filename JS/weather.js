const weather = document.querySelector("#weather");

function myGetWeather() {
    navigator.geolocation.getCurrentPosition(extractDetails);
}
function extractDetails(details) {
    let longitude = details.coords.longitude;
    let latitude = details.coords.latitude;
    weatherDetails(longitude, latitude);
}

function weatherDetails(lon, lat) {
    const apiKEY = `8f2ff4a7b08410e66ce21250463bb166`
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKEY}&units=metric`
    const weatherAPI = fetch(URL, { method: 'GET' })
        .then(res => res.json())
        .then(data => {
            weather.innerHTML = `
            <p>${data.name}</p>
            <p>${data.main.temp}&deg; C</p>`
        });
}