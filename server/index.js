const express = require('express')      //first step
bodyParser = require('body-parser')
app = express()
port = 3030
var backend = []
//cors = require('cors')

app.use(bodyParser.json());


app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});


app.listen(port, () => console.log("hi!!"))

app.post('/api/hello', (req,res) => { backend.push(req.body)
    console.log(req.body)
})

