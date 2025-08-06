import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { products } from "../products"
import "../detailProduct/detailProduct.css"
const DetailProduct = () => {
    const { id } = useParams()
    products

    const [product, setproduct]= useState({})
    useEffect(() =>{
        const detail = products.find((producto)=> producto.id === Number(id))
        setproduct(detail)

    }, [id])
  
    return (
    <div className="detailConteiner">
        <div className="detailCard">
            <div className="detailImage">
                <img src={product.imageUrl} alt={product.title} />
            </div>
            <div className="detailInfo">
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <div className="detailTalle">
                    {product.talle?.map((t, index) =>(
                        <button key={index}> {t} </button>
                    ))}
                </div>
                <button className="detailButton">Agregar al Carrito</button>
            </div>
        </div>
    </div>
  )
}

export default DetailProduct
