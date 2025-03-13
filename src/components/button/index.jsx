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

      "text-black bg-white text-xxii rounded-full hover:bg-black hover:text-white transform hover:scale-[1.02]":
        variant === "secondary",

      "text-black border border-2-black text-black text-xxii rounded-full hover:bg-black hover:text-white transform hover:scale-[1.02]":
        variant === "outline",

      "rounded-full font-medium text-xxii px-medium-x py-medium-y ":
        size === "large",
      "rounded-full text-20 font-medium px-medium-x py-normal-y ":
        size === "medium",
      "rounded-full !text-base font-medium !px-8 !py-4 ": size === "small",
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
