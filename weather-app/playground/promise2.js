const request = require('request');
const axios = require('axios');

let geocodeAddress = (address) => {
    return new Promise ((resolve, reject) => {
        request({
            url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
            json: true
          }, (error, resonse, body) => {
            if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find that address.');
            } else {
                reject('Unable to connect to google.');
            }
        });
    }
)};

geocodeAddress('000000').then(
    (location) => {
        console.log(JSON.stringify(location, undefined, 2));
    }, (errorMessage) => {
        console.log(errorMessage);
    }
)