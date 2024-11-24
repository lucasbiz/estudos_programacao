import fs from "fs";
import { getTodosPosts, criarPost, atualizarPost } from "../models/postsModel.js";
import { url } from "inspector";

import gerarDescricaoComGemini from "../services/geminiService.js";

export async function listarPosts(req, res) {
        const posts = await getTodosPosts();
        res.status(200).json(posts);
}

export async function postarNovoPost(req, res) {
        
        const novoPost = req.body; //Toda requisicao tem um corpo, que é o conteudo da requisição

        try {
                const postCriado = await criarPost(novoPost);
                res.status(200).json(postCriado);
        } catch (erro) {
                console.log(erro.message);
                res.status(500).json({"Erro" : "Falha na requisição"})
        }
};

export async function uploadImagem(req, res) {
        
        const novoPost = req.body; //Toda requisicao tem um corpo, que é o conteudo da requisição

        try {
                const postCriado = await criarPost(novoPost);
                const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
                fs.renameSync(req.file.path, imagemAtualizada);
                res.status(200).json(postCriado);
        } catch (erro) {
                console.log(erro.message);
                res.status(500).json({"Erro" : "Falha na requisição"})
        }
};

export async function atualizarNovoPost(req, res) {
        
        const id = req.params.id; //Toda requisicao tem um corpo, que é o conteudo da requisição
        const urlImagem = `http://localhost:3000/${id}.png`;

        try {

                
                const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
                const descricao = await gerarDescricaoComGemini(imgBuffer);

                const post = {
                        imgUrl: urlImagem,
                        descricao: descricao,
                        alt: req.body.alt
                };

                const postCriado = await atualizarPost(id, post);
                res.status(200).json(postCriado);
        } catch (erro) {
                console.log(erro.message);
                res.status(500).json({"Erro" : "Falha na requisição"})
        }
};
