const fs = require('fs')

const P
fs.readFile('./users.json', function(error, data) {
    if (error) {
    throw error;
    }

    const usersJSon = JSON.parse(data);
    console.log(usersJSon)
});

