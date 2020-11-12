const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');
const urlencodedParser = bodyParser.urlencoded({extended: false});

//template engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//bodyparser
app.set(bodyParser.urlencoded( {extended: false} ));
app.use(bodyParser.json());

//rota cadastro
app.get("/cadastro", function(req,res){
    res.render('formulario')
})

// rota home com os posts
app.get("/", function(req,res){
    Post.findAll().then(function(post){
        res.render('home',{posts: post})
    }); 
})

//rota add chamando o sequelize
app.post("/add",urlencodedParser, function(req, res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect("/")
    }).catch(function(erro){
        res.send("Ocorreu um erro "+ erro)
    });
})

//rota delete
app.get("/deletar/:id", function(req,res){
    Post.destroy({where:{'id': req.params.id}}).then(function(){
        res.send("Postagem deletada com sucesso")
    }).catch(function(erro){
        res.send("Essa postagem nao existe")
    })
})

// server rodando na porta 8081
app.listen(8081);
