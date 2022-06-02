import React, { useState } from "react";

const PostAddForm = ({ addPost }) => {
  const [text, setText] = useState("");

  function handleClick(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      text && addPost(text);
      setText("");
    }
  }
  return (
    <form className="flex justify-between">
      <input
        type="text"
        placeholder="What are you thinking about?"
        className="w-full rounded px-2 focus:outline-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleClick}
      />
      <button
        type="submit"
        className="min-w-max px-2 py-1 ml-1 rounded border border-slate-400 hover:text-white hover:bg-rose-500 transition duration-300"
        onClick={(e) => {
          e.preventDefault();
          text && addPost(text);
          setText("");
        }}
      >
        Add Post
      </button>
    </form>
  );
};

export default PostAddForm;
