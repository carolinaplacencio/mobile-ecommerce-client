import { useState, useEffect } from "react";
import * as API from "../../../services/api";
import ProductItemList from "./ProductItemList";
import { Box, Grid } from "@mui/material";
import SubHeader from "../../commun/SubHeader";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const subHeadTitle = 'Products';

  useEffect(() => {
    API.getAllProducts().then(setProducts).catch(console.log);
  }, []);

  return (
    <>
      <SubHeader title={subHeadTitle}></SubHeader>
      <Box m={2} pt={3}>
        <Grid container spacing={2}>
          {products.map((product, index) => (
            <ProductItemList key={index} {...product} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ProductList;