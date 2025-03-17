"use client";
import { useRef } from "react";
import Heading from "@/components/heading";
import classnames from "classnames";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { homePageMocks } from "@/mocks/home-page";

export default function EventToLife({ otherClasses }) {
  const sliderRef = useRef(null);
  const eventToLifeClasses = classnames(otherClasses, "mx-6 my-14 md:my-20");
  const { services } = homePageMocks;

  const settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1.5 } },
    ],
  };

  return (
    <section className={eventToLifeClasses} data-testid="event-to-life">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Heading
            title="Bring your next event"
            subTitle="to life"
            otherClasses="text-center lg:text-start w-full lg:w-2/3"
          />
          <div className="hidden lg:flex justify-end items-center gap-4">
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="p-6 rounded-full hover:bg-primary bg-gray-800 transition-all ease-in-out duration-300 flex items-center justify-center cursor-pointer"
            >
              <Image
                src="/svg/arrow-left.svg"
                width={30}
                height={30}
                alt="arrow-left"
              />
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              className="p-6 rounded-full hover:bg-primary bg-gray-800 transition-all ease-in-out duration-300 flex items-center justify-center cursor-pointer"
            >
              <Image
                src="/svg/arrow-right.svg"
                width={30}
                height={30}
                alt="arrow-right"
              />
            </button>
          </div>
        </div>

        <Slider ref={sliderRef} {...settings} className="mt-8 lg:mt-12">
          {[...services, ...services, ...services].map(
            ({ image, alt, heading, text }, index) => (
              <div className="px-1 md:px-5 outline-none" key={index}>
                <div className="relative flex flex-col h-full gap-4 rounded-3xl overflow-hidden group">
                  <Image
                    src={image}
                    priority
                    alt={alt}
                    width={421}
                    height={449}
                    className="w-full h-auto rounded-3xl"
                  />
                  <div className="p-3 md:p-6 flex flex-col flex-grow absolute bottom-0 left-0 md:group-hover:bg-black/40 transition-all ease duration-300 min-h-28 min-h-36 lg:min-h-52">
                    <h3 className="text-base text-lg lg:text-xl text-white font-bold font-instrument-sans">
                      {heading}
                    </h3>
                    <p className="text-white/80 text-sm md:text-base font-normal font-instrument-sans flex-grow">
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            ),
          )}
        </Slider>

        <div className="flex justify-center mt-6 lg:hidden gap-4">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="p-5 rounded-full hover:bg-primary bg-gray-800 flex items-center justify-center"
          >
            <Image
              src="/svg/arrow-left.svg"
              width={20}
              height={20}
              alt="arrow-left"
            />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="p-5 rounded-full hover:bg-primary bg-gray-800 flex items-center justify-center"
          >
            <Image
              src="/svg/arrow-right.svg"
              width={20}
              height={20}
              alt="arrow-right"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
