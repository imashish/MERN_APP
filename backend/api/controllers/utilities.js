const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const path = require('path');

const contactUsCSVWriter = createCsvWriter({
    path: path.join(__dirname, `../../Files/contactUsData.csv`),
    header: [
        { id: 'fullName', title: 'FULL Name' },
        { id: 'email', title: 'EMAIL' },
        { id: 'message', title: 'MESSAGE' }
    ]
});

module.exports = contactUsCSVWriter;