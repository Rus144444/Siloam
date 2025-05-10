import {
  initialState,
  onNewPostChange,
  addMessage,
  addPost,
  subscribe,
  onNewMessageChange,
} from "./redux/state-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        store={state}
        addMessage={addMessage}
        addPost={addPost}
        onNewPostChange={onNewPostChange}
        onNewMessageChange={onNewMessageChange}
      />
    </React.StrictMode>
  );
};

rerenderEntireTree(initialState);

subscribe(rerenderEntireTree);
