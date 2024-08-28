import React, { useState } from "react";
import axios from "axios";

const PostForm = ({ userId }) => {
  const [content, setContent] = useState("");

  const submitPost = () => {
    if (content.trim()) {
      axios
        .post("/api/posts", { content, user_id: userId })
        .then((response) => {
          setContent("");
          // Handle the newly created post, e.g., update the post list
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="post-form bg-white p-4 mb-4 shadow-md rounded-lg">
      <textarea
        className="w-full p-2 border rounded-lg"
        rows="3"
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button
        onClick={submitPost}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Post
      </button>
    </div>
  );
};

export default PostForm;
