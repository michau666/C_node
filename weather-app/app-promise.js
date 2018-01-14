const yargs = require('yargs');
const axios = require('axios');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weatcher for',
      string: true,
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

let address = encodeURIComponent(argv.address);
let geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address.')
    }
    
    let lat = response.data.results[0].geometry.location.lat;
    let lng = response.data.results[0].geometry.location.lng;
    let weatherUrl = `https://api.darksky.net/forecast/189478b7f00ec33c6c0789a0f1f70da2/${lat},${lng}?units=si`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response) => {
    let temperature = response.data.currently.temperature;
    let apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It is currently ${temperature}. It fels like ${apparentTemperature}`);
}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect.');
    } else {
        console.log(e.message);
    }
});
