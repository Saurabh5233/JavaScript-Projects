let searchBtn = document.getElementById('search-btn');
let searchArea = document.getElementById('search');

searchBtn.addEventListener('click', async () => {
  let weatherDetails = document.getElementById("weather-details");
  weatherDetails.style = "display: flex"
  let city = searchArea.value;
  let url = `https://api.weatherapi.com/v1/current.json?key=e884e49500a94e69811163154241309&q=${city};`;

  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Http error! status: ${response.status}`);
    }
    let jsonData = await response.json();

    let weatherImage = document.getElementById('img');
    let condition = document.getElementById('condition');
    let temp = document.getElementById('temp');
    let wind = document.getElementById('wind');
    

    weatherImage.innerHTML = `<img
    src="images/${jsonData['current']['condition']['text']}.svg"
    alt="Weather Condition Icon"
    class="condition"
  />`;
    condition.innerHTML = `${jsonData['current']['humidity']}%`;
    temp.innerHTML = `${jsonData['current']['temp_c']}°C`;
    wind.innerHTML = `${jsonData['current']['wind_kph']}Kmph <br> ${jsonData["current"]["wind_dir"]}`;
  } catch (error) {
    console.log(error);
  }
});
