const cityin=document.getElementById("cityin")
const btn=document.getElementById("btn")

const city=document.getElementById("city")

const weather=document.getElementById("weather")
const temp=document.getElementById("temp")
const Humidity=document.getElementById("Humidity")
const pressure=document.getElementById("pressure")
const windspeed=document.getElementById("windspeed")
const winddeg=document.getElementById("winddeg")

const country=document.getElementById("country")

// const url="https://api.openweathermap.org/data/2.5/weather?q="+cityin.value+"&appid=ff092519bc84a7badf9349529e5ce1d5"


btn.addEventListener("click",async()=>{
    try{
        let response=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityin.value+"&appid=ff092519bc84a7badf9349529e5ce1d5")
        const data=await response.json()
        city.innerHTML=cityin.value;
        weather.innerHTML=data.timezone;
        temp.innerHTML=data.main.temp;
        Humidity.innerHTML=data.main.humidity;
        pressure.innerHTML=data.main.pressure;
        windspeed.innerHTML=data.wind.speed;
        winddeg.innerHTML=data.wind.deg;
        country.innerHTML=data.sys.country;
    }
    catch(error){
        throw("API is not valid")
    }
})