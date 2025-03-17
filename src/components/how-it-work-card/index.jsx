import classnames from "classnames";
import Image from "next/image";

export default function HowItWorkCard({
  otherClasses,
  title,
  content,
  image,
  sno,
}) {
  const howItWorkCardClasses = classnames(
    otherClasses,
    "rounded overflow-hidden flex flex-col justify-between h-full",
  );

  return (
    <div className={howItWorkCardClasses} data-testid="how-it-work-card">
      <div className="flex items-start gap-y-5 sm:gap-x-8 lg:gap-x-14 mb-6 sm:mb-8 lg:mb-10">
        <h2 className="font-semibold text-40 sm:text-50 lg:text-80 leading-none text-primary font-instrument-sans">
          {sno}
        </h2>
        <div>
          <h2 className="font-semibold text-2xl sm:text-3xl lg:text-40 mb-2 font-instrument-sans">
            {title}
          </h2>
          <p className="text-lg lg:text-xl font-instrument-sans font-normal text-gray-900">
            {content}
          </p>
        </div>
      </div>
      {image && (
        <Image
          src={image}
          alt={title}
          width={545}
          height={484}
          className="w-full object-cover rounded-lg"
        />
      )}
    </div>
  );
}
