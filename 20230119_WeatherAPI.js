//HTML calls
let temp = document.querySelector('.temp')
let desc = document.querySelector('.desc')

// Fetch data
  fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London?unitGroup=metric&key=LA9RR33ZUYFYUQGTD9SRMER8S&contentType=json')
  .then(response => response.json())
  .then(
      displayData)
  .catch(err => alert('Wrong City name'));      

// Display weather
const displayData=(weather)=>{
  temp.innerText=`${weather.main.temp}°C`
  desc.innerText=`${weather.weather[0].main}`
}
