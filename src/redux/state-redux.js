import { profileReducer } from "./profile-reducer";
import { dialogReducer } from "./dialog-reducer";

export const store = {
  _state: {
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
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log("State was changed");
  },

  _subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.dialogs = dialogReducer(this._state.dialogs, action);
    this._callSubscriber();
  },
};

// import { createStore } from "redux";

// const rootReducer = (state = initialState, action) => {
//   return state;
// };

// export const store = createStore(rootReducer);
