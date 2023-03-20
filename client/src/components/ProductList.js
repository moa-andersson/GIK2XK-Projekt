import { Grid, ListItem } from "@mui/material";
import { getAll } from "../models/ProductModel";
import { useEffect, useState } from "react";
import ProductItemSmall from "./ProductItemSmall";

function ProductList() {
  const products = [
    {
      id: 7,
      title: "moamoamoa",
      description: "testar att uppdatera ",
      price: 200,
      imgUrl: null,
      createdAt: "2023-03-16T13:15:12.000Z",
      updatedAt: "2023-03-17T09:30:57.000Z",
      ratings: [
        {
          id: 21,
          rating: 1,
          createdAt: "2023-03-16T13:16:14.000Z",
          updatedAt: "2023-03-16T13:16:14.000Z",
          productId: 7,
        },
        {
          id: 22,
          rating: 1,
          createdAt: "2023-03-16T13:42:06.000Z",
          updatedAt: "2023-03-16T13:42:06.000Z",
          productId: 7,
        },
        {
          id: 23,
          rating: 3,
          createdAt: "2023-03-16T13:45:44.000Z",
          updatedAt: "2023-03-16T13:45:44.000Z",
          productId: 7,
        },
        {
          id: 24,
          rating: 3,
          createdAt: "2023-03-16T13:46:46.000Z",
          updatedAt: "2023-03-16T13:46:46.000Z",
          productId: 7,
        },
      ],
    },
    {
      id: 8,
      title: "Stickad classisk tröja",
      description:
        "Stickad tröja i marinoull, perfekt för att hålla värmen i kylan. Marinoull är ett av de finaste ullen och du kan förvänta dig riktigt bra kvalite",
      price: 250,
      imgUrl:
        "https://media.naturkompaniet.se/detail/5637518438_a_oevik_knit_sweater_m_fjaellraeven_110.jpg",
      createdAt: "2023-03-17T12:22:50.000Z",
      updatedAt: "2023-03-17T12:22:50.000Z",
      ratings: [],
    },
    {
      id: 9,
      title: "Termos, 1L",
      description:
        "Håll drycken varm eller kall med denna fantastiska termos. \nFärg: Grå\nMaterial: Stål ",
      price: 100,
      imgUrl:
        "https://www.jula.se/globalassets/catalog/productimages/007666b.jpg?width=458&height=458&scale=both&bgcolor=white",
      createdAt: "2023-03-17T12:24:38.000Z",
      updatedAt: "2023-03-17T12:24:38.000Z",
      ratings: [],
    },
    {
      id: 10,
      title: "Vandringsstav",
      description:
        "Vandringsstaven fungerar nästan som ett extra set ben, förstått på så vis att belastningen på dina knän minskas på upp till 20% – speciellt nedför -, när du använder vandringsstavarna. På väg uppför kan du också komplettera med krafterna i armar och överkropp, så inte allt går ut över benen. ",
      price: 300,
      imgUrl:
        "https://static.eventyrsport.se/media/catalog/product/cache/8aded63ab778ca51bb61a3fc9e4a1186/5/6/56c487edac8c7COMPACT-LIGHT.jpg",
      createdAt: "2023-03-17T12:26:42.000Z",
      updatedAt: "2023-03-17T12:26:42.000Z",
      ratings: [],
    },
    {
      id: 7,
      title: "moamoamoa",
      description: "testar att uppdatera ",
      price: 200,
      imgUrl: null,
      createdAt: "2023-03-16T13:15:12.000Z",
      updatedAt: "2023-03-17T09:30:57.000Z",
      ratings: [
        {
          id: 21,
          rating: 1,
          createdAt: "2023-03-16T13:16:14.000Z",
          updatedAt: "2023-03-16T13:16:14.000Z",
          productId: 7,
        },
        {
          id: 22,
          rating: 1,
          createdAt: "2023-03-16T13:42:06.000Z",
          updatedAt: "2023-03-16T13:42:06.000Z",
          productId: 7,
        },
        {
          id: 23,
          rating: 3,
          createdAt: "2023-03-16T13:45:44.000Z",
          updatedAt: "2023-03-16T13:45:44.000Z",
          productId: 7,
        },
        {
          id: 24,
          rating: 3,
          createdAt: "2023-03-16T13:46:46.000Z",
          updatedAt: "2023-03-16T13:46:46.000Z",
          productId: 7,
        },
      ],
    },
    {
      id: 8,
      title: "Stickad classisk tröja",
      description:
        "Stickad tröja i marinoull, perfekt för att hålla värmen i kylan. Marinoull är ett av de finaste ullen och du kan förvänta dig riktigt bra kvalite",
      price: 250,
      imgUrl:
        "https://media.naturkompaniet.se/detail/5637518438_a_oevik_knit_sweater_m_fjaellraeven_110.jpg",
      createdAt: "2023-03-17T12:22:50.000Z",
      updatedAt: "2023-03-17T12:22:50.000Z",
      ratings: [],
    },
    {
      id: 9,
      title: "Termos, 1L",
      description:
        "Håll drycken varm eller kall med denna fantastiska termos. \nFärg: Grå\nMaterial: Stål ",
      price: 100,
      imgUrl:
        "https://www.jula.se/globalassets/catalog/productimages/007666b.jpg?width=458&height=458&scale=both&bgcolor=white",
      createdAt: "2023-03-17T12:24:38.000Z",
      updatedAt: "2023-03-17T12:24:38.000Z",
      ratings: [],
    },
    {
      id: 10,
      title: "Vandringsstav",
      description:
        "Vandringsstaven fungerar nästan som ett extra set ben, förstått på så vis att belastningen på dina knän minskas på upp till 20% – speciellt nedför -, när du använder vandringsstavarna. På väg uppför kan du också komplettera med krafterna i armar och överkropp, så inte allt går ut över benen. ",
      price: 300,
      imgUrl:
        "https://static.eventyrsport.se/media/catalog/product/cache/8aded63ab778ca51bb61a3fc9e4a1186/5/6/56c487edac8c7COMPACT-LIGHT.jpg",
      createdAt: "2023-03-17T12:26:42.000Z",
      updatedAt: "2023-03-17T12:26:42.000Z",
      ratings: [],
    },
  ];

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
            <ProductItemSmall products={products} />
          </Grid>
        ))}
    </Grid>
  );
}
// VIDEO 5 DEL 2
export default ProductList;
