//API key: ee4f9fdfde502adc802d6a4b286bb9e3

// Grab References to form, inputs
var button = document.querySelector('.submit')
var forecastEl = document.querySelector('.forecast')
var inputValue = document.querySelector('.input_text')
var cityName = document.querySelector('.cityName')
var desc = document.querySelector('.desc')
var feelsLike = document.querySelector('.feelsLike')
var icon = document.querySelector('#icon')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=imperial&appid=ee4f9fdfde502adc802d6a4b286bb9e3')
    .then((response)=>response.json())
    .then((data)=> {
        var nameValue = data['name']

        var iconValue = data['weather'][0]['icon']
        var iconUrl = "http://openweathermap.org/img/w/" + iconValue + ".png"
    
        var descValue = data['weather'][0]['description']
        var temperatureValue = data['main']['temp']
        var feelslikesValue = data['main']['feels_like']

        cityName.innerHTML = nameValue
        console.log(cityName, nameValue)

        icon.innerHTML = ("<img src='" + iconUrl  + "'>")
        console.log(inputValue)

        desc.innerHTML = descValue
        console.log(desc)

        forecastEl.innerHTML = "Current temperature: "+ temperatureValue
        console.log(forecastEl)

        feelsLike.innerHTML = "Feels like: " + feelslikesValue
    })
  

    
})

