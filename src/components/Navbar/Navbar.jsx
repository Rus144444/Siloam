import { NavLink } from "react-router-dom";
import css from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={css.sidebar}>
      <nav className={css.navMenu}>
        <div className={css.navLink}>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? `${css.navLink} ${css.activeLink}` : css.navLink
            }
          >
            Profile
          </NavLink>
        </div>
        <div className={css.navLink}>
          <NavLink
            to="/dialogs"
            className={({ isActive }) =>
              isActive ? `${css.navLink} ${css.activeLink}` : css.navLink
            }
          >
            Message
          </NavLink>
        </div>
        <div className={css.navLink}>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive ? `${css.navLink} ${css.activeLink}` : css.navLink
            }
          >
            Users
          </NavLink>
        </div>
        <a href="4" className={css.navLink}>
          Setting
        </a>
      </nav>
    </div>
  );
};
