import css from "./MyInfo.module.css";
import avatar from "../../../images/photo.jpg";
import { Img } from "../../Img/Img";
import { Content } from "./Content/Content";

export const MyInfo = () => {
  return (
    <div className={css.contentWrapper}>
      <Img className={css.img} src={avatar} alt="avatar profile" />
      <Content />
    </div>
  );
};
