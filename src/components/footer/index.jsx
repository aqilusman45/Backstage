import classnames from "classnames";
import Image from "next/image";
import Button from "../button";
import Heading from "../heading";
export default function Footer({ otherClasses }) {
  const footerClasses = classnames(
    otherClasses,
    "overflow-x-clip flex items-center justify-center flex-col overflow-clip",
  );

  return (
    <div className={footerClasses} data-testid="footer">
      <div className="relative w-full">
        <div className="w-full h-full absolute top-0 left-0">
          <Image
            src="/png/footer-image.png"
            alt="footer Image"
            width={1120}
            height={1016}
            className="w-full h-full object-fill"
            priority
          />
        </div>
        <div className="max-w-1300 mx-auto relative pt-20 pb-10 px-6 xl:px-0">
          <h2 className="text-center text-4xl sm:text-5xl lg:text-95 font-bold order-1 sm:order-0 text-black font-instrument-sans uppercase text-center text-white">
            Turn participants into
            <span className="font-medium italic text-primary font-medium">
              performers!
            </span>
          </h2>
          <h2 className="text-center text-4xl sm:text-5xl lg:text-95 font-bold order-1 sm:order-0 text-black font-instrument-sans uppercase text-center text-white">
            Backstage Experiential
          </h2>

          <div className="flex flex-col md:flex-row justify-between gap-5 max-w-1120 mx-auto mt-8 relative">
            <div className="flex flex-col sm:flex-row flex-wrap gap-5">
              <Button
                label="LinkedIn"
                variant="secondary"
                size="medium"
                otherClasses="w-full sm:w-auto !px-12 !py-6"
              />
              <Button
                label="Instagram"
                variant="secondary"
                size="medium"
                otherClasses="w-full sm:w-auto !px-12 !py-6"
              />
              <Button
                label="Twitter/X"
                variant="secondary"
                size="medium"
                otherClasses="w-full sm:w-auto  !px-16 !py-6"
              />
            </div>

            <Image
              src="/svg/qr-code.svg"
              alt="QR Code"
              width={205}
              height={205}
              className="w-36 h-36 lg:w-52 lg:h-52 mx-auto mt-8 md:mt-0 md:absolute -top-10 right-2 lg:-top-20 lg:right-0"
            />
          </div>

          <p className="pt-10 pb-10 md:pt-32 text-white text-center font-instrument-sans text-22">
            <span className="text-primary">©backstage.</span> All rights
            reserved
          </p>
        </div>
      </div>
    </div>
  );
}
