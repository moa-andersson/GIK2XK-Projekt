import { Grid, ListItem } from "@mui/material";
import "./ProductItemSmall.css";
function ProductItemSmall({ products }) {
  return (
    <div>
      <img src={products.imgUrl} className="Product__item-small"></img>
      <div>{products.title}</div>
      <div>{products.price}</div>
    </div>
  );
}

export default ProductItemSmall;
