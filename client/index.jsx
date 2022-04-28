import * as React from "react";
import * as ReactDOM from "react-dom";
import {Routes, Route, Link, BrowserRouter, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";


function FrontPage() {
    return <div>
        <h1>Database av et slag</h1>
        <ul>
            <li><Link to="/product/new">Nytt produkt</Link></li>
            <li><Link to="/products">Alle produkter</Link></li>
        </ul>
    </div>;
}

function ListProducts({productsApi}) {
    const [products, setProducts] = useState();
    useEffect(async () => {
        setProducts( undefined);
        setProducts(await productsApi.listProducts());
    }, []);


    if (!products){
        return <div>Laster...</div>
    }

    return <div>
        <h1> Alle produkter </h1>
            {products.map(p =>
                <div key={p.name}>
                    <h2>Product: {p.name}</h2>
                    <p>{p.manufacturer}</p>
                    <p>{p.name}</p>
                </div>
            )}
    </div>;
}

function NewMovie({productsApi}) {
    const [name, setName] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [year, setYear] = useState("");

    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();
        await productsApi.onAddProduct({name, year, manufacturer});
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
        const productsApi = {
            onAddProduct: async (p) => products.push(p),
            listProducts: async () => {
                const res = await fetch("/api/products");
                return res.json();
            }

        }

        return <BrowserRouter>
        <Routes>
            <Route path="/" element={<FrontPage />}/>
            <Route path="/product/new" element={<NewMovie productsApi={productsApi}/>}/>
            <Route path="/products" element={<ListProducts productsApi={productsApi}/>}/>
        </Routes>
    </BrowserRouter>;
}



ReactDOM.render(
    <Application/>,
    document.getElementById("app")
);