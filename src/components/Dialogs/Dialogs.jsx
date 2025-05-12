import { ListDialogs } from "./ListDialogs/ListDialogs";
import { Messages } from "./Messages/Messages";
import css from "./Dialogs.module.css";

export const Dialogs = ({ dialogs, dispatch }) => {
  return (
    <div className={css.dialogs}>
      <div className={css.dialogWrapper}>
        <ListDialogs />

        <Messages dialogs={dialogs} dispatch={dispatch} />
      </div>
    </div>
  );
};
