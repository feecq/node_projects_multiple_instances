const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5001; 

app.use(bodyParser.json());
app.use(cors());
var seconds = 5*60*1000;

app.post('/api/receiveData', (req, res) => {
    const receivedData = req.body;    
    console.log(receivedData);
    var sum = receivedData.firstNumber + receivedData.secondNumber;
    setTimeout(()=>{
        res.json({
            status: 'success',
            sum: sum
        })
    },seconds);
});

// app.timeout=seconds;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
