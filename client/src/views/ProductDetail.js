import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductItemLarge from "../components/ProductItemLarge";
import { getOne } from "../models/ProductModel";

function ProductDetail() {
  var { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getOne(id).then((product) => setProduct(product));
  }, []);

  // const product = {
  //   id: 7,
  //   title: "moamoamoa",
  //   description: "testar att uppdatera ",
  //   price: 200,
  //   imgUrl:
  //     "https://media.naturkompaniet.se/detail/5637518438_a_oevik_knit_sweater_m_fjaellraeven_110.jpg",
  //   createdAt: "2023-03-16T13:15:12.000Z",
  //   updatedAt: "2023-03-17T09:30:57.000Z",
  //   ratings: [
  //     {
  //       id: 21,
  //       rating: 1,
  //       createdAt: "2023-03-16T13:16:14.000Z",
  //       updatedAt: "2023-03-16T13:16:14.000Z",
  //       productId: 7,
  //     },
  //     {
  //       id: 22,
  //       rating: 1,
  //       createdAt: "2023-03-16T13:42:06.000Z",
  //       updatedAt: "2023-03-16T13:42:06.000Z",
  //       productId: 7,
  //     },
  //     {
  //       id: 23,
  //       rating: 3,
  //       createdAt: "2023-03-16T13:45:44.000Z",
  //       updatedAt: "2023-03-16T13:45:44.000Z",
  //       productId: 7,
  //     },
  //     {
  //       id: 24,
  //       rating: 3,
  //       createdAt: "2023-03-16T13:46:46.000Z",
  //       updatedAt: "2023-03-16T13:46:46.000Z",
  //       productId: 7,
  //     },
  //   ],
  // };

  const params = useParams();
  console.log(params);
  return (
    <>
      <ProductItemLarge product={product} />
    </>
  );
}

export default ProductDetail;
