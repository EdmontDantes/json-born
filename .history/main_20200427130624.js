const fs = require('fs')


fs.readFile('./users.json', function(error, data) {
    if (error) {
    throw error;
    }

    const users = JSON.parse(data);
    console.log(actualObj)
})