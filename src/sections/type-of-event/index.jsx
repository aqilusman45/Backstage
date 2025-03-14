import Heading from "@/components/heading";
import { homePageMocks } from "@/mocks/home-page";
import classnames from "classnames";
import Image from "next/image";

export default function TypeOfEvent({ otherClasses }) {
  const typeOfEventClasses = classnames(
    otherClasses,
    "px-6 my-14 lg:my-20 relative",
  );
  const { events } = homePageMocks;
  return (
    <section className={typeOfEventClasses} data-testid="type-of-event">
      <Image
        src="/png/type-of-event.png"
        alt="event-background"
        width={700}
        height={1600}
        className="w-full h-full absolute top-0 left-0"
      />
      <div className="max-w-1120 mx-auto relative py-20 sm:py-32 lg:py-44">
        <Heading
          title="Ideal For All Types"
          subTitle="of Event"
          otherClasses="max-w-736 mx-auto text-center"
        />
        <div className="grid gap-8 grid-cols-12 mt-12">
          {events.map((event, index) => (
            <div
              key={index}
              className={classnames(
                "bg-white shadow-sm rounded-3xl p-6 flex flex-col gap-3 items-start",
                {
                  "col-span-12": event.cols.default === 12,
                  "sm:col-span-6": event.cols.sm === 6,
                  "md:col-span-4": event.cols.md === 4,
                  "lg:col-span-4": event.cols.lg === 4,
                  "md:col-span-3": event.cols.md === 3,
                  "lg:col-span-3": event.cols.lg === 3,
                  "md:col-span-6": event.cols.md === 6,
                  "lg:col-span-6": event.cols.lg === 6,
                  "row-span-2": event.rows === 2,
                },
              )}
            >
              <div className="p-3 flex items-center justify-center rounded-full bg-gray-300">
                <Image
                  src={event.icon}
                  alt={event.title}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-xl font-semibold text-black">
                {event.title}
              </h3>
              <p className="text-base text-normal text-gray-900">
                {event.text}
              </p>
              {event?.image && (
                <Image
                  src={event.image}
                  alt="Fan Cam App"
                  width={200}
                  height={400}
                  className="h-auto mx-auto"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
