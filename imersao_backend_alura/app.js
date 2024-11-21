import express from "express";
import routes from "./src/routes/postroutes.js";
import conectarAoBanco from "./src/config/dbconfig.js";

const app = express();
conectarAoBanco()

app.listen(3000, () => {
    console.log("servidor on")
});

routes(app);

// http.cat

function buscarPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}


app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id)
    res.status(200).json(posts[index]);
});
