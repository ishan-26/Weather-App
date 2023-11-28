const locationInput = document.querySelector("#cityValue");
const btn = document.querySelector("#submit");
const infoDiv = document.querySelector("#information");
const message = document.querySelector("#message");


btn.addEventListener('click',(e)=>{
    e.preventDefault()  // prevents form from submitting 
    let city = locationInput.value
    locationInput.value =''
    
     getWeatherDetails(city);
    
    console.log(city)
})


function getWeatherDetails(queryLocation) {
    const api_key = `b01e31742d31433790b160124232210`

    let url =`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${queryLocation}&aqi=yes`;

  fetch(url)
    .then((response) => {

      if (!response.ok) {
        removeDetails()
        throw "something went wrong";
      }
       else{

        console.log(response);
        return response.json();
      }
    })

    .then((data) => {
      console.log("details of ", queryLocation);
      addDetails(data)
    
    })

    .catch((error) => {
      console.log("error : ", error);
    });
}


const name1 = document.querySelector('#name')
const region = document.querySelector("#region");
const country = document.querySelector("#country");
const degreeC = document.querySelector("#degreeC");
const degreeF = document.querySelector("#degreeF");
const windspeed = document.querySelector("#windspeed");
const text = document.querySelector("#text");
const img = document.querySelector("#img");
const form = document.querySelector("#form");
const condition = document.querySelector("#condition");
const time = document.querySelector("#time");
const errorMessage = document.querySelector("#errorMessage");


function addDetails(data){
    name1.innerHTML = `Location name : ${data.location.name}`;
    region.innerHTML = `Location region : ${data.location.region}`;
    country.innerHTML = `Country : ${data.location.country}`
    time.innerHTML = `Local Time : ${data.location.localtime}`;
    degreeC.innerHTML = `Temperature in Celcius : ${data.current.temp_c} C`
    degreeF.innerHTML = `Temperature in Fahrenheit : ${data.current.temp_f} F`;
    windspeed.innerHTML = `Wind speed : ${data.current.wind_kph} kph`;
    text.innerHTML = `Status : ${data.current.condition.text}`
   
   
    img.setAttribute("src",`${data.current.condition.icon}`);
    img.style.width='100px';
    img.style.height='100px';

    message.innerHTML=''  
}


function removeDetails(){
   name1.innerHTML = '';
   region.innerHTML = '';
   country.innerHTML = ``;
   time.innerHTML = '';
   degreeC.innerHTML = '';
   degreeF.innerHTML = '';
   windspeed.innerHTML = '';
   text.innerHTML = '';
   
   img.setAttribute("src", ``);
   img.style.width = "0px";
   img.style.height = "0px";
   message.innerHTML = "Please Enter a Valid City Name<br><br><br>";

}