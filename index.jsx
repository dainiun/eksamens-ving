import * as React from "react";
import * as ReactDOM from "react-dom";
import {Routes, Route, Link, BrowserRouter, useNavigate} from "react-router-dom";
import {useState} from "react";


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

function ListProducts({products}) {
    return <div>
        <h1> Liste over produkt </h1>
            {products.map(p =>
                <div key={p.name}>
                    <h2>Product: {p.name}</h2>
                    <p>{p.manufacturer}</p>
                    <p>{p.name}</p>
                </div>
            )}
    </div>;
}

function NewMovie(onAddProduct) {
    const [name, setName] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [year, setYear] = useState("");

    const navigate = useNavigate();


    function handleSubmit(e) {
        e.preventDefault();
        onAddProduct({name, year, manufacturer});
        navigate("/");
    }

    return <form onSubmit={handleSubmit}>
        <h1> Nytt produkt </h1>;
        <div>
            <label>Name: <input value={name} onChange={e => setName(e.target.value)} /></label>
        </div>
        <div>
            <label>manufacturer: <input value={manufacturer} onChange={e => setManufacturer(e.target.value)} /></label>
        </div>
        <div>
            <label>year: <input value={year} onChange={e => setYear(e.target.value)} /></label>
        </div>
        <button>Submit</button>
    </form>;
}

function Application() {
        return <BrowserRouter>
        <Routes>
            <Route path="/" element={<FrontPage />}/>
            <Route path="/product/new" element={<NewMovie onAddProduct={p => products.push(p)}/>}/>
            <Route path="/products" element={<ListProducts products={products}/>}/>
        </Routes>;
    </BrowserRouter>;
}



ReactDOM.render(
    <Application/>,
    document.getElementById("app")
);