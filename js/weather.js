const API_KEY = "b4e2d76509030baefe61aa404d865edf";

const options = {
    enableHighAccuracy: true,
    maximumAge: 0,
}

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log(url);
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const icon = document.querySelector("#weather .icon");
            const iconNo = data.weather[0].icon;
            const temp = document.querySelector("#weather .temp");
            const city = document.querySelector("#weather .city");
            icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconNo}.png">`;
            temp.innerText = Math.round(data.main.temp) + "°";
            city.innerText = data.name;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError, options);