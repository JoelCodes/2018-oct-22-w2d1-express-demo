const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let coolThing = 'Beyblades';
const previousCoolThings = [];

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (request, response) => {
  response.render('home_page', {
    coolThing: coolThing, 
    previousCoolThings: previousCoolThings
  });
});

app.post('/', (req, res) => {
  console.log(req.body);
  previousCoolThings.push(coolThing);
  coolThing = req.body.coolThing;
  res.redirect('/')
});

app.get('/:name', (request, response) => {
  console.log(request.params);
  const template_vars = { name: request.params.name };
  response.render('greeting_page', template_vars)
});

app.listen(1234, () => {
  console.log('Listening on 1234');
});
