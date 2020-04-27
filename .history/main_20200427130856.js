const fs = require('fs')

const GET = process.argv[2]
const users =
fs.readFile('./users.json', function(error, data) {
    if (error) {
    throw error;
    }

    const usersJSon = JSON.parse(data);
    console.log(usersJSon)
});

