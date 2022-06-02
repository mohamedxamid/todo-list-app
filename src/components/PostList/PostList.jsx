import React from "react";
import PostListItem from "../PostListItem/PostListItem";

const PostList = ({ posts, deletePost, onToggleImportant, onToggleLiked }) => {
  return (
    <ul className="my-10 max-h-96 snap-x snap-mandatory overflow-y-auto overflow-x-hidden scrollbar">
      {posts.map((post) => {
        return (
          <PostListItem
            key={post.id}
            {...post}
            deletePost={deletePost}
            onToggleImportant={onToggleImportant}
            onToggleLiked={onToggleLiked}
          />
        );
      })}
    </ul>
  );
};

export default PostList;
