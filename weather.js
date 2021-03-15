class Weather {
  constructor(city, state) {
    this.api_key = 'c9df22809a7931969a402ed54e8aaf87';
    this.city = city;
    this.state = state;
  }

  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&${this.state}&units=imperial&appid=${this.api_key}`);


    const response_data = await response.json();

    return response_data;
  }

  // change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}