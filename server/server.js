import express from "express";
import path from "path";


const app = express();

const products = [
    {
        name: "Star Destroyer",
        manufacturer: "Innova",
        year: "2016",
    },
    {
        name: "Anax",
        manufacturer: "Discraft",
        year: "2018",
    }
];

app.get("/api/products", (req ,res) => {
    res.json( products)
});

app.use(express.static(path.resolve("../dist")));

const server = app.listen(3000, () => {
    console.log("listening on http://localhost:" +server.address().port)
});