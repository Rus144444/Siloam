import { ContentItem } from "./ContentItem/ContentItem";
import css from "./ContentList.module.css";

export const ContentList = () => {
  return (
    <ul className={css.list}>
      <ContentItem>Data of birth: 7 Jun</ContentItem>
      <ContentItem>City: Kharkiv</ContentItem>
    </ul>
  );
};
