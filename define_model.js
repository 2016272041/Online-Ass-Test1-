//intilization sequelize//
const Sequelize = require('sequelize');
//path configuration//
const path = 'mysql://root:root@localhost:3306/testdb';
//creating alias files function//
const sequelize = new Sequelize(path,{
    OperatorsAliases: false
});
let Dummy = sequelize.define('dummy', {
    description: Sequelize.STRING
});

Dummy.sync().then(() => {
    console.log('New table Created');
}).finaly(() => {
    sequelize.close();    
})