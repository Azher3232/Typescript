import React from "react";
import "./styles.css";

interface SearchBoxProps {
  onSearchChange: (text: string) => void;
}

const SearchBox = ({ onSearchChange }: SearchBoxProps): JSX.Element => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="container search-container">
      <input
        type="text"
        placeholder="Search by title"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBox;
