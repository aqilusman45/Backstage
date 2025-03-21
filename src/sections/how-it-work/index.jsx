import Heading from "@/components/heading";
import HowItWorkCard from "@/components/how-it-work-card";
import { homePageMocks } from "@/mocks/home-page";
import classnames from "classnames";
import Image from "next/image";

export default function HowItWork({ otherClasses }) {
  const howItWorkClasses = classnames(
    otherClasses,
    "my-14 lg:my-100 relative overflow-x-clip relative px-6 scroll-mt-40 overflow-hidden",
  );
  const { cardsData } = homePageMocks;

  return (
    <section
      className={howItWorkClasses}
      data-testid="how-it-work"
      id="how-it-work"
    >
      <Image
        src="/png/how-it-works-bg.png"
        alt=""
        width={3205}
        height={800}
        className="absolute -top-230 -left-436 h-936 min-w-3205 h-full lg:-mt-20"
      />

      <div className="max-w-1120 mx-auto pt-20 lg:pt-120">
        <Heading title="HOW IT" subTitle="works" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 mt-10 lg:mt-14 relative">
          {cardsData.map((card, index) => (
            <HowItWorkCard
              key={index}
              title={card.title}
              content={card.content}
              image={card.image}
              sno={card.sno}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
