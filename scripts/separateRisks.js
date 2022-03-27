// In order to run this script add 'audit.json' into the root directory
// the file is too large exceeds 100mb and can't be stored in github by default
const jsonData = require('../audit')
const fs = require('fs');

const riskTypes = [];
const riskData = {
    typesWithCount: [],
    totalRecordsCount: jsonData.RECORDS.length,
};

// filter out content with risk levels that are not 0
const riskContent = jsonData.RECORDS.filter((record) => {
    if (record.risk) {
        // use riskTypes array as key for riskData count
        const index = riskTypes.indexOf(record.risk);
        // increment count if type has already been seen
        if (index !== -1) {
            riskData.typesWithCount[index].count += 1;
        } else {
            // add new type and set count to 1 for first sighting
            riskTypes.push(record.risk);
            riskData.typesWithCount.push({
                type: record.risk,
                count: 1,
            });
        }
    }

    return JSON.parse(record.risk_level) !== 0
});

riskData['riskRecordsCount'] = riskContent.length;
riskData['records'] = riskContent;

// create new json file for content with risk_levels
fs.writeFile('./src/data/risks.json', JSON.stringify(riskData), 'utf8', (err) => {
    if (err) return console.log(err);

    console.log('risks.json file saved');
});
