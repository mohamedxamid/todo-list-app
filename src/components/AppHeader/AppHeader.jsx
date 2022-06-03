import React from "react";
import { BsFillPencilFill } from "react-icons/bs";
import "./appHeader.css";

const AppHeader = ({ liked, posts, name, setModal }) => {
  return (
    <div>
      <div className="flex justify-between items-end flex-wrap">
        <div className="flex items-end">
          <h1 className="text-3xl text-zinc-900">{name}</h1>
          <BsFillPencilFill
            className="ml-2 cursor-pointer"
            onClick={() => setModal(true)}
          />
        </div>
        <h2>
          Posts: {posts}, Likes: {liked}
        </h2>
      </div>
    </div>
  );
};

export default AppHeader;
