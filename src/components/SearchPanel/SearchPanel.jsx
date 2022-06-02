import React, { useState } from "react";
import "./searchPanel.css";

const SearchPanel = ({ term, setTerm }) => {
  return (
    <input
      type="text"
      className="w-full rounded px-2 focus:outline-none"
      placeholder="Search by posts"
      value={term}
      onChange={(e) => setTerm(e.target.value)}
    />
  );
};

export default SearchPanel;
