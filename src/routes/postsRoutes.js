import express from "express"
import multer from "multer";
import {listarPosts, postarNovoPost, uploadImagem} from "../controllers/postsControllers.js"



const upload = multer({ dest: "./uploads",})

const routes = (app) => {
    
    // Habilita o parser JSON para lidar com requisições JSON
    app.use(express.json());
    // Rota para obter todos os posts
    app.get("/posts", listarPosts);
    // Rota para criar um post
    app.post("/posts", postarNovoPost)
    app.post("/upload", upload.single("imagem"), uploadImagem)
}

export default routes;



