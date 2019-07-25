/** 
 * database connection using sequelize 
 * intilize the sequelize function 
 * sequlize configuration for localhost
*/
const Sequelize = require('Sequelize');

// model require for sequlize table operations//
const Model = Sequlize.Model;

// passing parameters //

const Sequelize = new Sequelize('test', 'root', 'Sqladmin_1', {
    host: 'localhost',
    dialect: mysql
});

//option 2: passing a connection URI
const Sequelize = new Sequelize('mysql://user:root/test');

//sqlite settings//
const Sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'path/to/databse.sqlite'
})

//pool threading connection //
const Sequelize = new Sequelize(/*....*/{
    //pool declaration//
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

// Test the connection //
Sequelize.authenticate()
            .then(() => {
                console.log('Connection has been Sucessfully Established');
            })
            .catch(err => {
                console.error('unable to connect server: ', err);
            });

// Modeling a table //

class user extends Model { }
user.init({
    firstName: {
        type:Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
    }, 
    user: {
        Sequelize,
        ModelName: 'user'
    }
});

//changing the default model options //

const Sequelize = new Sequelize(ConnectionURI,
    {
        define: {
            //declare the timestamp function//
            timestamp: false

        }
    });
    
// extends the model //

class Foo extends Model{ }
    Bar.init({/*.....*/}, {
        Sequelize,
        timestamp: true
    });