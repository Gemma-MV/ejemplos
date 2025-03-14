const express = require('express');
const app = express();
    
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
    
app.post('/', (req, res) => {
    console.log('First Name:', req.body.first_name, '\nLast Name: ', req.body.last_name, '\nEmail: ', req.body.email);
    res.send(req.body);
});
    
app.listen(3000);