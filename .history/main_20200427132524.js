const fs = require('fs')

const GET = process.argv[2]
const users = process.argv[3]
if (process.argv[2] === 'GET')
fs.readFile('./users.json', function(error, data) {
    if (error) {
    throw error;
    }

    const usersJSon = JSON.parse(data);
    console.log(usersJSon)
});

