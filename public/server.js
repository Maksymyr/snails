let express = require('express');
let app = new express();



// app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/index.html');
})

app.listen(3030);