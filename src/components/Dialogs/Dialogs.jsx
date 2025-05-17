import { ListDialogs } from "./ListDialogs/ListDialogs";
import css from "./Dialogs.module.css";
import { MessagesContainer } from "./Messages/MessagesContainer";

export const Dialogs = () => {
  return (
    <div className={css.dialogs}>
      <div className={css.dialogWrapper}>
        <ListDialogs />
        <MessagesContainer />
      </div>
    </div>
  );
};
