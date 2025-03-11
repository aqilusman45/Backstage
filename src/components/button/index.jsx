"use client";
import classNames from "classnames";

const Button = ({
  label = "Button",
  variant = "primary",
  otherClasses = "",
  form,
  onClick,
  type,
  size = "medium",
}) => {
  const buttonClasses = classNames(
    "cursor-pointer font-instrument-sans transition-all duration-300 ease-in-out group relative overflow-hidden",
    {
      "text-white bg-black px-medium-x py-medium-y  text-xxii rounded-full hover:bg-gradient-to-r hover:from-black/50 hover:to-black/60 transform hover:scale-105 hover:shadow-sm":
        variant === "primary",

      "rounded-full font-medium text-xxii px-medium-x py-medium-y ":
        size === "large",
      "rounded-full text-xl font-medium px-medium-x py-normal-y ":
        size === "medium",
    },
    otherClasses,
  );

  const handleClick = (e) => onClick?.(e, form);

  return (
    <button
      type={type || "button"}
      onClick={handleClick}
      className={buttonClasses}
      data-testid="button"
    >
      {label}
    </button>
  );
};

export default Button;
