const fs = require('fs')

exports.getRender = (req, res)=>{
  res.render(`${req.params.id}`);
}

exports.getCode = (req, res) => {
  fs.readFile(`./views/${req.params.id}.ejs`, 'utf8', (err, data) => {
    if (err) {
      res.send('something went wrong');
      return;
    }
    res.set('Content-Type', 'text/plain')
      res.send(data);
  });
}
