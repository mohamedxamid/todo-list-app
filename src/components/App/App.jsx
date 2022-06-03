import React, { useState } from "react";
import AppHeader from "../AppHeader";
import PostAddForm from "../PostAddForm";
import PostList from "../PostList";
import PostStatusFilter from "../PostStatusFilter";
import SearchPanel from "../SearchPanel";
import { v4 } from "uuid";

const App = () => {
  const [data, setData] = useState([
    {
      label: "Going to learn React JS",
      important: true,
      liked: false,
      id: "qw",
    },
    { label: "This is so good", important: false, liked: true, id: "qe" },
    { label: "I need a bike...", important: false, liked: false, id: "qr" },
  ]);
  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("Your Name");
  const [modal, setModal] = useState(false);

  function deletePost(id) {
    const index = data.findIndex((elem) => id === elem.id);

    const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
    setData(newArr);
  }

  function addPost(text) {
    const newArr = [
      ...data,
      { label: text, important: false, liked: false, id: v4() },
    ];
    setData(newArr);
  }

  function onToggleImportant(id) {
    const index = data.findIndex((elem) => id === elem.id);

    const oldItem = data[index];
    const newItem = { ...oldItem, important: !oldItem.important };
    const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    setData(newArr);
  }

  function onToggleLiked(id) {
    const index = data.findIndex((elem) => id === elem.id);

    const oldItem = data[index];
    const newItem = { ...oldItem, liked: !oldItem.liked };
    const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    setData(newArr);
  }

  function searchPost(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  function filterPost(items, filter) {
    if (filter === "liked") {
      return items.filter((item) => {
        return item.liked;
      });
    }

    return items;
  }

  function handleChangeUserName(e) {
    if (e.key === "Enter") {
      if (userName === "") {
        return;
      }
      setName(userName);
      setUserName("");
      setModal(false);
      return;
    }
  }

  function changeUserName() {
    if (userName === "") {
      return;
    }
    setName(userName);
    setUserName("");
    setModal(false);
  }

  const liked = data.filter((elem) => elem.liked).length;
  const posts = data.length;
  const visiblePosts = filterPost(searchPost(data, term), filter);

  return (
    <>
      <div className="bg-gradient-to-tr to-slate-600 from-slate-900 h-screen pt-20 px-2 sm:px-4">
        <div className="bg-slate-500 max-w-4xl mx-auto p-6 rounded">
          <AppHeader
            liked={liked}
            posts={posts}
            name={name}
            setModal={setModal}
          />
          <div className="flex justify-between flex-wrap sm:flex-nowrap my-4 text-xl">
            <SearchPanel term={term} setTerm={setTerm} />
            <PostStatusFilter filter={filter} setFilter={setFilter} />
          </div>
          <PostList
            posts={visiblePosts}
            deletePost={deletePost}
            onToggleImportant={onToggleImportant}
            onToggleLiked={onToggleLiked}
          />
          <PostAddForm addPost={addPost} />
        </div>
      </div>
      {modal && (
        <div
          className="fixed top-0 left-0 bg-black/30 h-screen w-screen flex justify-center items-center"
          id="modal"
          onClick={(e) => {
            if (e.target.id === "modal") {
              setModal(false);
            }
          }}
        >
          <div className="bg-slate-400 w-3/4 sm:w-2/4 p-5 rounded">
            <input
              type="text"
              className="w-full rounded px-2 py-1 border-2 border-slate-500"
              placeholder="Edit name..."
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              onKeyDown={handleChangeUserName}
            />
            <button
              className="px-3 py-1 float-right mt-2 bg-slate-500"
              onClick={changeUserName}
            >
              DONE
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
