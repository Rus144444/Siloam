import React from "react";
import { Message } from "./Message/Message";
import { Messages } from "./Messages";
import { addNewMessageCreator } from "../../../redux/dialog-reducer";
import { updateNewMessageTextCreator } from "../../../redux/dialog-reducer";
import css from "./Messages.module.css";
import { StoreContext } from "../../../StoreContext";

export const MessagesContainer = () => {
  return (
    <StoreContext.Consumer>
      {({ store }) => {
        const state = store.getState();
        const inputRef = React.createRef();

        const handleSubmit = () => {
          store.dispatch(addNewMessageCreator());
        };

        const handleChange = () => {
          const text = inputRef.current.value;
          store.dispatch(updateNewMessageTextCreator(text));
        };

        return (
          <div className={css.list}>
            {state.dialogs.messages.map(({ message, id }) => (
              <Message key={id}>{message}</Message>
            ))}

            <div className={css.wrapper}>
              <Messages
                handleChange={handleChange}
                placeholder="Enter your message..."
                newMessage={state.dialogs.newMessage}
                handleSubmit={handleSubmit}
                inputRef={inputRef}
              />
            </div>
          </div>
        );
      }}
    </StoreContext.Consumer>
  );
};
