import { store } from "./redux/create-react-store";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const dispatch = store.dispatch;

export let rerenderEntireTree = (store) => {
  root.render(
    <React.StrictMode>
      <App store={store} dispatch={dispatch} />
    </React.StrictMode>
  );
};
rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
