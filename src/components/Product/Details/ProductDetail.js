import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import * as API from "../../../services/api";
import * as React from 'react';
import { Card, CardMedia, Container, Grid } from "@mui/material";
import ProductTechnicalFeaturesList from './ProductTechnicalFeaturesList';
import SubHeader from '../../commun/SubHeader';
import ProductDetailActions from './ProductDetailActions';
import SimpleBreadcrumb from '../../commun/SimpleBreadcrumb'

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const subHeadTitle = 'Details';

    useEffect(() => {
        API.getProductById(productId).then(setProduct).catch(console.log);
    }, [productId]);
    return (
        <>
            <SubHeader title={subHeadTitle}></SubHeader>
            <SimpleBreadcrumb />
            <Container>
                <Grid
                    container
                    spacing={3}
                    direction="row"
                    justify="center"
                    alignItems="stretch"
                >
                    <Grid item xs={6} style={{ alignSelf: 'center', padding: '0 24px 0 0' }}>
                        <Grid style={{ height: "100%" }}>
                            <Card sx={{ height: "100%" }} >
                                <CardMedia
                                    component="img"
                                    image={`${product.imagen}`}
                                    alt={`${product.model}`}
                                />
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} >
                                <ProductTechnicalFeaturesList {...product} />
                            </Grid>
                            <Grid item xs={12}>
                                <ProductDetailActions {...product} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default ProductDetail;






