import React, { useContext, useState } from "react";
import "./css/Feeds.css";
import { MyContext } from "../MyContext";
import Modal from "./Modal";

function Feeds() {
  const { state, setState } = useContext(MyContext);
  const [newPost, setNewPost] = useState("");
  let feedData = state.feeds;
  const handlePostChange = (event) => {
    setNewPost(event.target.value);
  };
  const addNewPost = () => {
    if (newPost.trim() === "") return;

    const newFeed = {
      id: Date.now().toString(),
      username: "Jane Doe",
      avatar: "https://via.placeholder.com/40",
      time: "Just now",
      content: newPost,
      comments: 0,
    };

    setState({ ...state, feeds: [...state.feeds, newFeed] });
    setNewPost("");
  };
  return (
    <div className="feed-container">
      <div className="header">
        <h1>Hello, Jane</h1>
        <p>
          How are you doing today? Would you like to share something with the
          community{" "}
          <span role="img" aria-label="thinking">
            🤔
          </span>
        </p>
      </div>

      <div className="create-post">
        <div className="input-container">
          <span role="img" aria-label="post-icon">
            💬
          </span>
          <input
            type="text"
            placeholder="How are you feeling today?"
            onChange={handlePostChange}
          />
        </div>
        <button
          className="post-button"
          onClick={() => {
            setState({ ...state, modalType: "signup" });
          }}
        >
          Post
        </button>
      </div>

      {feedData.map((feed) => (
        <div key={feed.id} className="post">
          <div className="post-header">
            <img src={feed.avatar} alt="user" className="user-avatar" />
            <div>
              <h3>{feed.username}</h3>
              <span>{feed.time}</span>
            </div>
            <div className="more-options">...</div>
          </div>
          <div className="post-content">
            <p>{feed.content}</p>
            <div className="post-actions">
              <span role="img" aria-label="comment-icon">
                💬
              </span>{" "}
              {feed.comments} comments
            </div>
          </div>
        </div>
      ))}
      {state.modalType && <Modal />}
    </div>
  );
}

export default Feeds;
