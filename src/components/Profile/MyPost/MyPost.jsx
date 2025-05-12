import css from "./MyPost.module.css";
import { ContainerInputPost } from "./PostList/ContainerInputPost/ContainerInputPost";
import { PostList } from "./PostList/PostList";

export const MyPost = ({ posts, dispatch }) => {
  return (
    <div className={css.form}>
      <ContainerInputPost
        placeholder="Add new post.."
        titleButton="Add post"
        newMessage={posts.newPost}
        dispatch={dispatch}
      />
      <h3 className={css.title}>My post..</h3>
      <PostList posts={posts} />
    </div>
  );
};
