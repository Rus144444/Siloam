const ADD_POST = "ADD-POST";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_POST_TEXT = "UPDATA-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATA-NEW-MESSAGE-TEXT";

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
    if (action.type === ADD_POST) {
      const newPost = {
        post: this.getState().profile.newPost,
        id: Math.floor(Math.random() * 1000),
      };

      this._state.profile = {
        ...this._state.profile,
        posts: [...this._state.profile.posts, newPost],
        newPost: "",
      };
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state = {
        ...this._state,
        profile: {
          ...this._state.profile,
          newPost: action.newText,
        },
      };
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      const newMessage = {
        message: this._state.dialogs.newMessage,
        id: Math.floor(Math.random() * 1000),
      };

      this._state = {
        ...this._state,
        dialogs: {
          ...this._state.dialogs,
          messages: [...this._state.dialogs.messages, newMessage],
          newMessage: "",
        },
      };

      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state = {
        ...this._state,
        dialogs: {
          ...this._state.dialogs,
          newMessage: action.newMessage,
        },
      };

      this._callSubscriber(this._state);
    }
  },
};

export const addNewPostCreator = () => {
  return { type: ADD_POST };
};

export const updateNewPostTextCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export const addNewMessageCreator = () => {
  return { type: ADD_MESSAGE };
};

export const updateNewMessageTextCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text };
};

// import { createStore } from "redux";

// const rootReducer = (state = initialState, action) => {
//   return state;
// };

// export const store = createStore(rootReducer);
