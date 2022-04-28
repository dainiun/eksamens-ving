import express from "express";
import path from "path";
import * as bodyParser from "express";

const app = express();

const products = [
    {
        name: "Star Destroyeeeeer",
        manufacturer: "Innova",
        year: "2016",
    },
    {
        name: "Anax",
        manufacturer: "Discraft",
        year: "2018",
    }
];


app.use(bodyParser.json());

app.get("/api/products", (req ,res) => {
    res.json(products)
});

app.post ("/api/products", (req, res) => {
    const {name, manufacturer, year} = req.body;
    products.push({name, manufacturer, year});
    res.sendStatus(200);
})

app.use(express.static(path.resolve("..", "client", "dist")));

app.use((req,res) =>{
    res.sendFile(path.resolve("..", "client", "dist", "index.html"));
});

const server = app.listen(3000, () => {
    console.log("listening on http://localhost:" +server.address().port)
});