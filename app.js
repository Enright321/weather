const storage = new Storage();
// get stored location data
const weather_location = storage.getLocationData();

const weather = new Weather(weather_location.city, weather_location.state);
const ui = new UI();


// Get Weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// change location event
document.getElementById('w-change-btn').addEventListener('click', e => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // Change Location
  weather.changeLocation(city, state);

  // Set location in local storage
  storage.setLocationData(city, state)

  // Get and display weather
  getWeather();

  // Close modal (jquery)
  $('#locModal').modal('hide');
})

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
      console.log(results);
    })
    .catch(err => console.log(err));
}