const contactUsDetails = require('../models/contactUsModel');
const contactUsCSVWriter = require('./utilities');

exports.saveToFile = async (req, res) => {
	try {
		const records = await contactUsDetails.find({});
		if (records.length) {
			contactUsCSVWriter.writeRecords(records).then(() => {
				res.status(200).json({
					message: 'Data saved to a csv file successfully.'
				});
			});
		} else {
			res.status(404).json({ message: 'No records to save.' });
		}
	} catch (err) {
		console.error(`Error while saving data: `, err.message);
		res.status(500).json({ message: 'failed' });
	}
};
