const Sequelize = require('sequelize');

//conexão com o bd mysql
const sequelize = new Sequelize('post_app', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
})


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}