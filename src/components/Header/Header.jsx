import css from "./Header.module.css";

export const Header = () => {
  return (
    <div className={css.header}>
      <a className={css.logo} href="x">
        SiloamBook
      </a>
    </div>
  );
};
