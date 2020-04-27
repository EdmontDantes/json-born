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

if (process.argv[2] === 'POST' && process.argv[3] === 'user' && process.argv[4] !== undefined
&& process.argv[5] !== undefined && process.argv[6] !== undefined) {
    fs.readFile('./users.json', function(error, data) {
        if (error !== null) {
            throw error;
        }

        const userJsonRead = JSON.parse(data);
        // console.log(userJsonRead);
        
        const userJsonWriteObj = {
            index: userJsonRead[userJsonRead.length -1].index + 1,
            name: process.argv[4],
            age: process.argv[5],
            eyeColor: process.argv[6]
            
        };

        userJsonRead.push(userJsonWriteObj);
        console.log(userJsonRead);
        // const backToJson = JSON.stringify(userJsonReadForIndexNeeded);

        // fs.writeFile('./users.json', backToJson, function(error) {
        //     if (error !== null) {
        //         throw error;
        //     }
        // });


        // const userJsonCanIgetItBack = JSON.parse(data);

    });
}