
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4d883c81efmsha454f3a51282d14p111939jsn6f854f320525',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const change = document.querySelector(".card-body");
// change.addEventListener("cursor-hover")

change.addEventListener(
    "mouseover",
    (event) => {
      // highlight the mouseover target
      event.target.background.color = "blue";
  
      // reset the color after a short delay
      setTimeout(() => {
        event.target.style.color = "";
      }, 50000);
    },
    
  );
// (async function (){
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// })();

// (async function (){
//     try {
//         const response = await fetch(url, options)
//         .then(response => response.json())
//         .then((response) => {

//            console.log(response)
           
//            cloud_pct.innerHtml = response.cloud-pct
//            temp.innerHtml = response.temp
//            feels_like.innerHtml = response.feels_like
//            humidity.innerHtml = response.humidity
//            min_temp.innerHtml = response.min_temp
//            max_temp.innerHtml = response.max_temp
//            wind_speed.innerHtml = response.wind_speed
//            wind_degrees.innerHtml =  response.wind_degrees
//            sunrise.innerHtml = response.sunrise
//            sunset.innerHtml =   response.sunset
      

//         })
//         // const result = await response.json();
//         // const shash = await result()


//         //     console.log(shash);
        
        
//     } catch (error) {
//         console.error(error);
//     }
//     })();


    const getWeather = (city) => {
            cityName.innerHTML = city
    
    
        fetch(url +city, options)
        .then(response => response.json())
        .then((response) => {

           console.log(response)
           
           cloud_pct.innerHTML = response.cloud_pct
           temp.innerHTML = response.temp
           feels_like.innerHTML = response.feels_like
           humidity.innerHTML = response.humidity
           min_temp.innerHTML = response.min_temp
           max_temp.innerHTML = response.max_temp
           wind_speed.innerHTML = response.wind_speed
           wind_degrees.innerHTML =  response.wind_degrees
           sunrise.innerHTML = response.sunrise
           sunset.innerHTML =   response.sunset
           humidity1.innerHTML = response.humidity
           temp1.innerHTML = response.feels_like
           wind_speed1.innerHTML = response.wind_speed
      

        })
  
        
        
         .catch(err => console.error(err)) ;
        
    };
    

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(city.value);
});
getWeather("Delhi");    







