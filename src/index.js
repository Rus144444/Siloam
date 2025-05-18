import { store } from "./redux/create-react-store";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerenderEntireTree = (store) => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};
rerenderEntireTree(store);

store.subscribe(() => {
  rerenderEntireTree(store);
});
