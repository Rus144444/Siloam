import React from "react";
import css from "./Textarea.module.css";

export const Textarea = React.forwardRef(
  ({ placeholder, newMessage, handleChange }, ref) => {
    return (
      <textarea
        placeholder={placeholder}
        className={css.textarea}
        onChange={handleChange}
        value={newMessage}
        type="text"
        ref={ref}
      />
    );
  }
);
