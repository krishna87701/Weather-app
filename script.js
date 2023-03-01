let container = document.querySelector('#content')
let form = document.querySelector('form')
let h5 = document.querySelector('h5')
let input = document.querySelector('input')
let button = document.querySelector('button')
let weatherData = document.querySelector(".weatherData")

async function getdata(e){
    e.preventDefault()
    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=b722eb4552a64e6d8b892440232702&q=${input.value}&aqi=no`)
    const data = await res.json()
    console.log(data);
    const city = document.createElement("h1")
    city.innerText = data.location.name
    const temp = document.createElement("h1")
    temp.innerText = data.current.temp_c + "°C"
    const time = document.createElement('h1')
    time.innerText = data.location.localtime
     const img = document.createElement('img')
    let icon = `https:${data.current.condition.icon}`
    img.setAttribute( "src" , icon)
    
    const regions = document.createElement('h1')
    regions.innerText =data.location.region

    const countries = document.createElement('h1')
    countries.innerText = data.location.country

    const text = document.createElement('h1')
    text.innerText = data.current.condition.text

   const days = document.createElement('h1')
   days.innerText = data.current.condition.humidity



    weatherData.appendChild(time)
    weatherData.appendChild(countries)
    weatherData.appendChild(city)
    weatherData.appendChild(regions)
    weatherData.appendChild(img)
    weatherData.appendChild(temp)
    weatherData.appendChild(text)
    weatherData.appendChild(days)
}
form.addEventListener("submit" , getdata)

