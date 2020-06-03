import React from "react";

const Button = ({
  children,
  customClass,
  clicked,
  title,
  isLoading,
  attributes,
}) => {
  return (
    <button
      title={title}
      className={`button ${customClass}`}
      onClick={clicked && ((e) => clicked(e))}
      disabled={isLoading}
      {...attributes}
    >
      {children} {title}
    </button>
  );
};
export default Button;
