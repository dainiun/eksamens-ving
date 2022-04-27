import * as React from "react";
import * as ReactDOM from "react-dom";
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";


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

function FrontPage() {
    return <div>
        <h1>Database av et slag</h1>
        <ul>
            <li><Link to="/product/new">Nytt produkt</Link></li>
            <li><Link to="/products">Alle produkter</Link></li>
        </ul>
    </div>;
}

function ListProducts() {
    return <div>
        <h1> Liste over produkt </h1>
            {products.map(p =>
                <>
                    <h2>Product: {p.name}</h2>
                    <p>{p.manufacturer}</p>
                    <p>{p.name}</p>
                </>
            )}
    </div>;
}

function Application() {
        return <BrowserRouter>
        <Routes>
            <Route path="/" element={<FrontPage />}/>
            <Route path="/product/new" element={<h1> Nytt produkt </h1>}/>
            <Route path="/products" element={<ListProducts/>}/>
        </Routes>;
    </BrowserRouter>;
}



ReactDOM.render(
    <Application/>,
    document.getElementById("app")
);