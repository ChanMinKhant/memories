const express = require('express');
const codeRoute = require('./router/codeRoute')
const app = express();

app.set('view engine', 'ejs');

app.use('/javascript' , codeRoute);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
