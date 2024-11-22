import express from "express";
import routes from "./src/routes/postroutes.js";

const app = express();

routes(app);

app.listen(3000, () => {
    console.log("servidor on")
});


// http.cat
