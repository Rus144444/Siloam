import css from "./ContentItem.module.css";

export const ContentItem = ({ children }) => {
  return <li className={css.item}>{children}</li>;
};
