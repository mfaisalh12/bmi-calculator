const express = require('express');
const bodyParser = require('body-parser');
const bmiRoutes = require('./routes/bmiRoutes');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;
const host = 'localhost';

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', bmiRoutes);

app.listen(port, host, () => {
	console.log(`Server running on http://${host}:${port}`);
});
