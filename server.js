const express = require('express'),
	  app = express(),
	  bodyparser = require('body-parser'),
	  cors = require('cors');

app.use(bodyparser.json());

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 
};

var tasks = {
	"Faire ses devoirs": {
	"id" : 2,
	"title" : "test"
	}
};

app.use(cors(corsOptions));

app.get('/tasks', function(req,res,next) {
	res.json(tasks)
});

app.post('/tasks', function(req,res,next) {
	var task=req.body;
	console.log(task);
});

app.listen(8080,()=>{
	console.log('Serveur sur le port 8080');
});
