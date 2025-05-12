import React from "react";
import { Textarea } from "../../../../Textarea/Textarea";
import { Button } from "../../../../Button/Button";
import css from "./ContainerInputPost.css";
import { addNewPostCreator } from "../../../../../redux/profile-reducer";
import { updateNewPostTextCreator } from "../../../../../redux/profile-reducer";

export const ContainerInputPost = ({
  placeholder,
  titleButton,
  newMessage,
  dispatch,
}) => {
  const inputRef = React.createRef();

  const handleSubmit = () => {
    dispatch(addNewPostCreator());
  };

  const handleChange = () => {
    const text = inputRef.current.value;
    dispatch(updateNewPostTextCreator(text));
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
