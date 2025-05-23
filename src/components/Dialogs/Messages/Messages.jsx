import { Message } from "./Message/Message";
import { ContainerInput } from "../../ContainerInput/ContainerInput";
import css from "./Messages.module.css";

export const Messages = ({ dialogs, addMessage, onNewMessageChange }) => {
  return (
    <div className={css.list}>
      {dialogs.messages.map(({ message, id }) => (
        <Message key={id}>{message}</Message>
      ))}
      <ContainerInput
        placeholder="Enter your message..."
        titleButton="Send"
        newMessage={dialogs.newMessage}
        onTextChange={onNewMessageChange}
        onSubmit={addMessage}
      />
    </div>
  );
};
