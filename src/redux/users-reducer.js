// const FOLLOW = "FOLLOW";
// const UNFOLLOW = "UNFOLLOW";
// const SET_USERS = "SET-USERS";

// const initialState = {
//   users: [
//     { user: "Ruslan", id: 1, followed: true, country: "Ukraine" },
//     { user: "Aliona", id: 2, followed: false, country: "Ukraine" },
//     { user: "Maks", id: 3, followed: true, country: "Ukraine" },
//   ],
//   search: "",
// };

// export const usersReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FOLLOW:
//       return {
//         ...state,
//         users: state.users.map((user) =>
//           user.id === action.userId ? { ...user, followed: true } : user
//         ),
//       };
//     case UNFOLLOW:
//       return {
//         ...state,
//         users: state.users.map((user) =>
//           user.id === action.userId ? { ...user, followed: false } : user
//         ),
//       };
//     case SET_USERS:
//       return {
//         ...state,
//         users: [...state.users, ...action.users],
//       };
//     default:
//       return state;
//   }
// };

// // ✅ Экшены с правильными типами
// export const followActionCreate = (userId) => ({ type: FOLLOW, userId });
// export const unfollowActionCreate = (userId) => ({ type: UNFOLLOW, userId });
// export const setUsersActionCreate = (users) => ({ type: SET_USERS, users });
