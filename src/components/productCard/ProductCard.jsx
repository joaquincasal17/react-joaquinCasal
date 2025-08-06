import { Link } from "react-router";
import "../productCard/ProductCard.css"

export const ProductCard = ({ title, imageUrl, price, id }) => {
  return (
  <div >
    <Link to={`/detail/${id}`} className="linkCard">
      <div className="conteinerProduct">
        <img src={imageUrl} alt=""  className="productImage"/>
        <h2>{title}</h2>
        <h2 className="price">{price}</h2>
      </div>
    </Link>
  </div>
  );
};
export default ProductCard
