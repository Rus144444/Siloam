import React from "react";
import css from "./Messages.module.css";
import { Button } from "../../Button/Button";
import { Textarea } from "../../Textarea/Textarea";

export const Messages = ({
  newMessage,
  handleChange,
  handleSubmit,
  inputRef,
}) => {
  const onMessageSubmit = () => {
    handleSubmit();
  };

  const onMessageChange = () => {
    const text = inputRef.current.value;
    handleChange(text);
  };

  return (
    <div className={css.wrapper}>
      <Textarea
        handleChange={onMessageChange}
        placeholder="Enter your message..."
        newMessage={newMessage}
        ref={inputRef}
      />
      <Button onClick={onMessageSubmit}>Send</Button>
    </div>
  );
};
