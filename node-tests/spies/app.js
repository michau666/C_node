let db = require('./db');

module.exports.handleSignup = (email, password) => {
    // Check if emailalready exists
    // Save the user to the db
    db.saveUser({email, password});
    // Send the wellcome email
};