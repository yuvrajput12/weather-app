const apikey = "d4952e3802504436343bf2693d71a06b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");





async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if(response.status === 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
      
        var data = await response.json();
        console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";



        if(data.weather[0].main === "Clouds"){
            weatherIcon.src = "./cloudy.png";
          }
          else if(data.weather[0].main === "Rain"){
            weatherIcon.src = "./rainy-day.png";
          }
          else if(data.weather[0].main === "Clear"){
            weatherIcon.src = "./clear.png";
          }
          else if(data.weather[0].main === "Drizzle"){
            weatherIcon.src = "./drizzle.png";
          }
          else if(data.weather[0].main === "Mist"){
            weatherIcon.src = "./mist.png";
          }
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
            
    }
   

    // const City = document.querySelector(".city");
    // City.innerHTML = data.name;
    // const temp = document.querySelector(".temp");
    // temp.innerHTML = Math.round(data.main.temp) + "°c";
    // const humidity = document.querySelector(".humidity");
    // humidity.innerHTML = data.main.humidity + "%";
    // const wind = document.querySelector(".city");
    // wind.innerHTML = data.wind.speed + " Km/h";



    


  
}

searchbtn.addEventListener("click" , ()=>{
    checkweather(searchbox.value);
});