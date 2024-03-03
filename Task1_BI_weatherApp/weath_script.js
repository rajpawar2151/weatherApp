const APIKEY = '59bfb0e339eb7731380632240260b920';
const city = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherImg = document.querySelector('.weather-icon');

const checkWeather = async () => {

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${APIKEY}`;

    let response = await fetch(URL);

    if(response.status == 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }else{
        let data = await response.json();
        console.log(data);
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";
    
        
    if (data.weather[0].main == 'Clouds') {
        weatherImg.src = '/images/clouds.png';
    }
    else if (data.weather[0].main == 'Clear') {
        weatherImg.src = '/images/clear.png';
    }
    else if (data.weather[0].main == 'Rain') {
        weatherImg.src = '/images/rain.png';
    }
    else if (data.weather[0].main == 'Drizzle') {
        weatherImg.src = '/images/drizzle.png';
    }
    else if (data.weather[0].main == 'Mist') {
        weatherImg.src = '/images/mist.png';
    }
    
    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error').style.display = 'none';
    }
}


searchBtn.addEventListener('click', () => {
    checkWeather();
})