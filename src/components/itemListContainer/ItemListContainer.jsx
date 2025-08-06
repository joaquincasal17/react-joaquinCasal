import { useEffect, useState } from "react"
import "../itemListContainer/itemListContainer.css"
import {products} from "../products"
import ProductCard from "../productCard/ProductCard"
import { useParams } from "react-router"

    export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { name } = useParams(); 


    useEffect(() => {
        const productosFiltrados = products.filter(
        (producto) => producto.category === name
        ); // []
        const getProducts = new Promise((resolve, ) => {
        resolve(name ? productosFiltrados : products);
        });

        getProducts.then((res) => setItems(res));
    }, [name]);

    return (
        <div className="containerCatalog"> 
            <div className="catalog">
                {items.map(product => (
                <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
        )
    }

export default ItemListContainer;