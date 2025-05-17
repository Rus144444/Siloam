import React from "react";
import css from "./MyPost.module.css";
import { Textarea } from "../../Textarea/Textarea";
import { Button } from "../../Button/Button";

export const MyPost = ({ newPost, handleSubmit, handleChange, inputRef }) => {
  const onPostSubmit = () => {
    handleSubmit();
  };

  const onPostChange = () => {
    handleChange();
  };

  return (
    <div className={css.form}>
      <div className={css.wrapper}>
        <Textarea
          handleChange={onPostChange}
          placeholder="Add new post.."
          newMessage={newPost}
          ref={inputRef}
        />
        <Button onClick={onPostSubmit}>Add post</Button>
      </div>
    </div>
  );
};
