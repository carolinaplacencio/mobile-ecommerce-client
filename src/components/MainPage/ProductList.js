  import {Product} from "../../api";
  import {useState, useEffect} from "react";
  import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";

  const product = new Product();

  const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
      (async () => {
        const response = await product.obtain();
        setProducts(response);
      })();
    },[]);
    return (
      <Box m={2} pt={3}>
        <Grid container spacing={2}>
            {products.map((product, index) => (  
                <Grid item xs={6} md={3} key={index}>
                    <Card sx={{ maxWidth: 345 }} >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="250"
                            image={`${product.imagen}`}
                            alt={`${product.model}` }
                            sx={{ padding: "1em 1em 0 0", objectFit: "contain" }}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {product.model}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {product.brand}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>            
                </Grid>
            ))}
        </Grid>
      </Box>
    );
  };
  
  export default ProductList;