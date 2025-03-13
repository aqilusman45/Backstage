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
      "text-white bg-black rounded-full hover:bg-white transform hover:scale-[1.02] hover:shadow-md hover:text-black border border-2-black":
        variant === "primary",

      "text-black bg-white border border-white hover:border-black rounded-full hover:bg-black hover:text-white transform hover:scale-[1.02]":
        variant === "secondary",

      "text-black border border-2-black text-black rounded-full hover:bg-black hover:text-white transform hover:scale-[1.02]":
        variant === "outline",

      "rounded-full font-medium text-lg xl:text-xxii px-medium-x py-medium-y ":
        size === "large",
      "rounded-full text-base lg:text-lg xl:text-20 font-medium px-8 xl:px-medium-x py-normal-y ":
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
