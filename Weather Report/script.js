

let searchBtn = document.getElementById("submit")
let searchArea = document.getElementById('city')



searchBtn.addEventListener('click',async ()=>{
    let city = searchArea.value;
    let url = `http://api.weatherapi.com/v1/current.json?key=e884e49500a94e69811163154241309&q=${city}";`
    

    try{
        let response = await fetch(url);
        if(!response.ok){
            throw new Error(`Http error! status: ${response.status}`);
        }
        let jsonData = await response.json();
        

        let detail = document.getElementById('details')
        let temp= document.getElementById('temp');
        let wind= document.getElementById('wind');

        detail.innerHTML = `<p>Name : ${jsonData['location']["name"]} <br> 
                                Region: ${jsonData['location']["region"]} <br>   
                                Country : ${jsonData['location']["country"]} 
                                ` 
        temp.innerHTML =   `<p>Celcius : ${jsonData['current']["temp_c"]} <br> 
                                Farenheit: ${jsonData['current']["temp_f"]} <br>   
                                Condition : ${jsonData['current']["condition"]["text"]} 
                                `                    
        wind.innerHTML =   `<p>Wind Speed(mph) : ${jsonData['current']["wind_mph"]} <br> 
                                Wind Speed(kph): ${jsonData['current']["wind_kph"]} <br>   
                                Wind Direction : ${jsonData['current']["wind_dir"]} 
                                `
    }catch(error){
        console.log(error);
    }

});