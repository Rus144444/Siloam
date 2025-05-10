import { NavLink } from "react-router-dom";
import css from "./Dialog.module.css";

export const Dialog = ({ children, number, id }) => {
  const path = `/dialogs/${number}`;

  return (
    <NavLink to={path} key={id} className={css.item}>
      {children}
    </NavLink>
  );
};
