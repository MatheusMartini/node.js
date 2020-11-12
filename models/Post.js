const db = require('./db');

const Post = db.sequelize.define('postagens',{
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})
//executar uma vez após criar o model
//Post.sync({force: true})

module.exports = Post