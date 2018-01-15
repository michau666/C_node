const express = require('express');
const hbs = require('hbs');

let app = express();
 
app.set('view.engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/',(req, res) => {
//   res.send('<h1>hello, express<h1>');
  res.send({
    names: 'Mike',
    likes: [
      'biking',
      'skiing'
    ]
  });
});

app.get('/about',(req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About from HADES!',
    currentYear: new Date().getFullYear()
  });
});

app.get('/home',(req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home page',
    welcomeMessage: 'Welcome you my friend!',
    currentYear: new Date().getFullYear()
  });
});

app.get('/bad',(req, res) => {
  res.send({
    errorMessage: 'Something went wrong...'
  });
});

app.listen(3000);