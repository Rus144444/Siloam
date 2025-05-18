import React from "react";
import css from "./Messages.module.css";
import { Message } from "./Message/Message";
import { Button } from "../../Button/Button";
import { Textarea } from "../../Textarea/Textarea";

export const Messages = ({
  newMessage,
  messages,
  handleChange,
  handleSubmit,
}) => {
  const inputRef = React.createRef();

  const onMessageSubmit = () => {
    handleSubmit();
  };

  const onMessageChange = () => {
    const text = inputRef.current.value;
    handleChange(text);
  };

  return (
    <div className={css.list}>
      {messages.map(({ message, id }) => (
        <Message key={id}>{message}</Message>
      ))}

      <div className={css.wrapper}>
        <Textarea
          handleChange={onMessageChange}
          placeholder="Enter your message..."
          newMessage={newMessage}
          ref={inputRef}
        />
        <Button onClick={onMessageSubmit}>Send</Button>
      </div>
    </div>
  );
};
