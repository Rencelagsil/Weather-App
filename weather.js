
document.getElementById('getWeather').addEventListener('click', async function () {
    const apiKey = '0d7679013a301bb1d1e294b9e1d155d7'; 
    const city = document.getElementById('city').value.trim();

    if (city === '') {
        document.getElementById('weather').innerHTML = 'Please enter a city!';
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},PH&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('weather').innerHTML = `
                <h2>Weather in ${data.name}, PH</h2>
                <p>${data.weather[0].description}, ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} km/h</p>
            `;
        } else {
            document.getElementById('weather').innerHTML = 'City not found!';
        }
    } catch (error) {
        document.getElementById('weather').innerHTML = 'Error fetching data!';
    }
});
