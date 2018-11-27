const express = require('express'),
	  app = express(),
	  bodyparser = require('body-parser'),
	  cors = require('cors');

app.use(bodyparser.json());

var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));

app.get('/api/cats',(req,res)=>{
	res.send({
		cats: [{name : 'lilly'},{name : 'Laska'}]
	});
});

app.get('/api/cats/:name',(req,res)=>{
	const requestedCatName = req.params['name'];
	res.send({ name : requestedCatName });
});

app.post('/api/cats',(req,res)=>{
	res.send(201, req.body);
});

app.put('/api/cats/:name',(req,res)=>{
	res.send(201, req.body);
});

app.delete('/api/cats/:name',(req,res)=>{
	res.sendStatus(204);
});

app.listen(8080,()=>{
	console.log('Serveur sur le port 8080');
});
