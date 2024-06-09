import React from "react";
import "./styles.css";
import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import Loading from "../Loading";
import SearchBox from "../SearchBox";
import FilteredList from "../FilteredList";

interface ProductListProps {
  url: string;
}

const ProductList = ({ url }: ProductListProps): JSX.Element => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (text: string) => {
    setSearchText(text);
  };

  const { response, loading, error } = useAxios(url);

  return (
    <main>
      <SearchBox onSearchChange={handleSearchChange} />
      {loading ? (
        <Loading />
      ) : !error ? (
        <FilteredList products={response} searchText={searchText} />
      ) : (
        <h3>
          An error has occurred! <em>{error.message}</em>{" "}
        </h3>
      )}
    </main>
  );
};

export default ProductList;
