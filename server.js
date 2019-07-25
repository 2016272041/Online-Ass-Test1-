//connection establish to sequlize mysql functions //
const Connection = require('mysql').Connection;

const connection = new Connection({
    userName: 'root',
    password: 'Sqladmin_1',
    server: '127.0.0.1',
    options: {encrypt: true}
});

connection.on('connect', (err) => {
    if(err) {
        console.log('error connecting', err);
    }
    else {
        console.log('connection successful');
    }
});