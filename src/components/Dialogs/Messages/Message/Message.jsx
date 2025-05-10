import { Img } from "../../../Img/Img";
import userPhoto from "../../../../images/photo.jpg";
import css from "./Message.module.css";

export const Message = ({ children }) => {
  return (
    <div className={css.message}>
      <div className={css.wrapperIcon}>
        <Img src={userPhoto} alt="Icon user photo" className={css.icon} />
      </div>
      <p className={css.text}>{children}</p>
    </div>
  );
};
