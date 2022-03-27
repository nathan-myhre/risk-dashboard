const jsonData = require('../src/data/audit')
const fs = require('fs');

// filter out content with risk levels that are not 0
const riskContent = jsonData.RECORDS.filter((record) => JSON.parse(record.risk_level) !== 0);

const output = {
    totalRecordsCount: jsonData.RECORDS.length,
    withRiskRecordsCount: riskContent.length,
    records: riskContent,
}

// create new json file for content with risk_levels
fs.writeFile('./src/data/withRisks.json', JSON.stringify(output), 'utf8', (err) => {
    if (err) return console.log(err);

    console.log('withRisks.json file saved');
});
