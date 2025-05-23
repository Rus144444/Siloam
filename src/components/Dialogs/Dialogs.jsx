import { ListDialogs } from "./ListDialogs/ListDialogs";
import { Messages } from "./Messages/Messages";
import css from "./Dialogs.module.css";

export const Dialogs = ({ dialogs, addMessage, onNewMessageChange }) => {
  return (
    <div className={css.dialogs}>
      <div className={css.dialogWrapper}>
        <ListDialogs />

        <Messages
          dialogs={dialogs}
          addMessage={addMessage}
          onNewMessageChange={onNewMessageChange}
        />
      </div>
    </div>
  );
};
