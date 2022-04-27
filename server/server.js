import express from "express";

const app = express();

app.get("/api/products", (req ,res) => {
    res.json( [
        {name: "hello"}
    ])
})

const server = app.listen(3000, () => {
    console.log("listening on http://localhost:" +server.address().port)
})