import React from "react";
import css from "./MyPost.module.css";
import { Textarea } from "../../Textarea/Textarea";
import { Button } from "../../Button/Button";
import { Post } from "./Post/Post";

export const MyPost = ({ newPost, posts, handleSubmit, handleChange }) => {
  const inputRef = React.createRef();
  const onPostSubmit = () => {
    handleSubmit();
  };

  const onPostChange = () => {
    const text = inputRef.current.value;
    handleChange(text);
  };

  return (
    <div className={css.form}>
      <ul className={css.list}>
        {posts.map(({ post, id }) => (
          <Post key={id} text={post} />
        ))}
      </ul>
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
