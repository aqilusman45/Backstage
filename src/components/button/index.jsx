"use client";
import classNames from "classnames";

const Button = ({
  label = "Button",
  variant = "primary",
  otherClasses = "",
  form,
  onClick,
  type,
  size,
}) => {
  const buttonClasses = classNames(
    "cursor-pointer font-instrument-sans transition-all duration-300 ease-in-out group relative overflow-hidden",
    {
      "text-white bg-black px-medium-x py-medium-y  text-xxii rounded-full hover:bg-white transform hover:scale-[1.02] hover:shadow-md hover:text-black border border-2-black":
        variant === "primary",

      "rounded-full font-medium text-xxii px-medium-x py-medium-y ":
        size === "large",
      "rounded-full text-20 font-medium px-medium-x py-normal-y ":
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
