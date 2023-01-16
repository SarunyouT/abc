import React, { useEffect, useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onHandleClick = () => {
    console.log("Click");
  };

  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input onChange={onInputChange} value={searchTerm} />
      <button onClick={onHandleClick}>Submit</button>
    </div>
  );
};

export default Search;
