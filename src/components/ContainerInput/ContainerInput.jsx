import React from "react";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import css from "./ContainerInput.module.css";

export const ContainerInput = ({
  placeholder,
  titleButton,
  newMessage,
  onTextChange,
  onSubmit,
}) => {
  const inputRef = React.createRef();

  const handleSubmit = () => {
    const text = inputRef.current.value.trim();
    if (text !== "") {
      onSubmit(text);
    }
  };

  const handleChange = () => {
    const text = inputRef.current.value;
    onTextChange(text);
  };

  return (
    <div className={css.wrapper}>
      <Textarea
        handleChange={handleChange}
        placeholder={placeholder}
        newMessage={newMessage}
        ref={inputRef}
      />
      <Button onClick={handleSubmit}>{titleButton}</Button>
    </div>
  );
};
