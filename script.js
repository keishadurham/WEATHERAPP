
let weather = {
  apikey: "45b2e73cf9baf1936878f26c75583725",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apikey
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    if (data.cod == "200") {
      getweather(data);
    }
    else if (data.cod == "400") {
      noinput(data);
    }
    else{
      citynotfound(data);
    }
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};
document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});
document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") weather.search();
  });
weather.fetchWeather("Atlanta");


function getweather(data){
  const { name } = data;
  const { description, icon } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
 console.log(name, icon, description, temp, humidity, speed);
  document.querySelector(".city").innerHTML = "Weather in " + name;
  document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
   document.querySelector(".temp").innerHTML = temp + "°C";
   document.querySelector(".description").innerHTML = description;
  document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
  document.querySelector(".wind").innerHTML = "Wind: " + speed + " km/hr";
  document.querySelector(".weather ").classList.remove("loading"); // Will remove weather loading if it's there and won't do anything if it's not
  // document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"; // Get photos from any city
  document.querySelector(".temp").style.position = "relative";
  document.querySelector(".temp ").style.visibility = "visible";
  document.querySelector(".humidity").style.position = "relative";
  document.querySelector(".humidity").style.visibility = "visible";
  document.querySelector(".wind").style.position = "relative";
  document.querySelector(".wind").style.visibility = "visible";
}








