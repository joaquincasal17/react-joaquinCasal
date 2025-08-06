import { FaShoppingCart } from "react-icons/fa";
import "./cartWidget.css"
import { Link } from "react-router";


export const CartWidget = ({contador}) => {
  contador = 1  
  return (  
    <div className="iconCart">
      <Link to="/carrito" className="icon">
        <FaShoppingCart />
        <span className="burbujaCarrito">{contador}</span>
      </Link>
    </div>
  )
}


