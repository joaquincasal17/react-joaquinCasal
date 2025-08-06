import { CartWidget } from "../cartWidget/CartWidget";
import "./nav.css";
import { Link } from "react-router";

export const Nav = ({contador}) => {
  return (
    <header className="header">
      <div className="nav">   
        <div className="logo">
          <Link to="/" className="link">
            <img src="https://res.cloudinary.com/dbkjgebgv/image/upload/v1754366000/raw_wzrpvc.png" alt="" />
          </Link>
        </div>
        <ul className="navLinks">
          <Link to="/category/remeras">Remeras</Link>
          <Link to="/category/pantalon">Pantalon</Link>
          <Link to="/category/zapatillas">Zapatillas</Link>
        </ul>
        <CartWidget 
        contador={contador}/>
      </div> 
    </header>
  )
}
