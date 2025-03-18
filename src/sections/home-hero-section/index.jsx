import Button from "@/components/button";
import { homePageMocks } from "@/mocks/home-page";
import classnames from "classnames";
import Image from "next/image";

export default function HomeHeroSection({ otherClasses }) {
  const homeHeroSectionClasses = classnames(
    otherClasses,
    "mb-14 lg:mb-20 overflow-x-clip   flex items-center justify-center flex-col",
  );
  const { text, subText, span, subText2 } = homePageMocks.homeHero;

  return (
    <section className={homeHeroSectionClasses} data-testid="home-hero-section">
      <div className="relative w-full">
        <div className="w-full h-full absolute top-0 left-0">
          <Image
            src="/png/hero-image.png"
            alt="Background Image"
            width={2000}
            height={1016}
            className="w-full h-full object-cover rounded-b-3xl lg:rounded-b-60"
            priority
          />
        </div>

        <div className="max-w-1120 mx-auto relative pt-36 pb-32 md:pt-40 md:pb-40 lg:pt-52 lg:pb-96 px-6">
          <h1 className="font-instrument-sans uppercase leading-none text-40 sm:text-50 sm:leading-16 lg:leading-20 md:text-65 lg:text-85 leading-100 font-bold text-white">
            Turn <span className="italic text-primary">participants</span> into
            performers!
          </h1>
          <p className="text-gray-900 font-normal text-xl font-instrument-sans my-6 max-w-703 lg:pr-10">
            {text}
          </p>
          <Button label="Get Started" variant="secondary" size="medium" />
        </div>
      </div>

      <div className="relative lg:px-10 -mt-8 md:-mt-24 lg:-mt-80 mx-6">
        <Image
          src="/png/hero.png"
          alt="Background Image"
          width={1934}
          height={800}
          className="w-full lg:w-auto"
          priority
        />
        <Image
          src="/svg/qr-code.svg"
          alt="QR Code"
          width={205}
          height={205}
          className="w-36 h-36 lg:w-52 lg:h-52 absolute -top-14 right-2 lg:-top-36 lg:right-52"
        />
        <p className="text-xl md:2xl lg:text-35 uppercase font-instrument-sans max-w-1120 mx-auto mt-8 lg:mt-24 text-center font-bold leading-tracker xl:px-8">
          {subText}
          <span className="text-black/50 font-medium italic"> {span}</span>
          {subText2}
        </p>
        <div className="bg-black hover:bg-primary duration-300 cursor-pointer w-24 h-24 lg:w-119 lg:h-119 p-2 rounded-full flex items-center justify-center mx-auto mt-8 lg:mt-14">
          <Image
            src="/png/decorative.png"
            alt="Decorative Image"
            width={30}
            height={30}
            className="w-6 h-6"
          />
        </div>
      </div>
    </section>
  );
}
