const apiKey = 'bc53776a898345d235e8bf7922e1a0c6';

function getWeather() {
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    var time= new Date();

    console.log(time.getHours());

    fetch(url)
        .then(response =>{
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data=> {
            const weatherInfo = `City: ${data.name}<br>Temperature: ${data.main.temp} °C<br>Weather: ${data.weather[0].description}<br>Humidity: ${data.main.humidity}`;
            document.getElementById('weather-info').innerHTML = weatherInfo;
        })
        .catch(error=>{
            document.getElementById('weather-info').innerHTML = 'Error fetching weather data';
            console.error('There was a problem with the fetch operation:', error);
        })
    function changeBackgroundColor() {
  // Generate random RGB values
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  
  // Set the background color
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}
}

