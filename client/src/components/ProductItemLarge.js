import { Grid, Typography, Button, Rating } from "@mui/material";
import { Link } from "react-router-dom";

function ProductItemLarge({ product }) {
  const lengthRating = product.ratings.length;
  var sumRating = 0;
  for (var i = 0; i < lengthRating; i++) {
    sumRating += product.ratings[i].rating;
  }
  const averageRating = sumRating / lengthRating;
  return (
    <Grid container columnSpacing={2} className="ProductItem">
      <Grid item className="ProductItem__grid-item" xs={12} md={8}>
        <div>
          <img src={product.imgUrl}></img>
        </div>
        <Typography>{product.description}</Typography>
        <div>
          {product.ratings &&
            product.ratings.map((rating) => (
              <div>
                <Rating
                  key={`ratingId_${rating.id}`}
                  value={rating.rating}
                  readOnly
                />
              </div>
            ))}
        </div>
      </Grid>
      <Grid item className="ProductItem__grid-item_price" xs={12} md={4}>
        <Typography>{product.title}</Typography>
        <Typography>{product.price}</Typography>
        <Button variant="contained" color="primary">
          Lägg till i kundvagn
        </Button>
        <Typography component="legend">Betyg</Typography>
        <Rating name="read-only" value={averageRating} readOnly />
        <Typography>leveransinfo</Typography>
        <Link to={`/products/${product.id}/edit`}>
          <Button variant="contained" color="primary">
            Ändra
          </Button>
        </Link>

        <Button variant="contained" color="primary">
          Ta Bort
        </Button>
        <Typography>Betygsätt produkten</Typography>
        <Rating name="no-value" value={null} />
      </Grid>
    </Grid>
  );
}

export default ProductItemLarge;
