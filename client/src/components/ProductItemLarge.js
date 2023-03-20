import { Grid, ListItem } from "@mui/material";

function ProductItemLarge({ product }) {
  return (
    <Grid container columnSpacing={2} className="ProductItem">
      <Grid item className="ProductItem__grid-item"></Grid>
      <Grid item className="ProductItem__grid-item_price"></Grid>
    </Grid>
  );
}

export default ProductItemLarge;
