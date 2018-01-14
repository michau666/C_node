const request = require('request');

let getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/189478b7f00ec33c6c0789a0f1f70da2/${lat},${lng}?units=si`,
        json: true
      }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature,
            });
        } else {
            console.log('Unable to get weather');
        }
    });
};

module.exports = {
    getWeather,
};