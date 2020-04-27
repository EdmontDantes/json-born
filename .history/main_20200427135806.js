const fs = require('fs');


if (process.argv[2] === 'GET' && process.argv[3] === 'users') {
fs.readFile('./users.json', function(error, data) {
    if (error !== null) {
    throw error;
    }

    const usersJSon = JSON.parse(data);
    console.log(usersJSon);
});
}
console.log(typeof process.argv[4])
if (process.argv[2] === 'GET' && process.argv[3] === 'user' 
&& typeof process.argv[4] !) {
    fs.readFile('./users.json', function(error, data) {
        if (error !== null) {
            throw error;
        }

        const usersJSon = JSON.parse(data);
        console.log(usersJSon[process.argv[4]]);
    })
}

if (process.argv[2] === 'POST' && process.argv[3] === 'user' && typeof process.argv[4] === 'string'
&& typeof process.argv[5] === number && typeof process.argv[6] === 'string') {
    fs.writeFile('./users.json', function(error, data) {
        if (error !== null) {
            throw error;
        }


    })
}