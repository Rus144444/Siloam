const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATA-NEW-MESSAGE-TEXT";

export const dialogReducer = (state, action) => {
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
