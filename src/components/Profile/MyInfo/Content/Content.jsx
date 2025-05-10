import css from "./Content.module.css";
import { ContentList } from "./ContentList/ContentList";
import { UserName } from "./UserName/UserName";

export const Content = () => {
  return (
    <div className={css.content}>
      <UserName />
      <ContentList />
    </div>
  );
};
