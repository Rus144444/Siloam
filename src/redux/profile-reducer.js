const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
  posts: [
    { post: "Get good at JavaScript", id: 1 },
    { post: "Discover Redux", id: 2 },
    { post: "Build amazing apps", id: 3 },
  ],
  newPost: "",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        post: state.newPost,
        id: Math.floor(Math.random() * 1000),
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPost: "",
      };
    }

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPost: action.newText,
      };

    default:
      return state;
  }
};

export const addNewPostCreator = () => ({ type: ADD_POST });

export const updateNewPostTextCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
