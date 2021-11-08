//API key: ee4f9fdfde502adc802d6a4b286bb9e3

// Grab References to form, inputs
var button = document.querySelector('.submit')
var forecastEl = document.querySelector('.forecast')
var inputValue = document.querySelector('.input_text')
var cityName = document.querySelector('.cityName')
var desc = document.querySelector('.desc')
var feelsLike = document.querySelector('.feelsLike')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=ee4f9fdfde502adc802d6a4b286bb9e3')
    .then((response)=>response.json())
    .then((data)=> {
        var nameValue = data['name']
        var descValue = data['weather'][0]['description']
        var temperatureValue = data['main']['temp']
        var feelslikesValue = data['main']['feels_like']
        

        cityName.innerHTML = nameValue
        console.log(cityName, nameValue)

        desc.innerHTML = descValue
        console.log(desc)

        forecastEl.innerHTML = temperatureValue
        console.log(forecastEl)

        feelsLike.innerHTML = feelslikesValue

      
    
    })
  

    
})