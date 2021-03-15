class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.humidity = document.getElementById('w-humidity');
    this.max_min = document.getElementById('w-max-min');
    this.temp = document.getElementById('w-temp');
    this.feels_like = document.getElementById('w-feels-like');
  }

  paint(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    // this.location.textContent = `${weather.name}`;
    this.desc.textContent = weather.weather[0].description;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.max_min.textContent = `Min: ${weather.main.temp_min} Max: ${weather.main.temp_max}`;
    this.temp.textContent = `Temperature: ${weather.main.temp} deg`;
    this.feels_like.textContent = `Feels Like: ${weather.main.feels_like} deg`;
  }
}