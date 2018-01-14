const request = require('request');

let geocodeAddress = (address, callback) => {
    request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
        json: true
      }, (error, resonse, body) => {
        if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address.');
        } else {
            callback('Unable to connect to google.');
        }
    });
};


module.exports = {
    geocodeAddress,
};
