import { FaShoppingCart } from "react-icons/fa";
import "./cartWidget.css"

export const CartWidget = ({contador}) => {
  return (   
  <div className="icon"> 
    <a href=""><FaShoppingCart /></a>
    <span className="burbujaCarrito">{contador}</span>
  </div> 
  
  )
}


