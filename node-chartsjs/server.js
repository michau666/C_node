const express = require('express');
const hbs = require('hbs');

let app = express();
 
app.set('view.engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/',(req, res) => {
    res.render('home.hbs', {
      pageTitle: 'About from HADES!',
      currentYear: new Date().getFullYear()
    });
});

app.listen(3000);