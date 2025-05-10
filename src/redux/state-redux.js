// import { createStore } from "redux";

let rerenderEntireTree = () => {
  console.log("State was changed");
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export let initialState = {
  profile: {
    posts: [
      { post: "Get good at JavaScript", id: 1 },
      { post: "Discover Redux", id: 2 },
      { post: "Build amazing apps", id: 3 },
    ],
    newPost: "",
  },
  dialogs: {
    messages: [
      { message: "Hello, hello", id: 1 },
      { message: "Hello, wo wo wo ", id: 2 },
    ],
    newMessage: "",
  },
};

export const addMessage = (newMessages) => {
  const newMessage = {
    message: newMessages,
    id: Math.floor(Math.random() * 1000),
  };

  initialState = {
    ...initialState,
    dialogs: {
      ...initialState.dialogs,
      messages: [...initialState.dialogs.messages, newMessage],
      newMessage: "",
    },
  };

  rerenderEntireTree(initialState);
};

export const addPost = (newText) => {
  const newPost = {
    post: newText,
    id: Math.floor(Math.random() * 1000),
  };

  initialState.profile = {
    ...initialState.profile,
    posts: [...initialState.profile.posts, newPost],
    newPost: "",
  };

  rerenderEntireTree(initialState);
};

export const onNewPostChange = (newText) => {
  initialState = {
    ...initialState,
    profile: {
      ...initialState.profile,
      newPost: newText,
    },
  };

  rerenderEntireTree(initialState);
};

export const onNewMessageChange = (newText) => {
  initialState = {
    ...initialState,
    dialogs: {
      ...initialState.dialogs,
      newMessage: newText,
    },
  };

  rerenderEntireTree(initialState);
};

// const rootReducer = (state = initialState, action) => {
//   return state;
// };

// export const store = createStore(rootReducer);
