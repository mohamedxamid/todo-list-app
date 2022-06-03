import React, { useState } from "react";
import "./postStatusFilter.css";

const PostStatusFilter = ({ filter, setFilter }) => {
  const [btns, setBtns] = useState([
    { name: "all", label: "All" },
    { name: "liked", label: "Liked" },
  ]);
  return (
    <div className="flex mt-4 sm:mt-0 w-full sm:w-auto">
      {btns.map(({ name, label }) => (
        <button
          key={name}
          className={`w-full sm:w-auto px-2 py-1 rounded ml-1 ${
            filter === name
              ? "text-white border border-rose-500 bg-rose-500"
              : "border border-slate-400 hover:text-white hover:bg-rose-500"
          }  transition duration-300`}
          onClick={() => setFilter(name)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default PostStatusFilter;
