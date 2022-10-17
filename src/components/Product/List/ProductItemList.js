import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const ProductItemList = (product) => {
    return (
        <Grid item xs={6} md={3} >
            <Link to={`products/${product.id}`} style={{ textDecoration: 'none' }}>
                <Card sx={{ maxWidth: 345 }} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="250"
                            image={`${product.imagen}`}
                            alt={`${product.model}`}
                            sx={{ padding: "1em 1em 0 0", objectFit: "contain" }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.model}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <span style={{ fontWeight: 'regular', m: 1 }}>{product.brand}</span>
                                <span style={{ fontWeight: 'bold', m: 1, float:'right'}}>${product.price}</span>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </Grid>
    );
};

export default ProductItemList;