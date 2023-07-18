const express = require('express');
const codeRoute = require('./router/codeRoute')
const app = express();

app.set('view engine', 'ejs');

app.use('/JavaScript' , codeRoute);

app.all('*',(req, res) => {
  res.send(`<h1>Something went wrong</h1><br />
<a href="/JavaScript/1">/JavaScript/1</a> <br />or <br />
<a href="/JavaScript/code/1">/JavaScript/code/1</a>`);
} )

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
