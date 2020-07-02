const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require("./data");
const dataCourses = require("./data-courses");

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
});

server.get('/', (req, res)=>{
    const data = {
        avatar_url: "https://avatars3.githubusercontent.com/u/61126457?s=460&u=cb23db5736df99b94bb7813c0dce1a819c611654&v=4",
        name: "Eric Lopes",
        role: "Desenvolvedor Web em Treinamento",
        description: "Buscando conhecimento nas tecnologias para desenvolvimento web, tanto Front quanto Back-End.",
        links: [
            {name: "Github", url:"https://github.com/EricEOL"},
            {name: "Linkedin", url:"https://www.linkedin.com/in/eric-oliveira-lopes/"},
        ]
    }

    return res.render('index', {about: data});
});

server.get('/sobre', (req, res)=>{
    return res.render('sobre');
});

server.get('/portifolio', (req, res)=>{
    return res.render('portifolio',{ items: videos});
});

server.get('/video', (req, res)=>{
    const id = req.query.id;
    
    const video = videos.find(video=>{
        return video.id == id;
    });

    if(!video) {
        return res.send("Esse vídeo não foi encontrado.");
    }
       
    return res.render('video', { item: video });
});

server.get('/conteudos', (req, res)=>{
    return res.render('conteudos', {courses : dataCourses});
});

server.get('/conteudos/:id', (req, res)=>{
    const id = req.params.id;

    const course = dataCourses.find(course=>{
        return course.name == id;
    });

    if(!course){
        return res.send("Esse curso não existe!");
    }

    return res.render('course', {course});
});

server.use(function(req, res) {
    res.status(404).render("not-found");
});

server.listen(5000, ()=>{
    console.log('Server is running...');
})