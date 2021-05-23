const express = require('express');
const addInfoRoutes = require('./api/routes/addInfoRoutes');
const filesRoutes = require('./api/routes/filesRoutes');

const app = express();
app.use(express.json());

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.use('/api/v1/addInfo', addInfoRoutes);
app.use('/api/v1/filesData', filesRoutes);

app.get('*', (req, res) => {
	res.json({ message: 'API is up...' });
});

app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	console.error(err.message, err.stack);
	res.status(statusCode).json({ message: err.message });
	return;
});

module.exports = app;
