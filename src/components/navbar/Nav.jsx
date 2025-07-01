import { CartWidget } from "../cartWidget/CartWidget";
import "./nav.css";

export const Nav = ({contador}) => {
  return (
    <header className="header">
    <div className="logo">
        <p>Logo</p>
    </div>
    <ul className="navLinks">
        <li><a href="">Auriculares</a></li>
        <li><a href="">Mouse</a></li>
        <li><a href="">Teclados</a></li>
    </ul>
    <CartWidget 
    contador={contador}/>
    </header>
  )
}
