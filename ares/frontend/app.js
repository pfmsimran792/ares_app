// express app that serves html file

var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/',function(req, res) {
    res.sendfile(path.join(__dirname + '/public/index.html'));
});
app.listen(3000, function(){
    console.log('Ares listening on port 3000!';)
});