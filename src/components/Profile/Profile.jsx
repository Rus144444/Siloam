import css from "./Profile.module.css";
import background from "../../images/images.jpeg";
import { MyPost } from "./MyPost/MyPost";
import { MyInfo } from "./MyInfo/MyInfo";
import { Img } from "../Img/Img";

export const Profile = ({ posts, dispatch }) => {
  return (
    <div className={css.profile}>
      <div className={css.profileWrapper}>
        <div className={css.backgroundWrapper}>
          <Img className={css.background} src={background} alt="background" />
        </div>
        <MyInfo />
        <MyPost posts={posts} dispatch={dispatch} />
      </div>
    </div>
  );
};
