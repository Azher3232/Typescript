import React from "react";
import "./styles.css";
import Product from "../ProductList/Product";

interface Product {
  image: string;
  title: string;
  description: string;
  price: number;
  rating: {
    rate: number;
  };
  id: number;
}

interface FilteredListProps {
  products: Product[];
  searchText: string;
}

const FilteredList = ({
  products,
  searchText,
}: FilteredListProps): JSX.Element => {
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <article className="products-container">
      {filteredProducts !== null
        ? filteredProducts.map((product) => {
            const { image, title, description, price, rating, id } = product;
            return (
              <Product
                image={image}
                title={title}
                description={description}
                price={price}
                rating={rating.rate}
                key={id}
              />
            );
          })
        : null}
    </article>
  );
};

export default FilteredList;
