const express = require('express');
const app = express();
const port = 3000

app.use(express.static(__dirname + '/assets'));
// app.engine('html', require('ejs').renderFile);

// app.set('view engine', 'ejs');

app.get('/', function(req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Server works in ${port}`);
})