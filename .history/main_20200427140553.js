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
&& process.argv[4] !== undefined) {
    fs.readFile('./users.json', function(error, data) {
        if (error !== null) {
            throw error;
        }

        const usersJSon = JSON.parse(data);
        console.log(usersJSon[process.argv[4]]);
    })
}

if (process.argv[2] === 'GET' && process.argv[3] === 'friends' 
&& process.argv[4] !== undefined) {
    fs.readFile('./users.json', function(error, data) {
        if (error !== null) {
            throw error;
        }

        const usersJSon = JSON.parse(data);
        console.log(usersJSon[process.argv[4]].friends)


    });
}

if (process.argv[2] === 'POST' && process.argv[4] === 'user' && process.argv[5] !== undefined
&& process.argv[6] !== undefined && process.argv[7] !== undefined) {
    fs.writeFile
}