const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const app = express()
const port = 5000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/../../public/index.html')))

app.get('/dupa', function (req, res) {
    console.log('chuj')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})