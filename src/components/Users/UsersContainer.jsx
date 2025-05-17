// import { Users } from "./Users"; // 👈 Обязательно импортируй сам компонент
// import {
//   followActionCreate,
//   unfollowActionCreate,
//   setUsersActionCreate,
// } from "../../redux/users-reducer";
// import { connect } from "react-redux";

// const mapStateToProps = (state) => {
//   return {
//     users: state.users.user,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => dispatch(followActionCreate(userId)),
//     unfollow: (userId) => dispatch(unfollowActionCreate(userId)),
//     setUser: (users) => dispatch(setUsersActionCreate(users)),
//   };
// };

// // ✅ оборачиваем Users и экспортируем
// export default connect(mapStateToProps, mapDispatchToProps)(Users);
