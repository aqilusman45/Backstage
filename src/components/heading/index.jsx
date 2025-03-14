import classnames from "classnames";

export default function Heading({ otherClasses, title, subTitle }) {
  const headingClasses = classnames(otherClasses);

  return (
    <div className={headingClasses} data-testid="heading">
      <h2 className="text-center text-4xl sm:text-5xl lg:text-65 font-bold order-1 sm:order-0 text-black font-instrument-sans uppercase text-center">
        {title} <span className="font-medium italic">{subTitle}</span>
      </h2>
    </div>
  );
}
