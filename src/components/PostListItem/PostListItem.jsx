import React from "react";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { IoMdTrash } from "react-icons/io";

const PostListItem = ({
  label,
  important,
  liked,
  id,
  deletePost,
  onToggleLiked,
  onToggleImportant,
}) => {
  return (
    <li className="flex my-2 cursor-pointer">
      <span
        className={`w-full text-2xl ${important ? "text-zinc-300" : ""}`}
        onClick={() => onToggleLiked(id)}
      >
        {label}
      </span>
      <div className="flex items-center text-lg">
        <button
          type="button"
          className={`bg-slate-300 mr-2 p-1 rounded-sm ${
            important ? "text-slate-500" : "text-amber-400"
          }`}
          onClick={() => onToggleImportant(id)}
        >
          <AiFillStar />
        </button>
        <button
          type="button"
          className="bg-slate-300 mr-2 p-1 rounded-sm text-rose-600"
          onClick={() => deletePost(id)}
        >
          <IoMdTrash />
        </button>
        <AiFillHeart
          className={`text-red-700 transition ${
            liked ? "" : "translate-x-5 opacity-0"
          }`}
        />
      </div>
    </li>
  );
};

export default PostListItem;
