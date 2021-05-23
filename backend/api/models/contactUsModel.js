const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactUsSchema = new Schema({
	fullName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	message: {
		type: String,
		required: true
	},
	createdOn: {
		type: Date,
		default: Date.now
	}
});

const contactUs = mongoose.model('contactUsDetails', contactUsSchema);

module.exports = contactUs;
