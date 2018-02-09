const express = require('express')      //first step
bodyParser = require('body-parser')
app = express()
port = 3030
//cors = require('cors')

app.use(bodyParser.json());


app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});


app.listen(port, () => console.log("hi!!"))

