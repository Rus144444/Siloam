import React from "react";
import { Textarea } from "../../../Textarea/Textarea";
import { Button } from "../../../Button/Button";
import css from "./ContainerInput.module.css";
import { addNewMessageCreator } from "../../../../redux/dialog-reducer";
import { updateNewMessageTextCreator } from "../../../../redux/dialog-reducer";

export const ContainerInput = ({
  placeholder,
  titleButton,
  newMessage,
  dispatch,
}) => {
  const inputRef = React.createRef();

  const handleSubmit = () => {
    dispatch(addNewMessageCreator());
  };

  const handleChange = () => {
    const text = inputRef.current.value;
    dispatch(updateNewMessageTextCreator(text));
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
