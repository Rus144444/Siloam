import { connect } from "react-redux";
import {
  addNewPostCreator,
  updateNewPostTextCreator,
} from "../../../redux/profile-reducer";
import { MyPost } from "./MyPost";

const mapStateToProps = (state) => ({
  newPost: state.profile.newPost,
  posts: state.profile.posts,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (text) => dispatch(updateNewPostTextCreator(text)),
  handleSubmit: () => dispatch(addNewPostCreator()),
});

export const MyPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPost);

// export const MyPostContainer = () => {
//   const store = useContext(StoreContext);
//   const state = store.getState();

//   const handleSubmit = () => {
//     store.dispatch(addNewPostCreator());
//   };

//   const handleChange = (text) => {
//     store.dispatch(updateNewPostTextCreator(text));
//   };

//   return (
//     <div>
//       <MyPost
//         handleChange={handleChange}
//         handleSubmit={handleSubmit}
//         newPost={state.profile.newPost}
//       />
//       <h3 className={css.title}>My post..</h3>
//<PostList posts={state.profile.posts} />
//     </div>
//   );
// };
