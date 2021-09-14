const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const spawn = require('child_process').spawn;

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req,res){
	res.send('Hello from server');
});

app.post('/prize', (req,res)=>{

console.log(req.body);
	
const Year = req.body['year'];
const PresentPrice = req.body['originalPrice'];
const Kms = req.body['kilometer'];
const Transmission = req.body['transmission'];
const Owner = req.body['owner'];
const Fuel = req.body['fuel'];
const Seller = req.body['seller'];

const process = spawn('python', ['./pythonFiles/app.py', Year, PresentPrice, Kms, Transmission, Owner, Fuel, Seller]);
process.stdout.setEncoding('utf8');
process.stdout.on('data', (data)=> {
	data = data.toString();
    res.send(data.toString());
    });

});


app.listen(PORT, function(){
	console.log('server is running on localhost: '+ PORT);
});