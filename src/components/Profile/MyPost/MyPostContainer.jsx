import React from "react";
import { PostList } from "./PostList/PostList";
import { addNewPostCreator } from "../../../redux/profile-reducer";
import { updateNewPostTextCreator } from "../../../redux/profile-reducer";
import { MyPost } from "./MyPost";
import css from "./MyPost.module.css";
import { StoreContext } from "../../../StoreContext";

export const MyPostContainer = () => {
  return (
    <StoreContext.Consumer>
      {({ store }) => {
        const state = store.getState();
        const inputRef = React.createRef();

        const handleSubmit = () => {
          store.dispatch(addNewPostCreator());
        };

        const handleChange = () => {
          const text = inputRef.current.value;
          store.dispatch(updateNewPostTextCreator(text));
        };

        return (
          <div>
            <MyPost
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              newPost={state.profile.newPost}
              inputRef={inputRef}
            />
            <h3 className={css.title}>My post..</h3>
            <PostList posts={state.profile.posts} />
          </div>
        );
      }}
    </StoreContext.Consumer>
  );
};
