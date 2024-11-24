import express from "express";
import routes from "./src/routes/postroutes.js";

const app = express();

app.use(express.static("uploads"))

routes(app);

app.listen(3000, () => {
    console.log("servidor on")
});


// http.cat
