import css from "./Post.module.css";

export const Post = ({ text = "text" }) => {
  return <li className={css.item}>{text}</li>;
};
