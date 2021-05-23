const contactUsDetails = require('../models/contactUsModel');

exports.addContactInfo = (req, res) => {
	const contactUsData = new contactUsDetails({
		fullName: req.body.fullName,
		email: req.body.email,
		message: req.body.message
	});
	contactUsData
		.save()
		.then((data) => {
			res.status(200).json({ message: 'success' });
		})
		.catch((error) => {
			console.error(error);
			res.status(500).json(error);
		});
};
