const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATA-NEW-MESSAGE-TEXT";

const initialState = {
  messages: [
    { message: "Hello, hello", id: 1 },
    { message: "Hello, wo wo wo ", id: 2 },
  ],
  newMessage: "",
};

export const dialogReducer = (state = initialState, action) => {
  if (action.type === ADD_MESSAGE) {
    const newMessage = {
      message: state.newMessage,
      id: Math.floor(Math.random() * 1000),
    };
    return {
      ...state,
      messages: [...state.messages, newMessage],
      newMessage: "",
    };
  }

  if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    return {
      ...state,
      newMessage: action.newMessage,
    };
  }

  return state;
};

export const addNewMessageCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: text,
});
