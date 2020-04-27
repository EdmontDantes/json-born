const fs = require('fs')


fs.readFile('./tests.json', function(error, data) {
    if (error) {
    throw error;
    }

    const actualObj = JSON.parse(data);
    console.log(actualObj)
})