// 0a32885a9d33bb73a5cd9aa6a716ebc2
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// https://openweathermap.org/img/wn/10d@2x.png
// https://openweathermap.org/img/wn/03n@2x.png

let form = document.querySelector("form")
let city;
let article = document.querySelector("article");




function fetchData(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=0a32885a9d33bb73a5cd9aa6a716ebc2&q=${city}&units=metric`)
    .then(response =>{
        response.json()
        .then(data =>{
            // let temp = `${Math.round((data.main.temp-273.15),2)}`
            let iconImg = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            
// Print the local time
// console.log("Local Time:", localTimeString);

            console.log(data);
            article.innerHTML =`
            <div class="card-block">
                <div class="sub-card-1">
                    <h1>${Math.round(data.main.temp)}° C</h1>
                    <div class="country-block">
                        <h2>${data.name}</h2>
                        <h3>${data.sys.country}</h3>
                    </div>
                    <div class="description-block">
                        <img src=${iconImg}>
                        <h3>${data.weather[0].description}</h3>
                    </div>
                </div>
                
                
                <div class="sub-card-2">
                    <h2>Weather Details</h2>
                    <div class="container">
                        <h3>Maximum Temperature</h3> 
                        <h4>${Math.ceil(data.main.temp_max)}<sup>o</sup> C</h4>
                    
                    </div>
                    <div class="container">
                        <h3>Minimum Tempertaure</h3> 
                        <h4>${Math.floor(data.main.temp_min)}<sup>o</sup> C</h4>
                    
                    </div>
                    <div class="container">
                        <h3>Feels Like</h3> 
                        <h4>${Math.round(data.main.feels_like)}<sup>o</sup> C</h4>
                    
                    </div>
                    <div class="container">
                        <h3>Humidity</h3> 
                        <h4>${data.main.humidity}%</h4>
                    
                    </div>
                    <div class="container">
                        <h3>Wind</h3> 
                        <h4>${Math.ceil(3.6*data.wind.speed)} km/h</h4>
                    
                    </div>                  
                </div>
            </div>
            `;
                


        })
        .catch(err =>{
            console.log(err)
        });
    })
    .catch(err =>{
        console.log(err)
    })
    .finally(()=>{
        console.log("Server Responded");
    });

}
// console.log(form.elements.cityName.value)
form.addEventListener("submit",e => {

    e.preventDefault();
    city = form.elements.cityName.value;
    fetchData(city);
});


// <div class="icon-block" style="background-image:url("${iconImg}")";"background-repeat":no-repeat;background-position:center;border:2px solid red;"></div> 