let x = document.getElementById('city');
let y = document.getElementById('temperature');
function geolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        x.innerText = "Geo Not Supported"
    }
}

function showPosition(data) {
    let x = document.getElementById('city');
    let y = document.getElementById('temperature');
    let latitude = data.coords.latitude;
    let longitude = data.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    //api calling
    fetch(url, { method: 'GET' })
        //return promise
        .then((res) => res.json())
        // resolve promise
        .then((data) => {
            let cityName = data.city.name;
            let temp = data.list[0].temp.day;
            if (window.innerWidth > 768){
                x.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${cityName}`;
                y.innerHTML = `<i class="fa-solid fa-cloud-sun-rain"></i> ${temp}°C`;
                document.getElementsByClassName("weather")[0].style.display = "flex";
            }
            else{
                document.getElementsByClassName("weather")[0].style.display = "none";
            }
        })
}