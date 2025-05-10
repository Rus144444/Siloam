import { Dialog } from "./Dialog/Dialog";
import css from "./ListDialogs.module.css";

export const ListDialogs = () => {
  return (
    <ul className={css.list}>
      <Dialog id="1" number="1">
        Dima
      </Dialog>
      <Dialog id="2" number="2">
        Ruslan
      </Dialog>
      <Dialog id="3" number="3">
        Alex
      </Dialog>
    </ul>
  );
};
