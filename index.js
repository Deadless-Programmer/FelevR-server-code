const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const allData =require('./data/allData.json');
app.use(cors());
app.get('/',(req, res)=>{
        res.send('site is running')
});

app.get('/allData', (req, res)=>{
    res.send(allData);
})

app.listen(port, ()=>{
    console.log(`site api is running on port${port}`)
})