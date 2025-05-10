import css from "./MyPost.module.css";
import { ContainerInput } from "../../ContainerInput/ContainerInput";
import { PostList } from "./PostList/PostList";

export const MyPost = ({ posts, addPost, onNewPostChange }) => {
  return (
    <div className={css.form}>
      <ContainerInput
        placeholder="Add new post.."
        titleButton="Add post"
        newMessage={posts.newPost}
        onTextChange={onNewPostChange}
        onSubmit={addPost}
      />
      <h3 className={css.title}>My post..</h3>
      <PostList posts={posts} />
    </div>
  );
};
