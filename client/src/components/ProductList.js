import { Grid, ListItem } from "@mui/material";
import { getAll } from "../models/ProductModel";
import { useEffect, useState } from "react";
import ProductItemSmall from "./ProductItemSmall";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll().then((products) => setProducts(products));
  }, []);

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 5 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      className="Home"
    >
      {products &&
        products.map((products) => (
          <Grid key={`productId_${products.id}`} item xs={6} sm={3} md={3}>
            {console.log(products)}
            <ProductItemSmall products={products} />
          </Grid>
        ))}
    </Grid>
  );
}
// VIDEO 5 DEL 2
export default ProductList;
