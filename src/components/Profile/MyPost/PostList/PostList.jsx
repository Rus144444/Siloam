import css from "./PostList.module.css";
import { Post } from "./Post/Post";

export const PostList = ({ posts }) => {
  return (
    <ul className={css.list}>
      {posts.map(({ post, id }) => (
        <Post key={id} text={post} />
      ))}
    </ul>
  );
};
