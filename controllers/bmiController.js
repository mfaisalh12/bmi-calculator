const getIndex = (req, res) => {
	res.render('index');
};

const getForm = (req, res) => {
	let { height, weight } = req.body;

	let bmi = weight / Math.pow(height / 100, 2);
	let category;
	if (bmi < 17) {
		category = 'Gizi Buruk';
	}
	if (bmi >= 17 && bmi <= 18.4) {
		category = 'Kurus';
	}
	if (bmi >= 18.5 && bmi <= 25) {
		category = 'Normal';
	}
	if (bmi >= 25.1 && bmi <= 27) {
		category = 'Gemuk';
	}
	if (bmi > 27) {
		category = 'Obesitas';
	}

	res.send(`Berat anda ${category}`);
};

module.exports = { getIndex, getForm };
