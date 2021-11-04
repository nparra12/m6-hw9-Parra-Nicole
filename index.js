//API key: ee4f9fdfde502adc802d6a4b286bb9e3

// Grab References to form, inputs
var button = document.querySelector('.submit')
var forecastEl = document.querySelector('.forecast')
var input = document.querySelector('.input_text')
var name = document.querySelector('#name')

button.onclick = function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=ee4f9fdfde502adc802d6a4b286bb9e3')
    .then((response)=>response.json())
    .then((data) => console.log(data))
    .catch (err => alert("Didn't catch that, please try again."))

}

//'https://api.openweathermap.org/data/2.5/weather?q='+inputValue+'&aee4f9fdfde502adc802d6a4b286bb9e3'