import React from "react";
import "./styles.css";
import { FaDollarSign, FaStar } from "react-icons/fa";

interface ProductProps {
  image: string;
  title: string;
  description: string;
  price: number;
  rating: number;
}

const Product = ({
  image,
  title,
  description,
  price,
  rating,
}: ProductProps): JSX.Element => {
  return (
    <section className="grid-container">
      <img src={image} className="product-image" />
      <h4 className="product-title">{title}</h4>
      <p className="product-description">{description}</p>
      <div className="flex-container">
        <FaDollarSign className="product-icon" />
        <p className="product-price">{price}</p>
      </div>
      <div className="flex-container">
        <FaStar className="product-icon" />
        <p className="product-rating">{rating}</p>
      </div>
    </section>
  );
};

export default Product;
