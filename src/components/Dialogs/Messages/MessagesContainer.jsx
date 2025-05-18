import { connect } from "react-redux";
import {
  addNewMessageCreator,
  updateNewMessageTextCreator,
} from "../../../redux/dialog-reducer";
import { Messages } from "./Messages";

const mapStateToProps = (state) => ({
  newMessage: state.dialogs.newMessage,
  messages: state.dialogs.messages,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (text) => dispatch(updateNewMessageTextCreator(text)),
  handleSubmit: () => dispatch(addNewMessageCreator()),
});

export const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

// import React from "react";
// import { Message } from "./Message/Message";
// import { Messages } from "./Messages";
// import { addNewMessageCreator } from "../../../redux/dialog-reducer";
// import { updateNewMessageTextCreator } from "../../../redux/dialog-reducer";
// import css from "./Messages.module.css";
// import { StoreContext } from "../../../StoreContext";
// import { useContext } from "react";

// export const MessagesContainer = () => {
//   const store = useContext(StoreContext);
//   const state = store.getState();
//   const inputRef = React.createRef();

//   const handleSubmit = () => {
//     store.dispatch(addNewMessageCreator());
//   };

//   const handleChange = () => {
//     const text = inputRef.current.value;
//     store.dispatch(updateNewMessageTextCreator(text));
//   };

//   return (
//     <div className={css.list}>
//       {state.dialogs.messages.map(({ message, id }) => (
//         <Message key={id}>{message}</Message>
//       ))}

//       <div className={css.wrapper}>
//         <Messages
//           handleChange={handleChange}
//           placeholder="Enter your message..."
//           newMessage={state.dialogs.newMessage}
//           handleSubmit={handleSubmit}
//           inputRef={inputRef}
//         />
//       </div>
//     </div>
//   );
// };

// import React from "react";
// import { Message } from "./Message/Message";
// import { Messages } from "./Messages";
// import { addNewMessageCreator } from "../../../redux/dialog-reducer";
// import { updateNewMessageTextCreator } from "../../../redux/dialog-reducer";
// import css from "./Messages.module.css";
// import { StoreContext } from "../../../StoreContext";

// export const MessagesContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {({ store }) => {
//         const state = store.getState();
//         const inputRef = React.createRef();

//         const handleSubmit = () => {
//           store.dispatch(addNewMessageCreator());
//         };

//         const handleChange = () => {
//           const text = inputRef.current.value;
//           store.dispatch(updateNewMessageTextCreator(text));
//         };

//         return (
//           <div className={css.list}>
//             {state.dialogs.messages.map(({ message, id }) => (
//               <Message key={id}>{message}</Message>
//             ))}

//             <div className={css.wrapper}>
//               <Messages
//                 handleChange={handleChange}
//                 placeholder="Enter your message..."
//                 newMessage={state.dialogs.newMessage}
//                 handleSubmit={handleSubmit}
//                 inputRef={inputRef}
//               />
//             </div>
//           </div>
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };
