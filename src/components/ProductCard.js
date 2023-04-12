import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <Card className="card">
      <CardContent>
        <CardMedia component="img" image={product.image} alt={product.name} />
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="body1">${product.cost}</Typography>
        <Rating name="productRating" value={product.rating} readOnly />
        <CardActions>
          <Button style={{ width: "100%" }} variant="contained" role = "button" onClick={handleAddToCart}>
            ADD TO CART
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
