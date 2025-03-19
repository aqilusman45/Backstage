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
      "text-white bg-black rounded-full hover:bg-white active:bg-white transform hover:scale-[1.02] hover:shadow-md active:shadow-md hover:text-black active:text-black border border-2-black":
        variant === "primary",

      "text-black bg-white border border-white active:border-white hover:border-white rounded-full hover:bg-black active:bg-black active:text-white hover:text-white transform hover:scale-[1.02] active:scale-[1.02]":
        variant === "secondary",

      "text-black border border-2-black text-black rounded-full hover:bg-black active:bg-black hover:text-white active:text-white transform hover:scale-[1.02]":
        variant === "outline",

      "rounded-full font-medium text-lg xl:text-xxii px-medium-x py-medium-y ":
        size === "large",
      "rounded-full text-base lg:text-lg font-medium px-11 xl:px-11 py-normal-y ":
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
