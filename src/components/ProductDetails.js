import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ProductDetails = ({ product }) => {
  const { productName, price, rating, discount, availability } = product;

  return (
    <Card sx={{ maxWidth: 600, mb: 2 }}>
      <CardContent>
        <Typography variant="h4" component="div">
          {productName}
        </Typography>
        <Typography variant="body1">
          Price: ${price}
        </Typography>
        <Typography variant="body1">
          Rating: {rating}
        </Typography>
        <Typography variant="body1">
          Discount: {discount}%
        </Typography>
        <Typography variant="body1">
          Availability: {availability}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;
