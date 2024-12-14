const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    const lines = data.trim().split('\n');
    const headers = lines[0].split('|').map(header => header.trim());
    const records = lines.slice(1).map(line => {
        const values = line.split('|').map(value => value.trim());
        return headers.reduce((record, header, index) => {
            record[header] = values[index];
            return record;
        }, {});
    });

    console.log(records);
const csvHeaders = headers.join(',');
const csvRecords = records.map(record => headers.map(header => record[header]).join(',')).join('\n');
const csvContent = `${csvHeaders}\n${csvRecords}`;

const outputFilePath = path.join(__dirname, 'output.csv');
fs.writeFile(outputFilePath, csvContent, 'utf8', (err) => {
    if (err) {
        console.error('Error writing CSV file:', err);
        return;
    }
    console.log('CSV file has been saved.');
});
});